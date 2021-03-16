
/* Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai: 
0 - 11
8 - 31
-18 - 18

*/

const nuo = -18;
const iki = 18;
const daliklis = 3;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
     kiekis++   
    }
}
const ats = `Skaiciu intervale tarp ${nuo} ir ${iki}}, besidalijanciu skaiciu be liekanos is ${daliklis} yra ${kiekis} vienetai`;
console.log(ats);


console.log('---------------------');

