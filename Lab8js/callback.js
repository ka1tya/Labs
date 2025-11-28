'use strict';

const iterate = (item, callback) => {
    const keys = Object.keys(item);
    for (const key of keys) {
        const value = item[key];
        callback(key, value, item);
    }
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});
