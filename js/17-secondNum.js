function bigNum(list) {

    if (!Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    }
    if (list.length === 0) {
        return 'ERROR: array is empty';
    }

    let biggest = -Infinity; 
    let secondBiggest = -Infinity;
    for (let i = 0; i < list.length; i++) {
        const number = list[i];

        if (typeof number !== 'number' || !isFinite(number)) {
            continue;                          
        }

       if (number > biggest) {
           secondBiggest = biggest;
           biggest = number;
       } else if (number > secondBiggest && number < biggest) {
           secondBiggest = number;

       }
    }

    if (secondBiggest === -Infinity) {
        return 'ERROR: sarase nerastas antras normalus skaicius';
    }

    return secondBiggest;
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

console.log(bigNum([1, 8, 3, 5, Infinity]), '->', 8);
console.log(bigNum([1, 8, Infinity, 3, 5]), '->', 8);
console.log(bigNum([Infinity, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, NaN]), '->', 8);
console.log(bigNum([1, 8, NaN, 3, 5]), '->', 8);
console.log(bigNum([NaN, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, '']), '->', 8);
console.log(bigNum([1, 8, '', 3, 5]), '->', 8);
console.log(bigNum(['', 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, 'Pomidoras']), '->', 8);
console.log(bigNum([1, 8, 'Pomidoras', 3, 5]), '->', 8);
console.log(bigNum(['Pomidoras', 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, undefined]), '->', 8);
console.log(bigNum([1, 8, undefined, 3, 5]), '->', 8);
console.log(bigNum([undefined, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, null]), '->', 8);
console.log(bigNum([1, 8, null, 3, 5]), '->', 8);
console.log(bigNum([null, 1, 8, 3, 5]), '->', 8);


console.log(bigNum([Infinity, null, 'sads', true, 888]), '->', 888);
console.log(bigNum([Infinity, null, 888, 'sads', true]), '->', 888);
console.log(bigNum([888, Infinity, null, 'sads', true]), '->', 888);

console.log(bigNum(['888', Infinity, null, 'sads', true]));

console.log(bigNum([-5, 78, [14, 999], 0, 18]), '->', 999); // gal sort tada slice? rikiavimo algoritma pasirasyti (bouble sort algoritmas pasibandyti);  surasti nestintame sarase didziausia skaiciu 

