function bigNum(list) {

    if (!Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    }
    if (list.length === 0) {
        return 'ERROR: array is empty';
    }
   
    let biggest = -Infinity;    
    for (let i = 0; i < list.length; i++) {
        const number = list[i];

         if (Array.isArray(number)) {
           const bigChild = bigNum(number);
           if (bigChild > biggest) {
            biggest = bigChild;
            } 
        } else {
            if (number > biggest) {
                biggest = number;
            }
        }
       
    }
   
    return biggest;
}

const data = [
    -5,
    78,
    [
        14,
        999
    ],
    0,
    18
    ]

const bigestNumber = bigNum(data);
console.log(bigestNumber);

console.log(bigNum([-5, 78, [14, 999], 0, 18]), '->', 999); 


