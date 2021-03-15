/* 

FOR LOOP (ciklas):

for () {}

*/


const rytas = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0;

zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];

console.log(zodis);
/*
for (let i = 0; i < abc.length; i++) {
    const rytas = abc[i];
    const zodis = 

    console.log(zodis);
}*/

console.log('-------------');

for (let i=0; i <= 5; i++) {
    console.log(i);
}

console.log('ciklo pabaiga');

console.log('-------------');

for (let i=3; i <= 7; i++) {
    console.log(i);
}


console.log('-------------');

const zmones = ['Petras', 'Maryte', 'Jonas', 'Onute', 'Elvyra']

for (let i = 0; i < zmones.length; i++) {
    const vardas = zmones[i];

    console.log(vardas);
}

console.log('-------------');

const marks = [5, 7, 10, 4, 2, 10, 8, 9, 1, 3];
let sum = 0;

// ejimas per sarasa

for (let i = 0; i < marks.length; i++) {
    const pazymys = marks[i];
    sum += pazymys;    
}

const average = sum / marks.length;
console.log(sum, '/', marks.length, '=', average);


console.log('-------------');

const sakinys = 'Labas rytas';

 for (let i = 0; i < sakinys.length; i++) {
     const simbolis = sakinys[i];
     console.log(simbolis);

}