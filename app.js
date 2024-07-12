function displayUserInput() {
    // This is user input box 
    // var userInput2000 = document.getElementById("user__input2000").value;
    var userInput500 = document.getElementById("user__input500").value;
    var userInput200 = document.getElementById("user__input200").value;
    var userInput100 = document.getElementById("user__input100").value;
    var userInput50 = document.getElementById("user__input50").value;
    var userInput20 = document.getElementById("user__input20").value;
    var userInput10 = document.getElementById("user__input10").value;
    var userInput5 = document.getElementById("user__input5").value;
    var userInput2 = document.getElementById("user__input2").value;
    var userInput1 = document.getElementById("user__input1").value;

    // This display total number of amount user enter 
    // var total2000 = document.getElementById("user__input2000-total");
    var total500 = document.getElementById("user__input500-total");
    var total200 = document.getElementById("user__input200-total");
    var total100 = document.getElementById("user__input100-total");
    var total50 = document.getElementById("user__input50-total");
    var total20 = document.getElementById("user__input20-total");
    var total10 = document.getElementById("user__input10-total");
    var total5 = document.getElementById("user__input5-total");
    var total2 = document.getElementById("user__input2-total");
    var total1 = document.getElementById("user__input1-total");

    // This is going to calculate all amount 
    // var total2000 = total2000.textContent = userInput2000 * 2000;
    var total500 = total500.textContent = userInput500 * 500;
    var total200 = total200.textContent = userInput200 * 200;
    var total100 = total100.textContent = userInput100 * 100;
    var total50 = total50.textContent = userInput50 * 50;
    var total20 = total20.textContent = userInput20 * 20;
    var total10 = total10.textContent = userInput10 * 10;
    var total5 = total5.textContent = userInput5 * 5;
    var total2 = total2.textContent = userInput2 * 2;
    var total1 = total1.textContent = userInput1 * 1;

    var totalSum = (total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1).toLocaleString('en-IN');

    var total__number__display = document.getElementById("total__number--display");
    // var total_textWord = document.getElementById("total__number--display1");
    total__number__display.textContent = totalSum;
    // total_textWord.textContent = numberToWords(totalSum);
    return totalSum;
}

function resetInputs() {
    var inputs = document.querySelectorAll("#userInputForm input[type='tel']");
    inputs.forEach(function (input) {
        input.value = "";
    });
    var totals = document.querySelectorAll(".user__display, .total__number--display");
    totals.forEach(function (total) {
        total.innerHTML = "0";
    });
}

function printReceipt() {
    const userInput500 = document.getElementById("user__input500").value;
    const userInput200 = document.getElementById("user__input200").value;
    const userInput100 = document.getElementById("user__input100").value;
    const userInput50 = document.getElementById("user__input50").value;
    const userInput20 = document.getElementById("user__input20").value;
    const userInput10 = document.getElementById("user__input10").value;
    const userInput5 = document.getElementById("user__input5").value;
    const userInput2 = document.getElementById("user__input2").value;
    const userInput1 = document.getElementById("user__input1").value;

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

    // Create receipt string
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

    // Add receipt string to PDF
    doc.text(receiptString, 10, 10);

    // Save the PDF
    doc.save("receipt.pdf");
}



function numberToWords(num) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (num === 0) return 'zero';

    if (num < 0) return 'minus ' + numberToWords(Math.abs(num));

    let words = '';

    if (num >= 1000000) {
        words += numberToWords(Math.floor(num / 1000000)) + ' million ';
        num %= 1000000;
    }

    if (num >= 1000) {
        words += numberToWords(Math.floor(num / 1000)) + ' thousand ';
        num %= 1000;
    }

    if (num >= 100) {
        words += numberToWords(Math.floor(num / 100)) + ' hundred ';
        num %= 100;
    }

    if (num >= 20) {
        words += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
    } else if (num >= 10) {
        words += teens[num - 10] + ' ';
        num = 0;
    }

    if (num > 0) {
        words += ones[num] + ' ';
    }

    return words.trim();
}

// const total__number__disply = document.getElementById("total__number--display1");