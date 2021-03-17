/*https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

*/


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // sarasas, kuriame kaupsime visas leistinas reiksmes
    const rez = [];

    /*
    einame per gauta sarasa (birds)
        paimame birds sarase esanti nari (bird)
        reikia palyginti ar bird yra geese sarasa
        reikia eiti per geese sarasa
            paimti geese nari
            jeigu, geese narys sutampa su bird reiksme, tai ji yra neleistina / neitraukiama i rez sarasa
            priesingu atveju - bird itraukiame i rez sarasa 
    */

    for (let b = 0; b < birds.length; b++) {
        const bird = birds[b];
       
        let yraSarase = false;
        for (let g = 0; g < geese.length; g++) {
            const goose = geese[g];
            if (goose === bird) {
                yraSarase = true;
            }
            
        }
        if (!yraSarase) {
            rez.push(bird);
        }
    }
    return rez;
  };


console.log(gooseFilter(
    ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),
    ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
 
console.log(gooseFilter(
    ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),
    ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    
console.log(gooseFilter(
      ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
