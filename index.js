let tittle = document.querySelector(".title");
let textNum = document.querySelector("#number");
let buttonPlus = document.querySelector(".btn-primary");
let buttonMin = document.querySelector(".btn-secundary");

function sumar() {
  textNum.innerText++;
}
function restar() {
  textNum.innerText--;
}

buttonPlus.addEventListener("click", sumar);
buttonMin.addEventListener("click", restar);

// buttonPlus.addEventListener("click", () => {
//   textNum.innerText++;
// });

// buttonMin.addEventListener("click", () => {
//   textNum.innerText--;
// });
