const ratio = require("../ratio/index");
const fact = require("../factorial/index");
function ratioAndFactorial(a, b, c) {
  let ob = { ratio: ratio(a, b), factorial: fact(c) };
  return ob;
}
console.log(ratioAndFactorial(2, 1, 3));
module.exports = ratioAndFactorial;
