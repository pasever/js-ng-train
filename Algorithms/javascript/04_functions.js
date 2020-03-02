/** There are two ways to define functions **/

let funcE = function () {
    console.log('Function Expression');
};

function funcD() {
    console.log('Function Declaration');
}

/** The difference is how the functions are processed by the browser when JS file is loaded.
    Function declarations are processed before the code in JS file is executed, which means you
    can use a statement that calls a function it is defined

    for ex:
**/
funcD();

function funcD() {
    console.log('Function Declaration');
}

/** This works because the browser finds the function declaration when it parses the JS file
    and sets up function before the remaining statements are executed, a process known as function hoisting.
**/