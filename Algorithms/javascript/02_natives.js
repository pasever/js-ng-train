/** Built-ins often called natives that are actually functions

/*
    1. String()
    2. Number()
    3. Boolean()
    4. Array()
    5. Object()
    6. Function()
    7. RegExp()
    8. Date()
    9. Error()
    10. Symbol()  --- ES6
 */

let a = new String('abc');

let b = 'def';

// object --- The result is an object wrapper around the primitive('abc') value
console.log(typeof a);

// string
console.log(typeof b);

// true
console.log(a instanceof String);

// false
console.log(b instanceof String);




