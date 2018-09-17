module.exports = function solveEquation(equation) {
  // your implementation
  var arr1 = equation.split(' ');
  var a = +arr1[0];
  var b = +(arr1[3] + arr1[4]);
  var c = +(arr1[7] + arr1[8]);
  
  var d = b * b - 4 * a * c;

  var x1 = ((- b + Math.sqrt(d))/(2 * a)).toFixed(2);
  var x2 = ((- b - Math.sqrt(d))/(2 * a)).toFixed(2);
  var arr2 = [x1, x2];

  function func1(a, b){
    return a - b;
  }
  arr2.sort(func1)
  return arr2;
}
