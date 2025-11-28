'use strict';

const removeElement = (arr, ...values) => {
    for (const value of values) {
        const index = arr.indexOf(value);
        if (index !== -1) arr.splice(index, 1);
    }
    return arr;
};

const arr = [9, -18, -25, 6, 1];
removeElement(arr, -18, 1);
console.log(arr);