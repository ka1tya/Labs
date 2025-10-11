'use strict';

const inc = number => ++number.n;

const obj = {n: 5};
inc(obj)
console.dir(obj);

