var A = A || (function (Math) {
  console.log(Math);
  return {
    Math
  };
})(Math);
console.log('Math =', A.Math.ceil);
