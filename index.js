let tittle = document.querySelector(".title");
let textNum = document.querySelector("#number");
let buttonPlus = document.querySelector(".btn-primary");
let buttonMin = document.querySelector(".btn-secundary");

buttonPlus.addEventListener("click", () => {
  textNum.innerText++;
});

buttonMin.addEventListener("click", () => {
  textNum.innerText--;
});
