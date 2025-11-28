'use strict';

const unique = (arr) => {
    const uniqueArr = [];
    for (const item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
};

const res = unique([5, 33, 76, 5, -1, 33, 8, -1]);
console.log(res);