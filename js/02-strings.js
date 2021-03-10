/*
VISOS KOMBINACIJOS DARBUI SU TEKSTU
*/

// Siandien yra: Kovo desimta.
const menuo = 'Kovo';
const diena = 'desimta';

const dayStringas = 'Siandien yra: ' + menuo + ' ' + diena + '.';
console.log(dayStringas);

// Cia yra dviguba (") kabute. 
const dvigubaKabute = 'Cia yra dviguba (") kabute.'
console.log(dvigubaKabute);

// Cia yra vienguba (') kabute. 
const viengubaKabute = "Cia yra vienguba (') kabute.";
console.log(viengubaKabute);

// Turiu vienguba (') ir dviguba (") kabutes.
const viengubaDviguba = "Turiu vienguba (') ir dviguba (\") kabutes."
console.log(viengubaDviguba);

// Turiu dviguba (") ir vienguba (') kabutes.
const dvigubaVienguba = 'Turiu dviguba (") ir vienguba (\') kabutes.'
console.log(dvigubaVienguba);

// Max saugumas dviguba (") ir vienguba (') kabutes.
const maXKabutes = 'Max saugumas dviguba (\") ir vienguba (\') kabutes.'
console.log(maXKabutes);

// Max saugumas vienguba (') ir dviguba (") kabutes.
const maXKabutes2 = 'Max saugumas vienguba (\') ir dviguba (\") kabutes.'
console.log(maXKabutes2);

const navHTML = '<nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                </nav>';
console.log(navHTML);

console.log('---------');

// Mano vardas: Petras.
const vardas = 'Petras';
const petrasIntro = 'Mano varadas: ' + vardas + '.'
console.log(petrasIntro);

const petrasBacktick = `Mano vardas: ${vardas}.`
console.log(petrasBacktick);

// Naujausias pazymys: 2.
const marks = [10, 5, 8, 7, 2];
const markSentence = `Naujausias pazymys: ${marks[marks.length - 1]}.`;
console.log(markSentence);
const markSentence1 = `Antras pazymys: ${marks[0]}`;
console.log(markSentence1);
const markSentence0 = `Naujausias pazymys: ${marks[marks.length - 1]}.`;
console.log(markSentence);

const navHTML2 = `<nav>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </nav>`;
console.log(navHTML2);


