
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
/*
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

*/



function century(year) {
    // amzius is esmes yra metai / 100
    //let amzius = year / 100;
   
    // suapvalinti, jog neliktu po kablelio liekanos
    //amzius = Math.floor(amzius);
    
    //jei egzistuoja dalybos liekana, tai +1 amzius
    //if (year % 100 > 0) {
    //    amzius++;
    //}
    
    return Math.ceil(year / 100);
  }





console.log(century(1705),'->', 18);
console.log(century(1900),'->', 19);
console.log(century(1601),'->', 17);
console.log(century(2000),'->', 20);
console.log(century(89),'->', 1);


// Math.floor () - apvalina visada i  apacia (net jei bus 5.9 ~ 5.00)
// Math.ceil() - visada apvalina i virsu (net jei bus 5.03 ~ 6.00)
// Math.round() - apvalina pagal matematikos taisykles