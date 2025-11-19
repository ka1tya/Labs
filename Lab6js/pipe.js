'use strict';

const pipe = (...fns) => {
  fns.forEach((fn) => {
    if (typeof fn !== 'function') {
      throw new Error('Not a function');
    }
  })
  return (x) => fns.reduce((v, f) => f(v), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log(pipe(inc)(3));
console.log(pipe(twice)(6));
console.log(pipe(cube)(5));
console.log(pipe(inc, cube)(3));