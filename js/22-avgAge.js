/*
Gimines medyje reikia rasti vidutini nariu amziu
*/

function avgAge (asmuo) {
  let childCount = 1;
  let ageSum = asmuo.age;
  let averageAge = 1;

  if (asmuo.children) {
      for (let i = 0; i < asmuo.children.length; i++) {
          const child = asmuo.children[i];
        
          const childinfo = avgAge(child);

          childCount += childinfo.childCount;
          ageSum += childinfo.ageSum;
          averageAge = ageSum / childCount;
          
      }
  }
 
     return {
         childCount: childCount,
         ageSum: ageSum,
         averageAge: averageAge
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

const giminesDuomenys = avgAge(gimine1)
console.log(giminesDuomenys);




 

