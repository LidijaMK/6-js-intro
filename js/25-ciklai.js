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



console.clear();

// FOREACH
// jo sustabdyti yra neimanoma
// leta funkcija 

//list.forEach(function(){                            //anonimine funkcija
//    console.log('labas');
//})
/*
list.forEach(function (item, i){                            
    console.log(i, item);
})  
*/

// supaprastinta
list.forEach(item => console.log(item));

let FEsuma = 0;

list.forEach(n => FEsuma += n);             
console.log(FEsuma);

console.log('------------------');

// uzdavinukas, kai sumuojame arejus arejuje
/*
const doubleList = [[1, 5,], [8, 99], [-8, -7, 15, 4], [3]];
let dlSuma = 0;
doubleList.forEach(innerList => innerList.forEach(n => dlSuma += n));
console.log(dlSuma);
*/

//uzdavinukas, kai liste turime ne tik arejus, bet ir skaicius
const doubleList = [[1, 5,], 15, [8, 99], -49, [-8, -7, 15, 4], [3]];
let dlSuma = 0;
//doubleList.forEach(innerItem => innerItem.forEach(n => dlSuma += n));

doubleList.forEach(innerItem => typeof innerItem === 'number' 
    ? dlSuma += innerItem
    : innerItem.forEach(n => dlSuma += n)
);
console.log(dlSuma);

// MAP            (dazniausiai naudojamas, kai norime modifikuoti duomenis, skirtas darbui su sarasais; mapas neveikia ant stringu (zodiai) ir objektu)
// map() metodas perejas per duota sarasa grazina tokio pacio dydzio sarasa, tik su pakeistomis reiksmemis
// su mapu turime ir originalu sarasa ir modifikuota sarasa


const mapList = [1, 2, 3, 4, 5, 6];
const forListSquare = [];

for (const num of mapList) {
    forListSquare.push(num * num);
} 
console.log(forListSquare);

/*******************************/

const mapListSquare = mapList.map(n => n * n);
console.log(mapListSquare);

/***********************************/

console.clear();


// duomenu taisymo uzdavinys: visi neigiami skaiciai turi buti konvertuoti i nuli

const pazymiai = [10, -8, 2, -6, 8, -2];
const konvertuotiPazymiai = pazymiai.map(n => n < 0 ? 0: n);
console.log(pazymiai);
console.log(konvertuotiPazymiai);



/***********************************/

console.clear();

// reikia grazinti sveikuosius skaicius

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

const sveikieji = desimtainiai.map(n => Math.round(n));
console.log(desimtainiai);
console.log(sveikieji);

/************************************/

// cia modifikuojame originalius duomenis (pavyzdys kaip galima parasyti su paprastuoju ciklu):
for (let i = 0; i < desimtainiai.length; i++) {
    desimtainiai[i] = Math.round(desimtainiai[i]);
}
console.log(desimtainiai);

// arrejus ir objektas yra kompleksiniai kintamieji; skaiciai, stringai yra primityvus kintamieji 


/***********************************/

console.clear();


// FILTER            

// uzdavinys: atrinkti tik tikrus pazymius, t.y. [1..10]


const marks = [10, -8, 2, 3.14, -6, 7.5, 8, -2, 11, 55];
const filteredMarks = marks.filter(m => m >= 1 && m <= 10 && m % 1 === 0);

console.log(marks);
console.log(filteredMarks);


console.clear();


// palikti zodzius is didziosiso raides

const dictionary = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const isDidziosios = dictionary.filter(word => word[0] === word[0].toUpperCase());

console.log(dictionary);
console.log(isDidziosios);

console.clear();

// REDUCE

// eina per sarasa ir paima visas reiksmes is eiles ir su jomis padaro viena bendra rezultata
// pvz.: jei turime pazymiu sarasa, tai eina per pazymius ir suskaiciuoja pazymiu suma


const petriukoPazymiai = [10, 2, 8, 6, 4];

//I var. su forEach;
let petriukoPazymiuSuma = 20;
petriukoPazymiai.forEach(p => petriukoPazymiuSuma += p);
console.log(petriukoPazymiuSuma);

const reducePazymiai = petriukoPazymiai.reduce((total, paz) => total + paz, 20);
console.log(reducePazymiai);
 
// 20 - initial value (nuo kurios sumos reikia pradeti sumuoti)


//koks gausis tekstas, jei sujungsime visu zodziu raides
const dictionary2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const short = dictionary2.reduce((total, word) => total + word[0], '');
console.log(short);


console.clear();


/************************************************/

const sortAbc = ['a', 'ä',  'c', 'fabrikas', 'fancy', 'baklazanas', 'Bermudai', 'd', 'Antanas'];
const sortedAbc = sortAbc.sort();
console.log(sortedAbc);


const sortList = [1, -5, 78, 2, 11, -14, 0, -3];
console.log(sortList.sort());
//const sorted = sortList.sort((a, b) => a - b ? -1 : 1); 
//const sorted = sortList.sort((a, b) => a > b ? -1 : 1);   
//const sorted = sortList.sort((a, b) => a - b);  
//const sortedNumber = sortList.sort((a, b) => a > b ? -1 : 1);  
const sortedNumber = [...sortList].sort((a, b) => b - a);  

console.log(sortedNumber);
console.log(sortList);

//sortas replace'ina ir duomenis ir rezultata (todel reikia tureti kopijas)

console.clear();






































