/*
JS galimi ciklai ir "cikliskos" funkcijos / metodai:

(funkcijos)
- for               // for-in ir for-of tarsi kitas budas uzrasyti cikla for (siek tiek kitoks / trumpesnis uzrasymas)
- for-in
- for -of
- while                  // while ir do-while tai tarsi neapibrezto kartojimo ciklai
- do-while

(metodai)
- foreach
- map
- filter
- reduce
- sort
*/


const list = [1, -5, 78, 2, 11, -14, 0, -3];

// FOR
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei tokia yra

for (let i = 0; i < list.length; i++) {
    const item = list[1];
    if (item > 0) {
        continue;
    }
    console.log(item);
}

console.clear();

// FOR-IN

//for (const index in list) {
//    console.log(index);
//}

for (const i in list) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(i, item);
}


/*
for (const i in list) {
    const item = list[i];
    if (item > 10) {
        break;
    }
    console.log(i, item);
}
*/

console.clear();

// FOR-OF

for (const item of list) {
    if (item > 0) {
        continue;
    }
    console.log(item);
}

console.clear();

// WHILE
// break: nutraukia ciklo darba

let randomNumber = 0;    //  Math.random(), kai norime sugeneruoti atsitiktini skaiciu, generuoja [0...1) ([ - reiskia nuo (imtinai) iki (neimtinai), )
let randomNumberCount = 0

// uzdavinys - kiek kartu reikia kviesti randomNumber, kol gausime 0.9 

while (randomNumber < 0.9) {
    randomNumber = Math.random();
    randomNumberCount++;
    console.log(randomNumberCount, randomNumber);
}

console.clear();

/*
let i = 0; 
while (i < list.length) {
    const item = list[i];
    console.log(item);
    i++;
}
*/

let i = 0; 
while (i < list.length) {
    const item = list[i];
    if (item <-10) {
        break;
    }
    console.log(item);
    i++;
}

console.clear();

// DO-WHILE
// break: nutraukia ciklo darba

// uzdavinukas - 

let dwi = 0;

do {
    console.log(dwi);
    if (dwi > 2) {
        break;
    }
    dwi++;
} while (dwi < 5)








