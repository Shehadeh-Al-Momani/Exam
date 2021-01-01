/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log('PART 4');

const isABalancedString = (str) => {
  // WRITE YOUR CODE BELOW THIS LINE
  const obj = {};
  for (i = 0; i < str.length; i++) {
    if (str[i] === '[' || str[i] === ']') {
      obj[str[i]] = obj[str[i]] + 1 || 1;
    }
    if (str[i] === '{' || str[i] === '}') {
      obj[str[i]] = obj[str[i]] + 1 || 1;
    }
    if (str[i] === '(' || str[i] === ')') {
      obj[str[i]] = obj[str[i]] + 1 || 1;
    }
  }
  for (k in obj) {
    if (obj[k] % 2 !== 0) {
      return false;
    }
  }
  return obj;
}

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
