"use strict";
// const wrapperElement = document.querySelector(".wrapper");
// const createBoxes = function (numberOfBoxes) {
//   const html = `<div class="box-x"></div>`;
//   console.log(numberOfBoxes);
//   for (let i = 0; i < 256; i++) {
//     wrapperElement.insertAdjacentHTML("afterbegin", html);
//   }
// };
// createBoxes(256);

// const createBoxes2 = function (numberOfBoxes) {
//   for (let i = 0; i <= numberOfBoxes; i++) {
//     console.log(i);
//     let divElementCreator = document.createElement("div");
//     let divClassAttacher = document.querySelector(`.box-${i}`);
//     document.body.insertBefore(divElementCreator, divClassAttacher);
//   }
// };
// createBoxes2(25);

// function createBoxes2(numberOfBoxes) {
//   for (let i = 0; i < numberOfBoxes; i++) {
//     const divElementCreator = document.createElement("div");
//     let divClassAttacher = document.querySelector(`.${i}`); // dunno what this is supposed to do
//     document.body.insertBefore(divElementCreator, divClassAttacher); // dunno what this is supposed to do
//   }
// }
// createBoxes2(25);

function createBoxes2(numberOfBoxes) {
  const wrapper = document.querySelector(".wrapper");
  for (let i = 0; i < numberOfBoxes; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "box");
    div.setAttribute("id", "box-" + i);
    div.addEventListener("click", function () {
      console.log(`You clicked box-${i}`);
    });
    wrapper.append(div);
  }
}
createBoxes2(256);

//   movements.forEach((mov, i) => {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//
//     const html = `
//      <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}</div>
//       </div>
//       `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
// displayMovements(account1.movements);
// console.log(containerMovements.innerHTML); // Shows all the html that is the use case for innerHTML over textContent
// for (const i = 0; i < array.length; i++) {
//   array[i]
// }
