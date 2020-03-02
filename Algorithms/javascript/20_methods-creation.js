/** 1. Simple approach, but it doesn't allot to create animation object, which can store state
       and have methods that act only on this internal state **/
function startAnimate() {
}

function stopAnimate() {
}

/** 2. This defines a class that lets you create such objects **/
/** Here we defining a new class Animate and assign 2 properties to the prototype properties **/

var Animate = function() {
};

Animate.prototype.start = function() {
    console.log('Started animation');
};

Animate.prototype.stop = function() {
    console.log('Stopped animation');
};

/** here we can use it **/

var animate1 = new Animate();
    animate1.start();
    animate1.stop();


    /** Or we can create classes encapsulated in one method **/

var Drag = function() {}

Drag.prototype = {
    start: function() {
        console.log('Start');
    },
    stop: function () {
        console.log('Stop');
    }
};

var drag1 = new Drag();
    drag1.start();
    drag1.stop();

/** 3. We can add a method to the Function object that can be used to declare methods **/

Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn;
};

var Draw = function () {
};

Draw.method('start', function () {
   console.log('Start drawing');
});

Draw.method('stop', function () {
   console.log('Stop drawing');
});

var draw1 = new Draw();
    draw1.start();
    draw1.stop();
