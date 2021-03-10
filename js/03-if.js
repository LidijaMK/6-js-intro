/*
IF STATEMENT

logikos sablonai
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}

palyginimo operatoriai
-visi: >, <, >=, <=, ==, !=, ===, !==, !
-naudotini: >, <, >=, <=, ===, !==, !
-nenaudotini: !=, == (nes nera tikrinamas reiksmiu tipas)

loginiai operatoriai: &&, || 
- */

const a = 7;
const b = 4;

if (a > b) {
    const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats);
}

console.log('------');

const c = 7;
const d = 4;

if (c < d) {
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cdNeMaziau);
}

console.log('------');

const e = '10';
const f = 10;

if (e !== f) {
    console.log('TAIP');
} else {
    console.log('NE'); 
}

console.log('------');

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka....1');
}

if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka....2');
}

console.log('------');

const userLoggedIn = false;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}

console.log('---------');

const akys = "Rudos";

if (akys === 'Melynos') {
    console.log('Oi kokie fainulkos!!!');
} else if (akys === 'Zalios') {
    console.log('Sexy 🥰🥰');
} else if (akys === 'Rudos') {
    console.log('Melagis? 🤔 ');
} else if (akys === 'Pilkos') {
    console.log('Niekuo neipatingi...')
} else if (akys === 'Raudonos') {
    console.log('👨‍💻👩‍💻');
} else {
    console.log('Ar tu turi akis?');
}

if (akys === 'Melynos') {
    console.log('Oi kokie fainulkos!!!');
} else {
    if (akys === 'Zalios') {
        console.log('Sexy 🥰🥰');
    } else {
        if (akys === 'Rudos') {
            console.log('Melagis? 🤔 ');
        } else {
            if (akys === 'Pilkos') {
                console.log('Niekuo neipatingi...')
            } else {
                if (akys === 'Raudonos') {
                    console.log('👨‍💻👩‍💻');
                } else {
                    console.log('Ar tu turi akis?');
                } 
            } 
        }
    }
}

console.log('-----');

if (akys === 'Melynos') {
    console.log('Oi kokie fainulkos!!!');
} 
if (akys === 'Zalios') {
    console.log('Sexy 🥰🥰');
} 
if (akys === 'Rudos') {
    console.log('Melagis? 🤔 ');
} 
if (akys === 'Pilkos') {
    console.log('Niekuo neipatingi...')
} 
if (akys === 'Raudonos') {
    console.log('👨‍💻👩‍💻');
} 

if (akys !== 'Melynos' && 
akys !== 'Zalios' &&
akys !== 'Rudos' &&
akys !== 'Pilkos' &&
akys !== 'Raudonos') {
console.log('Ar tu turi akis?');
}
 

if (akys !== 'Melynos' || 
akys !== 'Zalios' ||
akys !== 'Rudos' ||
akys !== 'Pilkos' || 
akys !== 'Raudonos') {
console.log('Tu turi vienas is man zinomu akiu!');
}




