"use strict";
(() => {
    let myCustomVariable = 'Carlos';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Ninguno']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();