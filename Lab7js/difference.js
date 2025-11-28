'use strict';

const difference = (arr1, arr2) => {
    const res = [];
    for (const item of arr1) {
        if (!arr2.includes(item)) {
            res.push(item);
        }           
    }
    return res;
};

const arr1 = [80, 3, 26, 1, -8];
const arr2 = [3, -8];
const result = difference(arr1, arr2);
console.log(result);