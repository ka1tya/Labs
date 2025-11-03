'use strict';

const max = (matrix) => {
  let value = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const obj = row[j];
      if (value < obj) value = obj;
    }
  }
  return value;
};

const m = max([[15, 87, 4], [2, 90, 11], [25, 8, 48]]);

console.log(m);
