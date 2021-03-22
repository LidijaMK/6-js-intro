/*
Gimines medyje reikia rasti kas buvo / yra vyriausias
*/

function oldestwithName (asmuo) {
    let oldestName = asmuo.name;
    let biggestAge = asmuo.age;
   

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            const oldestChild = oldestwithName(child);

            if (oldestChild.age > biggestAge) {
                biggestAge = oldestChild.age;
                oldestName = oldestChild.name;
            }
        }
    } 

    return {
        name: oldestName,
        age: biggestAge
    };
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

const vyriausiasAsmuo = oldestwithName(gimine1)
console.log(vyriausiasAsmuo);