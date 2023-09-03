let string = " 21 FebTueShaheed Day 17 MarFriSheikh Mujibur Rahman's Birthday 14 AprFriBengali New Year 21 AprFriJumatul Bidah" +
    " 22 AprSatEid ul-Fitr 1 MayMonMay Day 28 JunWedEid ul-Adha Holiday 30 JunFriEid ul-Adha Holiday 15 AugTueNational " +
    "Mourning Day 28 SepThuEid-e-Milad un-Nabi 16 DecSatVictory Day"



const text = 'Today is 2023-09-12, and it is a sunny day.';
const pattern2 = /\d\d+|\d+/g;

/*
const inputString = "I have 33 apples, 2 oranges, and 5 bananas.";

// Use a regex pattern to match numbers (\d+)
const numbersArray = string.match(/\d+/g).map(Number);
const month=string.match(/\d+\/g)

console.log(numbersArray);

*/


const inputString = "123 apple 456 banana 789 cherry";

// Use a regex pattern to match numbers, whitespace, and words
const pattern = /(\d+)\s+(\w{3})/g;

const matches = [];
let match;
while ((match = pattern.exec(string)) !== null) {
    const number = match[1];
    const word = match[2];
    matches.push({ number, word });
}

console.log(matches);




/*

console.log(pattern.test("12 abc"));   // false (more than 2 digits)
console.log(pattern.test("2abc"));     // true
console.log(pattern.test("  abc"));    // true (whitespace is optional)
console.log(pattern.test("2  abc"));   // true
console.log(pattern.test("2ab"));      // false (less than 3 characters)
*/
/*


const pattern = /\D*(?:\d{0,2}\s?[a-z]{3})\D*!/;

console.log(pattern.test("123abc"));    // true (before and after characters are allowed)
console.log(pattern.test("xyz  12 abc")); // true
console.log(pattern.test("123abc def")); // true
console.log(pattern.test("1  abc"));     // true
console.log(pattern.test("xyz  aab"));   // false (less than 3 characters)

*/


