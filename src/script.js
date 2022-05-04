"use strict";

function createArray(length) {
    let arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        let args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

//Intermediate 16x16
//40 mines
let ran = 0;
let arr = createArray(16, 16);
let k = 40;
for (let i=0; i<arr.length; i++) for (let j = 0; j<arr[i].length; j++) arr[i][j] = 0; //Populate array with 0s
// Make array placement random
for (let i = 0; i<arr.length; i++) {
    for (let j = 0; j<arr[i].length; j++) {
        ran = (Math.random() < 0.5) ? 1 : 0;
        if (ran == 1) {
            k--;
        }
        arr[i][j] = ran;
        if (k == 0) {
            break;
        }
    }
    if (k == 0) {
        break;
    }
}
console.log(arr);