function digits(skaicius) {
    // input validation
    if (typeof skaicius !== 'number'){
        return 'ERROR: turi buti skaiciaus tipas';
    }
    // if ('' + skaicius === 'NaN') {
    //    return 'ERROR: NaN nera normalus skaicius';
    //}

    if (isNaN(skaicius)) {
        return 'ERROR: NaN nera normalus skaicius';
    }
    if (!isFinite(skaicius)) {
        return `ERROR: ${skaicius} nera normalus skaicius`;
    }

    // logic
    const tekstinisSkaicius = '' + skaicius;
    let skaitmenuKiekis = tekstinisSkaicius.length;

    // jei skaicius turi desimtaine dali, tai sumaziname 1 vienetu
    if (skaicius % 1 !== 0) {
        skaitmenuKiekis--;
    }

    // jei skaicius yra neigiamas, tau sumaziname 1 vnt
    if (skaicius < 0) {
        skaitmenuKiekis--;
    }

    // return result

    return skaitmenuKiekis;
}


console.log(digits(true));
console.log(digits('asd'));
console.log(digits(NaN));
console.log(digits(Infinity));
console.log(digits(-Infinity));
console.log(digits());
console.log(digits(undefined)); // undefined - reiskia, kad informacija neegzistuoja (t.y. net neplanuoju tureti info)
console.log(digits(null));  // null - reiskia informacijos neturejima (rezervuojama reiksme, nes veliau gali atsirasti (planuojama) reiksme)
console.log(digits([]));  
console.log(digits(''));  
console.log(digits([4624])); 
console.log(digits(digits)); 

console.log(digits(5), '->', 1);
console.log(digits(781), '->', 3);
console.log(digits(37060123456), '->', 11);
console.log(digits(-3.1452), '->', 5);
console.log(digits(-850), '->', 3);
console.log(digits(-3.1452), '->', 5);

console.log('Koks sprendimas norint rasti standartine skaiciaus israiskos "turimu" skaitmenu kieki?')
console.log(digits(10000000000000000000000000000000000000000000000000), '->', 50);
console.log(digits(0.00000000000000000000000000000000000000000000000001), '->', 50);
