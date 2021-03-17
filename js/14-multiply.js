function daugyba(a, b) {
    //parametru validacija
    //jeigu, a yra ne skaicius, grazinti klaidos pranesima
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    if (isNaN(a) || a === Infinity || a === -Infinity) {
        return `Pirmas parametrametras turi buti normalus skaicius ir negali buti ${a}`;
    }
       

    //jeigu, b yra ne skaicius, grazinti klaidos pranesima (NaN - not a number)
    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaiciaus tipo';
    }
    if (isNaN(b) || b === Infinity || b === -Infinity) {
        return `Antrasis parametrametras turi buti normalus skaicius ir negali buti ${b}`;
    }
   

    //logika
    const rez = a * b;

    //rezultato grazinimas
    return rez;
}


console.log(daugyba('trys', 'penki'), '->', 15); 
console.log(daugyba(3, 'penki'), '->', 15);
console.log(daugyba('trys', 5), '->', 15);
console.log(daugyba(true, false), '->', 15); 
console.log(daugyba(3, false), '->', 15);
console.log(daugyba(false, 5), '->', 15);
console.log(daugyba(['asd'], 3));
console.log(daugyba(3, ['asd']));
console.log(daugyba(['asd'], ['asd']));
console.log(daugyba([2], 3));
console.log(daugyba(3, [2]));
console.log(daugyba([2], [2]));
console.log(daugyba(NaN, 3));
console.log(daugyba(3, NaN));
console.log(daugyba(NaN, NaN));
console.log(daugyba(Infinity, 3));
console.log(daugyba(3, Infinity));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(-Infinity, 3));
console.log(daugyba(3, -Infinity));
console.log(daugyba(-Infinity, -Infinity));


console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(44, 5), '->', 220);
console.log(daugyba(-44, -5), '->', -2420);
console.log(daugyba(-44, -55), '->', 2420);
console.log(daugyba(-44, 55), '->', -2420);
console.log(daugyba(0, 0), '->', 0);
console.log(daugyba(0, 54850), '->', 0);
console.log(daugyba(3.14, 2), '->', 6.28);


// tekstinio formato ieinantys duomenys nesugadintu formato 
// typeof 5 - "number"
// typeof 'hsgfaf'  - "string"
// typeof []  - "object"
// typeof true  - "boolean"
// typeof false  - "boolean"
