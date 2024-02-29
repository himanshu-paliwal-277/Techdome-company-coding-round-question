/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arr.push(s[i]);
    } else {
      let lastElement = arr[arr.length - 1];
      if (
        (lastElement === "(" && s[i] === ")") ||
        (lastElement === "{" && s[i] === "}") ||
        (lastElement === "[" && s[i] === "]")
      ) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  if (arr.length === 0) {
    return true;
  }
  return false;
};

// test case 1:
console.log(isValid("()")); 
// Output: true
// Expected: true

// test case 2:
console.log(isValid("()[]{}"));
// Output: true
// Expected: true

// test case 3:
console.log(isValid("{[()]}"));
// Output: true
// Expected: true

// test case 4:
console.log(isValid("(]"));
// Output: false
// Expected: false

// test case 5:
console.log(isValid("([)]"));
// Output: false
// Expected: false

// test case 6:
console.log(isValid(""));
// Output: true
// Expected: true

// test case 7:
console.log(isValid("(){"));
// Output: false
// Expected: false


// module.exports = { isValid };
