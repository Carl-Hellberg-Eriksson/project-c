function sum(a: number, b: number) {
  return a + b;
}
function multiply(a: number, b:number ) {
  return a * b;
}

function isNegative(a: number) {
  return a < 0
}

function thrower() {
  throw 'testthrow';
}
export {
  sum, multiply, isNegative, thrower
};