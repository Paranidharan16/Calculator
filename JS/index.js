const btns = document.querySelectorAll(".num");
let result = document.querySelector(".result");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
let cal = "";

function calculation(sym) {
  cal += sym;
  result.textContent = cal;
}

btns.forEach((e) => {
  e.addEventListener("click", function (e) {
    calculation(e.target.textContent + "");
  });
});

clear.addEventListener("click", () => {
  cal = cal.slice(0, cal.length - 1);
  result.textContent = cal;
});

equal.addEventListener("click", () => {
  const final = eval(cal);
  cal = final;
  result.textContent = cal;
});
