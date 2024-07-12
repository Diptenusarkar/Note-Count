function numberToWords(number) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    if (number < 10) {
        return words[number];
    }
    else if (number < 20) {
        const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        return teens[number - 10];
    }
    else if (number < 100) {
        const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? "-" + words[number % 10] : "");
    }
    else if (number < 1000) {
        return words[Math.floor(number / 100)] + " hundred" + (number % 100 !== 0 ? " and " + numberToWords(number % 100) : "");
    }
    else if (number < 100000) {
        return numberToWords(Math.floor(number / 1000)) + " thousand" + (number % 1000 !== 0 ? " " + numberToWords(number % 1000) : "");
    }
    else if (number < 10000000) {
        return numberToWords(Math.floor(number / 100000)) + " lakh" + (number % 100000 !== 0 ? " " + numberToWords(number % 100000) : "");
    }
    else if (number < 1000000000) {
        return numberToWords(Math.floor(number / 10000000)) + " crore" + (number % 10000000 !== 0 ? " " + numberToWords(number % 10000000) : "");
    }
    else {
        return "Number too large";
    }
}


const numToWords = require('num-to-words');

const number = 1234.56;
const options = {
  separator: ' ',
  and: true,
  words: {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
    '100': 'hundred',
    '1000': 'thousand',
    '1000000': 'million',
  },
};

const words = numToWords(number, options);
console.log(words); // "one thousand two hundred and thirty-four point five six"
