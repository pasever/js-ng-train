/**
    A closure is a protected variable space, created by using nested functions.
    JavaScript has function-level scope. This means that a variable defined within a function
    is not accessible outside of it. JavaScript is also lexically scoped, which means that
    functions run in the scope they are defined in, not the scope they are executed in.
 **/

/** Closures are useful within event listeners to access variables not normally attached
    to the objects on which events occur
**/

/**     Example: An anonymous function used as a closure. **/

var baz;

(function () {
    var foo = 10;
    var bar = 2;
    baz = function () {
        return foo * bar;
    }
})();

// console.log(baz());

/** Here baz can access foo and bar, even though is executed outside of the anonymous function **/

var arr = [ 1, 2, 3, 4, 5 ];

// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log('i =', i, 'value', arr[i]);
//     }, 200 * i);
// }

// for (var i = 0; i < arr.length; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log('i =', j, 'value', arr[j]);
//         }, 200 * j)
//     })(i);
// }


function outter(a) {
    var x = 10;
    return function (b) {
        x++;
        console.log(a + b + x);
    }
}

var inner = outter(5);
console.log(outter(5));

inner(2);
inner(2);
inner(2);