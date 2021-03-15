/*

TERNARY OPERATOS: ? (klaustukas)

palyginimas? ka daryti jei tenkina logika : ka tdaryti jei logikos netenkita

palyginimas ? true : false

*/

const a = 8;
const b = 7;

let ats = '';

if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
}

console.log(ats);

const c = 8;
const d = 7;

const ats2 = c > d ? 'daugiau' : 'ne daugiau';
console.log(ats2);

const pazymiai = [7, 10, 7];
const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);