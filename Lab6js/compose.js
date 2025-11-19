'use strict';

const compose = (...fns) => {
    const handlers = [];

    const calculation = (x) => {
        let res = x;

        for (let i = fns.length - 1; i >= 0; i--) {
          try {
            res = fns[i](res);
          } catch(error) {
          for (const handler of handlers) {
             handler(error);
             return undefined;
          }
          }
        }
        return res;
    };

    calculation.on = (name, handler) => {
        if (name === 'error') handlers.push(handler);
    };

    return calculation;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const a = compose(inc);
console.log(a(3));
const b = compose(twice);
console.log(b(6));
const c = compose(cube);
console.log(c(5));
const d = compose(inc, cube);
console.log(d(3));