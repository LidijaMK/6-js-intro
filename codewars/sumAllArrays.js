/*
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/

function arraySum(arr) {
    let sum = 0;

    for (let i=0 ; i < arr.length; i++){
        const child = arr[i];

        if (Array.isArray(child)){
            sum+= arraySum(child);
            
        } else {
            if (Number.isFinite(child)){
                sum+=child;
        } 
     }
    }
    return sum ;
    }



const data = [
    1,
    2,
    [
        1,
        2
    ]
]

const suma = arraySum(data)
console.log(suma);
 

console.log(arraySum([1, 2]), '->', 3);
console.log(arraySum([1, 2, 3]), '->', 6);
console.log(arraySum([1, 2, [1, 2]]), '->', 6);
console.log(arraySum([1, [3, 5, 8], [1, 2]]), '->', 20);
console.log(arraySum([1, 'fdggfdh', [3, 5, 8], [1, 2]]), '->', 20);