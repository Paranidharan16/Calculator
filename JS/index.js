const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

let result = document.querySelector(".result");

let cal = "";

function calculation(sym) {
  cal += sym;
  result.textContent = cal;
}

one.addEventListener("click", () => {
  calculation("1");
});

two.addEventListener("click", () => {
  calculation("2");
});
three.addEventListener("click", () => {
  calculation("3");
});
four.addEventListener("click", () => {
  calculation("4");
});

five.addEventListener("click", () => {
  calculation("5");
});

six.addEventListener("click", () => {
  calculation("6");
});

seven.addEventListener("click", () => {
  calculation("7");
});
eight.addEventListener("click", () => {
  calculation("8");
});
nine.addEventListener("click", () => {
  calculation("9");
});

zero.addEventListener("click", () => {
  calculation("0");
});

const dot = document.querySelector(".dot");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const div = document.querySelector(".div");
const mul = document.querySelector(".mul");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

dot.addEventListener("click", () => {
  calculation(".");
});
add.addEventListener("click", () => {
  calculation("+");
});
sub.addEventListener("click", () => {
  calculation("-");
});

mul.addEventListener("click", () => {
  calculation("*");
});
div.addEventListener("click", () => {
  calculation("/");
});

clear.addEventListener("click", () => {
  cal = "";
  result.textContent = cal;
});

equal.addEventListener("click", () => {
  const final = eval(cal);
  cal = final;
  result.textContent = cal;
});
