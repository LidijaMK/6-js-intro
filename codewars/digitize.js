/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

*/

function digitize(n) {
    const number = ('' + n).split('');
    const digits = [];
    for (let i = 0; i < number.length; i++) {
      digits.push(+number[i]);
    } 
   return digits.reverse();
  }

  console.log(digitize(35231), '->', [1,3,2,5,3]);

