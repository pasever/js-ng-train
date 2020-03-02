/** Falsevalues
 * ''
 * 0
 * null
 * undefined
 * false
 **/

// false
// console.log(Boolean(''));

// true
// console.log(Boolean('0'));

// false
// console.log(Boolean(0));

// true
// console.log(Boolean([]));

// string 13
// When JS interpret the following, it sees that there is a string so is uses + as concat
console.log(1 + '3');

// string 110
console.log('1' + 1 + 0);

// number 0
console.log('1' - 1 + 0);

// number 24
console.log('3' * 8);

// string 12px
console.log(5 + 7 + 'px');

// string px57
console.log('px' + 5 + 7);

// number 4
console.log(null + 4);

// NaN
console.log(undefined + 55);