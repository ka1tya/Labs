'use strict';

const store = (x) => {
    const value = x;
    return () => value;
};

const read = store(5);
const value = read();
console.log(value);