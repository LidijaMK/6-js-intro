// iprasta funkcija
function suma (a, b) {
    return a + b;
} 

const atsSuma = suma(8, 5);
console.log(atsSuma);

/*****************************/

// bevardes funcijos priskyrimas kintamajam  
const atimtis = function (a, b) {             // kintamajam priskirta funkcijos logika
    return a - b;
} 

const atsAtimtis = atimtis(8, 5);
console.log(atsAtimtis);

/*****************************/

// arrow function priskyrimas kintamajam
const daugyba = (a, b) => {             
    return a * b;
} 

const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

/*****************************/

// arrow function priskyrimas kintamajam
// jei logika turi tik viena procedura, tai galima nerasyti {} ir return
const dalyba = (a, b) => a / b;

const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);


// arrow function priskyrimas kintamajam
// jei logika turi tik viena procedura, tai galima nerasyti {} ir return
// jei parametru yra tik vienas, galima nerasyti () 
const kvadratu = a => a * a;

const atsKvadratu = kvadratu(8);
console.log(atsKvadratu);

/*****************************/
/*****************************/
/*****************************/

const vardas = 'Vardenis';

const pirmaRaide = name => name[0];
const paskutineRaide = name => name[name.length - 1];


const raide = pirmaRaide(vardas);
const paskutine = paskutineRaide(vardas);
console.log(raide);
console.log(paskutine);
