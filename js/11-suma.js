const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 2;
const f = 3;

//const s = (a + b) * 10;
//console.log(s);

function desimteriopaSuma(pirmas, antras) {
    const s = (pirmas + antras) * 10;
    console.log(s);
}

desimteriopaSuma(a, b);
console.log('-----------');
desimteriopaSuma(c, d);
console.log('-----------');
desimteriopaSuma(e, f);



function labas(vardas, amzius, vietovardis) {
    console.log(`Labas, as esu ${vardas} ir man ${amzius} metai ir gyvenu ${vietovardis}.`);
}
labas('Petras', 88, 'Vilniuje');
labas('Maryte', 77, 'kaune');
labas('Alphe', 5, 'namie');

