function bigNum(list) {
    //input validation
    //if (typeof list !== 'object') {
    //    return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    //}
    //if (list === null) {
    //    return 'ERROR: netinkama reiksme (null)'
    //}

    if (!Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    }
    if (list.length === 0) {
        return 'ERROR: array is empty';
    }
    // logic
    let biggest = list[0];
    for (let i = 1; i < list.length; i++) {
        const number = list[i];
       if (number > biggest) {
           biggest = number;
       }
    }

    // result

    return biggest;
}

//console.log(bigNum('pomidoras'));
//console.log(bigNum(484562));
//console.log(bigNum(true));
//console.log(bigNum(false));
//console.log(bigNum(undefined));
//console.log(bigNum());
//console.log(bigNum(bigNum));
//console.log(bigNum(null));
//console.log(bigNum({}));
//console.log(bigNum([]));
//
console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);





/*
const mokykla = [
    ['Petras', [10, 2]],
    ['Maryte', [8, 8]],
];

// [vardas, pazymiai, megstamos raides, kiek dienu gyvenam, ar nori i PC, ar siemet maudesi]
const mokinys = ['Petras', [10, 2], 'asf', 5485, true, false];
const vardas = mokinys[0];
const pazymiai = mokinys [1];

const student = {
    vardas: 'Petras',
    pazymiai: [10, 2],
    megstamosRaides: 'asf',
    kiekDienuGyvas: 5485,
    arNoriiPC: true,
    arSiemetMaudesi: false,
    tevai: {
        motina: {
            vardas: 'Onute',
            telNr: 4562254564,
            amzius: 55
        },  
        tevas: {
            vardas: 'Jonas',
            telNr: 4562254564,
            amzius: 60
        }   
     },
     aplankytosVietos: [
         {
             adresas: '',
             pavadinimas: '',
             lankymoData: '',
             suGidu: true
         },
         {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGidu: false
        },
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGidu: true
        },

     ]
}

console.log('-------------');

// universalus info istraukimas is objekto 
console.log(student);
console.log(student['vardas']);
console.log(student['pazymiai']);
console.log(student['pazymiai'][0]);
console.log(student['pazymiai'][1]);
console.log(student['megstamosRaides']);
console.log(student['megstamosRaides'][0]);
console.log(student['megstamosRaides'][1]);
console.log(student['tevai']);
console.log(student['tevai']['motina']);
console.log(student['tevai']['motina']['vardas']);


console.log('-------------');

// Supaprastintas info istraukimas is objekto 
console.log(student);
console.log(student.vardas);
console.log(student.pazymiai);
console.log(student.pazymiai[0]);
console.log(student.pazymiai[1]);
console.log(student.megstamosRaides);
console.log(student.megstamosRaides[0]);
console.log(student.megstamosRaides[1]);
console.log(student.tevai);
console.log(student.tevai.motina);
console.log(student.tevai.motina.vardas);
*/
