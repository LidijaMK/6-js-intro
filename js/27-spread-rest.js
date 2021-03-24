
// rest - spread operatorius

const spread1 = [5, 9, [3, 10], 3, -14];
console.log(spread1);

// const spread2 = [5, 9, 7]
const spread2 = [...spread1, 7, 77, 777];
console.log(spread2);

// const spread3 = [7, 5, 9]
const spread3 = [7, 77, 777, ...spread1];
console.log(spread3);

const spread4 = ['asb', 'gqe', 874, true];
console.log(spread4);

const spread5 = [...spread4];
console.log(spread5);

const spread6 = [...spread1, ...spread4];
console.log(spread6);

console.clear();

// rest operatorius
// naudojamas funkcijos parametru bloke, kai norime surinkti visus elementus i arreju

const average = (...list) => {
    const sum = list.reduce((total, num) => total + num, 0);
    return sum / list.length;
}

const ave = average(10, 2, 8, 4, 6);
console.log(ave);

console.log('----------');
/*
1 variantas
const apieMane = (name, age, list) => {
        return `Sveiki, as esu ${name}, man yra ${age} metu ir as megstu: ${list.join(', ')}.`;
}

const petras = apieMane('Petras', 55, ['obuoli', 'kriause']);
console.log(petras);

*/

// 2 variantas
const apieMane = (name, age, ...list) => {
    return `Sveiki, as esu ${name}, man yra ${age} metu ir as megstu: ${list.join(', ')}.`;
}

const petras = apieMane('Petras', 55, 'pyragus', 'obuoli', 'kriause');
console.log(petras);

console.log('----------');

// PRIMITYVIOS REIKSMES  

let a = 5;
let b = 999;

b = a;

console.log(a);
console.log(b);

console.log('----------');

a = 777;

console.log(a);
console.log(b);

console.log('----------');

// KOMPLEKSINES REIKSMES (array, object)

let cc = [4, 44];
let dd = [8, 88];

console.log(cc);
console.log(dd);

console.log('----------');

dd = cc;

console.log(cc);
console.log(dd);

cc[0] = 1111;

console.log('----------');

console.log(cc);
console.log(dd);

// kompleksiniai kintamieji dalijasi atmintimi (naviguoja adresais, kuriuose laikoma informacija)

console.log('----------');

const desimtainiai = [3.14, 5, 6.7, -14.7, 8, 0.001];

//const sveikieji skaiciai = desimtainiai.map(n => Math.round(n));

desimtainiai.forEach((n, i) => desimtainiai[i] = Math.round(n));

console.log(desimtainiai);


console.log('----------');

// kompleksiniuose kintamuosiuose mes perrasome tik pacias reiksmes, taciau pacio adreso nekeiciame



