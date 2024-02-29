/**
 * @param {string} s
 * @return {number}
 */
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      num = num - roman[s[i]];
    } 
    else {
      num = num + roman[s[i]];
    }
  }
  return num;
};

// test case 1:
console.log(romanToInt("III")); 
// Output: 3
// Expected: 3

// test case 2:
console.log(romanToInt("LVIII"));
// Output: 58
// Expected: 58

// test case 3:
console.log(romanToInt("MCMXCIV"));
// Output: 1994
// Expected: 1994

// test case 4:
console.log(romanToInt("X"));
// Output: 10
// Expected: 10

// test case 5:
console.log(romanToInt("IV"));
// Output: 4
// Expected: 4

// test case 6:
console.log(romanToInt("IX"));
// Output: 9
// Expected: 9

// test case 7:
console.log(romanToInt("MMMCMXCIX"));
// Output: 3999
// Expected: 3999

// test case 8:
console.log(romanToInt(""));
// Output: 0
// Expected: 0

// module.exports={romanToInt}
