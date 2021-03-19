/*There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/


function correctPolishLetters (string) {
    const map = {
        'a' :'ą', 
        'c' : 'ć',
        'e' : 'ę',
        'l' : 'ł',
        'n' : 'ń',
        'o' : 'ó', 
        's' : 'ś',
        'z' : 'ź|ż'
    }

    for (pattern in map) {
        string = string.replace(new RegExp(map[pattern], 'g'), pattern);
    }
    return string;
  }


console.log(correctPolishLetters('Jędrzej Błądziński'), '->', 'Jedrzej Bladzinski');
console.log(correctPolishLetters('Lech Wałęsa'), '->', 'Lech Walesa');
console.log(correctPolishLetters('Maria Skłodowska-Curie'), '->', 'Maria Sklodowska-Curie');