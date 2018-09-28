module.exports = function solveEquation(equation) {
  // your implementation
  let arr = equation.split(' ');
  const a = +arr[0];
  const b = +(arr[3] + arr[4]);
  const c = +(arr[7] + arr[8]);
  let d = b * b - 4 * a * c;
  let x1 = ((- b + Math.sqrt(d))/(2 * a)).toFixed(2);
  let x2 = ((- b - Math.sqrt(d))/(2 * a)).toFixed(2);
  let arrOrdered = [x1, x2];

  let compareT = (a, b) => a - b;
  return arrOrdered.sort(compareT);
}
