/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/

function abbrevName(name) {
    const arr = name.split(' ');
    const firstName = arr[0][0];
    const surName = arr[1][0];
    return `${firstName}.${surName}`.toUpperCase();
}

console.log(abbrevName('Sam Harris'), '->', 'S.H');
console.log(abbrevName('Patrick Feenan'), '->', 'P.F');
console.log(abbrevName('Evan Cole'), '->', 'E.C');
console.log(abbrevName('P Favuzzi'), '->', 'P.F');
console.log(abbrevName('david Mendieta'), '->', 'D.M');