"use strict";

function createBoxes2(numberOfBoxes) {
  const wrapper = document.querySelector(".wrapper");
  for (let i = 0; i < numberOfBoxes; i++) {
    const div = document.createElement("div");
    //div.setAttribute("class", "box");
    div.setAttribute("id", "box-" + i);
    div.setAttribute("class", "box bomb");
    div.addEventListener("click", function () {
      console.log(`You clicked box-${i}`);
      let j = i % arr.length;
      i = Math.floor(i / arr.length);
      if (arr[i][j] < 0) {
        console.log(`You clicked on a bomb`);
      } else if (arr[i][j] === 0) {
        console.log(`You clicked on an empty grid`);
      } else if (arr[i][j] === 1) {
        console.log(`You clicked on a 1`);
      } else if (arr[i][j] === 2) {
        console.log(`You clicked on a 2`);
      } else if (arr[i][j] === 3) {
        console.log(`You clicked on a 3`);
      } else if (arr[i][j] === 4) {
        console.log(`You clicked on a 4`);
      } else if (arr[i][j] === 5) {
        console.log(`You clicked on a 5`);
      } else if (arr[i][j] === 6) {
        console.log(`You clicked on a 6`);
      } else if (arr[i][j] === 7) {
        console.log(`You clicked on a 7`);
      } else if (arr[i][j] === 8) {
        console.log(`You clicked on a 8`);
      }
    });
    wrapper.append(div);
  }
}

function bombPlacer(arr, i, j) {
  const up = i == 0; //First row
  const down = i == arr.length - 1; //Last row
  const left = j == 0; //First column
  const right = j == arr.length - 1; //Last column

  if (down || right || up || left) {
    if (down) {
      if (down && left) {
        arr[i - 1][j]++;
        arr[i - 1][j + 1]++;
        arr[i][j + 1]++;
      } else if (down && right) {
        arr[i - 1][j - 1]++;
        arr[i - 1][j]++;
        arr[i][j - 1]++;
      } else {
        arr[i - 1][j - 1]++;
        arr[i - 1][j]++;
        arr[i - 1][j + 1]++;
        arr[i][j - 1]++;
        arr[i][j + 1]++;
      }
    } else if (up) {
      if (up && left) {
        arr[i][j + 1]++;
        arr[i + 1][j]++;
        arr[i + 1][j + 1]++;
      } else if (up && right) {
        arr[i][j - 1]++;
        arr[i + 1][j - 1]++;
        arr[i + 1][j]++;
      } else {
        arr[i][j - 1]++;
        arr[i][j + 1]++;
        arr[i + 1][j - 1]++;
        arr[i + 1][j]++;
        arr[i + 1][j + 1]++;
      }
    } else if (left) {
      arr[i - 1][j]++;
      arr[i - 1][j + 1]++;
      arr[i][j + 1]++;
      arr[i + 1][j]++;
      arr[i + 1][j + 1]++;
    } else {
      arr[i - 1][j - 1]++;
      arr[i - 1][j]++;
      arr[i][j - 1]++;
      arr[i + 1][j - 1]++;
      arr[i + 1][j]++;
    }
  } else {
    arr[i - 1][j - 1]++;
    arr[i - 1][j]++;
    arr[i - 1][j + 1]++;
    arr[i][j - 1]++;
    arr[i][j + 1]++;
    arr[i + 1][j - 1]++;
    arr[i + 1][j]++;
    arr[i + 1][j + 1]++;
  }
  return arr;
}

function createArray(length) {
  let arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    let args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
}

//Intermediate 16x16
//40 mines

let ran1 = 0;
let ran2 = 0;

let arr = createArray(16, 16);
let k = 40;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) arr[i][j] = 0; //Populate array with 0s
}
// Make array placement random
while (k > 0) {
  ran1 = Math.floor(Math.random() * arr.length);
  ran2 = Math.floor(Math.random() * arr.length);
  if (arr[ran1][ran2] > -41) {
    arr[ran1][ran2] = -41;
    k--;
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] < 0) {
      bombPlacer(arr, i, j);
    }
  }
}

createBoxes2(256);

console.log(arr);
