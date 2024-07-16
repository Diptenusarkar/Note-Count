function displayUserInput() {
    var userInput500 = parseInt(document.getElementById("user__input500").value) || 0;
    var userInput200 = parseInt(document.getElementById("user__input200").value) || 0;
    var userInput100 = parseInt(document.getElementById("user__input100").value) || 0;
    var userInput50 = parseInt(document.getElementById("user__input50").value) || 0;
    var userInput20 = parseInt(document.getElementById("user__input20").value) || 0;
    var userInput10 = parseInt(document.getElementById("user__input10").value) || 0;
    var userInput5 = parseInt(document.getElementById("user__input5").value) || 0;
    var userInput2 = parseInt(document.getElementById("user__input2").value) || 0;
    var userInput1 = parseInt(document.getElementById("user__input1").value) || 0;

    var total500 = userInput500 * 500;
    var total200 = userInput200 * 200;
    var total100 = userInput100 * 100;
    var total50 = userInput50 * 50;
    var total20 = userInput20 * 20;
    var total10 = userInput10 * 10;
    var total5 = userInput5 * 5;
    var total2 = userInput2 * 2;
    var total1 = userInput1 * 1;

    document.getElementById("user__input500-total").textContent = total500;
    document.getElementById("user__input200-total").textContent = total200;
    document.getElementById("user__input100-total").textContent = total100;
    document.getElementById("user__input50-total").textContent = total50;
    document.getElementById("user__input20-total").textContent = total20;
    document.getElementById("user__input10-total").textContent = total10;
    document.getElementById("user__input5-total").textContent = total5;
    document.getElementById("user__input2-total").textContent = total2;
    document.getElementById("user__input1-total").textContent = total1;

    var totalSum = total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1;
    document.getElementById("total__number--display").textContent = totalSum.toLocaleString('en-IN');
    document.getElementById("total__number--display0").textContent = totalSum.toLocaleString('en-IN');

    return totalSum;
}

function resetInputs() {
    var inputs = document.querySelectorAll("#userInputForm input[type='tel']");
    inputs.forEach(function (input) {
        input.value = "";
    });
    var totals = document.querySelectorAll(".user__display, .total__number--display");
    totals.forEach(function (total) {
        total.textContent = "0";
    });
}

function printReceipt() {
    const pdfBlob = generatePDF();

    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'receipt.pdf';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

function generatePDF() {
    const userInput500 = parseInt(document.getElementById("user__input500").value) || 0;
    const userInput200 = parseInt(document.getElementById("user__input200").value) || 0;
    const userInput100 = parseInt(document.getElementById("user__input100").value) || 0;
    const userInput50 = parseInt(document.getElementById("user__input50").value) || 0;
    const userInput20 = parseInt(document.getElementById("user__input20").value) || 0;
    const userInput10 = parseInt(document.getElementById("user__input10").value) || 0;
    const userInput5 = parseInt(document.getElementById("user__input5").value) || 0;
    const userInput2 = parseInt(document.getElementById("user__input2").value) || 0;
    const userInput1 = parseInt(document.getElementById("user__input1").value) || 0;

    const total500 = userInput500 * 500;
    const total200 = userInput200 * 200;
    const total100 = userInput100 * 100;
    const total50 = userInput50 * 50;
    const total20 = userInput20 * 20;
    const total10 = userInput10 * 10;
    const total5 = userInput5 * 5;
    const total2 = userInput2 * 2;
    const total1 = userInput1 * 1;
    const totalSum = total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const receiptString = `
    Totals:
    500 x ${userInput500} = ${total500}
    200 x ${userInput200} = ${total200}
    100 x ${userInput100} = ${total100}
    50 x ${userInput50} = ${total50}
    20 x ${userInput20} = ${total20}
    10 x ${userInput10} = ${total10}
    5 x ${userInput5} = ${total5}
    2 x ${userInput2} = ${total2}
    1 x ${userInput1} = ${total1}
    
    Total Sum: ${totalSum} (${numberToWords(totalSum)})`;

    doc.text(receiptString, 10, 10);
    return doc.output('blob');
}

function shareButton() {
    const pdfBlob = generatePDF();
    const totalSum = displayUserInput();

    const shareData = {
        title: 'Receipt',
        text: `Here is the receipt with a total sum of ${totalSum}.`,
        files: [
            new File([pdfBlob], 'receipt.pdf', { type: 'application/pdf' })
        ]
    };

    if (navigator.share) {
        navigator.share(shareData).then(() => {
            console.log('Receipt shared successfully.');
        }).catch((error) => {
            console.error('Error sharing receipt:', error);
        });
    } else {
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'receipt.pdf';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
        alert('Web Share API is not supported in your browser. The receipt has been downloaded instead.');
    }
}

function numberToWords(num) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (num === 0) return 'zero';
    if (num < 0) return 'minus ' + numberToWords(Math.abs(num));

    let words = '';

    if (num >= 10000000) {  // Crore
        words += numberToWords(Math.floor(num / 10000000)) + ' crore ';
        num %= 10000000;
    }

    if (num >= 100000) {  // Lakh
        words += numberToWords(Math.floor(num / 100000)) + ' lakh ';
        num %= 100000;
    }

    if (num >= 1000) {  // Thousand
        words += numberToWords(Math.floor(num / 1000)) + ' thousand ';
        num %= 1000;
    }

    if (num >= 100) {  // Hundred
        words += numberToWords(Math.floor(num / 100)) + ' hundred ';
        num %= 100;
    }

    if (num >= 20) {  // Tens
        words += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
    } else if (num >= 10) {  // Teens
        words += teens[num - 10] + ' ';
        num = 0;
    }

    if (num > 0) {  // Ones
        words += ones[num] + ' ';
    }

    return words.trim();
}      // "fifty thousand one hundred twenty three"
