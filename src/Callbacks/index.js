function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(22, 18, sum));

setTimeout(function () {
  console.log("Hello Js Nerd");
}, 20000);

function gretting(name) {
  console.log(`Hello ${name}`);
}

setTimeout(gretting, 3500, "Matti");
