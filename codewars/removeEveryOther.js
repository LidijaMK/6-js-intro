/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!

https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

*/

function removeEveryOther(arr){
    let removedArr =' '; 
    for (let i = 1; i <arr.length; i++) {
        removedArr = arr.splice(i, 1);
    }
    return arr;
  }




console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), '->', ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), '->', [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), '->', [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]), '->', [['Goodbye']]);
  