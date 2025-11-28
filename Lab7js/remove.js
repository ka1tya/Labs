'use strict';

const removeElement = (arr, values) => {
    const index = arr.indexOf(values);
    if (index !== -1) arr.splice(index, 1);
    return arr;
};

const arr = [7, -2, 10, 5, 0];
removeElement(arr, 0);
console.log(arr);
