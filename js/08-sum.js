/* CIKLO FOR PANAUDOJIMAS
1. Suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai)

ATS:
Intervale nuo 0 iki 4 suma yra 
0 - 4                  = 10
10 - 14                = 60
20 - 24                = 110
-50 - 50               = 0
0 - 100                = 5050
574 - 815              = 168069
-70 - 30               = -2020
0 - 0                  = 0
0 - 99999999999999999  = astronomiskai didelis skaicius

*/

const nuo = 0;
const iki = 100000;
let suma = 0;              // daugybos atveju 1

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
        suma += i;
    }
}

const ats = `Intervale ${nuo} iki ${iki} suma yra ${suma}.`
console.log(ats);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER





