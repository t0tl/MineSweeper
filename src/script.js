"use strict";

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
