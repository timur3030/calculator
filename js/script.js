"use strict";

const buttons = document.querySelectorAll(".calculator__btn"),
  display = document.querySelector(".calculator__display");
let result = "5";
let result2 = "10";
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    display.innerHTML = `<div>${element.textContent}<div>`;
    // result += element.textContent;
    // if (element.classList.contains("add")) {
    //   console.log(+element.textContent);
    // }
    // console.log(element.classList.contains("add"));
    // result = (+inputLira.value * data.current.rub).toFixed(2);

    // return element.textContent;
  });
});
// console.log(display);
console.log(`${+result+(+result2)}`);

// const inputLira = document.querySelector("#lira"),
//   inputRub = document.querySelector("#rub");

// inputLira.addEventListener("input", () => {
//   const request = new XMLHttpRequest();

//   request.open("GET", "js/current.json");
//   request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//   request.send();

//   request.addEventListener("load", () => {
//     if (request.status === 200) {
//       const data = JSON.parse(request.response);
//       inputRub.value = (+inputLira.value * data.current.rub).toFixed(2);
//     } else {
//       inputRub.value = "Что-то пошло не так";
//     }
//   });
// });
