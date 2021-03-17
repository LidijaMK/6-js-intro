/*
https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"

If either input is an empty string, consider it as zero.

- parseInt;

*/


function sumStr(a,b) {
  const pirmas = a === '' ? 0 : parseInt(a);
  const antras = b === '' ? 0 : parseInt(b);

  return '' + (pirmas + antras);

}

console.log(sumStr("4","5"), '->', "9");
console.log(sumStr("34","5"), '->', "39");
console.log(sumStr("","5"), '->', "5");
console.log(sumStr("34",""), '->', "34");
console.log(sumStr("",""), '->', "0");