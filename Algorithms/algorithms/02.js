const top = 1000000;

const collats = function(value) {
    if (value >= top) return console.log('Input value is too big');
    while (true) {    
        console.log(value);    
        if (value === 1) {
            return;  
        } else if (value % 2 === 0) {
            value = value / 2;
        } else {
            value = value * 3 + 1;
        }
    }
}

collats(233411);