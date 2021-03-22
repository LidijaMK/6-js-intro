/*
Gimines medyje reikia rasti kiek yra nariu
*/

function memberCount (asmuo) {
   let nariuKiekis = 1;
   
   if (asmuo.children) {
       for (let i = 0; i < asmuo.children.length; i++) {
           const child = asmuo.children[i];
           console.log(child);
           nariuKiekis += memberCount(child);
           
       }
   } 

    return nariuKiekis;
}

const gimine1 = {
    name: 'Petras',
    age: 40, 
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Onute',
                    age: 70
                },
                {
                    name:'Elvyra',
                    age: 70
                }
            ]
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name: 'Aleksas',
                    age: 20
                }
            ]
        }
    ]
}

//const vyriausias = oldest(gimine1)
//console.log(vyriausias);

const kiekNariu = memberCount(gimine1)
console.log(kiekNariu);