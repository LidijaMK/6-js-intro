/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]

https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

*/

function monkeyCount(n) {
  return Array.from({length: n}, (v, i) => i +1); 
 }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from   

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
//Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

        console.log((monkeyCount(5)), '->', [1, 2, 3, 4, 5]);
        console.log((monkeyCount(3)), '->', [1, 2, 3]);
        console.log((monkeyCount(9)), '->', [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        console.log((monkeyCount(10)), '->',  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        console.log((monkeyCount(20)), '->',  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  