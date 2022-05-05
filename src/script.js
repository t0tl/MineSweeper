"use strict";
function createBoxes2(numberOfBoxes) {
  const wrapper = document.querySelector(".wrapper");
  for (let i = 0; i < numberOfBoxes; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "box");
    div.setAttribute("id", "box-" + i);
    div.setAttribute("class", "number1");
    div.addEventListener("click", function () {
      console.log(`You clicked box-${i}`);
    });
    wrapper.append(div);
  }
}
createBoxes2(256);

function incrementer(arr, i, j) {
    const up = (i == 0); //First row
    const down = (i == arr.length-1); //Last row
    const left = (j == 0); //First column
    const right = (j == arr.length-1); //Last column

    if (down || right || up || left) {
        if (down) {
            if (down && left) {
                arr[i-1][j]++;
                arr[i-1][j+1]++;
                arr[i][j+1]++;
            }
            else if (down && right) {
                arr[i-1][j-1]++;
                arr[i-1][j]++;
                arr[i][j-1]++;
            }
            else {
                arr[i-1][j-1]++;
                arr[i-1][j]++;
                arr[i-1][j+1]++;
                arr[i][j-1]++;
                arr[i][j+1]++;
            }
        }
        else if (up) {
            if (up && left) {
                arr[i][j+1]++;
                arr[i+1][j]++;
                arr[i+1][j+1]++;
            }
            else if (up && right) {
                arr[i][j-1]++;
                arr[i+1][j-1]++;
                arr[i+1][j]++;
            }
            else {
                arr[i][j-1]++;
                arr[i][j+1]++;
                arr[i+1][j-1]++;
                arr[i+1][j]++;
                arr[i+1][j+1]++;
            }
        }
        else if (left) {
            arr[i-1][j]++;
            arr[i-1][j+1]++;
            arr[i][j+1]++;
            arr[i+1][j]++;
            arr[i+1][j+1]++;
        }

        else {
            arr[i-1][j-1]++;
            arr[i-1][j]++;
            arr[i][j-1]++;
            arr[i+1][j-1]++;
            arr[i+1][j]++;
        }
    }
    else {
        arr[i-1][j-1]++;
        arr[i-1][j]++;
        arr[i-1][j+1]++;
        arr[i][j-1]++;
        arr[i][j+1]++;
        arr[i+1][j-1]++;
        arr[i+1][j]++;
        arr[i+1][j+1]++;
    }
    return arr;
}

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
let ran1 = 0;
let ran2 = 0;

let arr = createArray(16, 16);
let k = 40;
for (let i=0; i<arr.length; i++) for (let j = 0; j<arr[i].length; j++) arr[i][j] = 0; //Populate array with 0s
// Make array placement random
while (k>0) {
    ran1 = Math.floor(Math.random() * 16);
    ran2 = Math.floor(Math.random() * 16);
    if (arr[ran1][ran2] > -41) {
        arr[ran1][ran2] = -41
        k--;
    }
}

console.log(arr);

for (let i = 0; i<arr.length; i++) {
    for (let j = 0; j<arr[i].length; j++) {
        if (arr[i][j] < 0) {
            incrementer(arr,i,j);
        }
    }
}

console.log(arr);
