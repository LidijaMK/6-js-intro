
/* Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai: 
0 - 11
8 - 31
-18 - 18
*/


console.log('---------------------');

const nuo = 0;
const iki = 11;
const daliklis = 5;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
     kiekis++   
    }
}

const ats = `Skaiciu intervale tarp ${nuo} ir ${iki}}, besidalijanciu skaiciu be liekanos is ${daliklis} yra ${kiekis} vienetai`;
console.log(ats);


console.log('---------------------');



/* be ciklu

0 - 20      / 5

0, 5, 10, 15, 20             (iki - nuo) / daliklis + 1 - kiek skaiciu kurie dalijasi be liekanos;
i+=daliklis (vietoj i++) */