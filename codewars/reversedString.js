/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'

https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

*/

function solution(str){
  let reverse = '';
  for (let i = 0; i < str.length; i++) {
      reverse = str[i] + reverse;
  }
  return reverse;
}




    console.log(solution('world'), '->', 'dlrow');
    console.log(solution('hello'), '->', 'olleh');
    console.log(solution(''), '->', '');
    console.log(solution('h'), '->', 'h');
 
