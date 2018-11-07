var A = A || (function (Math) {
  console.log(Math);
  return {
    Math
  };
})(Math);
global.A = A;
