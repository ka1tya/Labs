'use strict';

const lifeTerm = (obj) => {
  const data = {};
  for (const key in obj) {
    const year = obj[key];
    data[key] = year.died - year.born;
  }
  return data;
};

const persons = {
  Shevchenko: { born: 1814, died: 1861 },
  Franko: { born: 1856, died: 1916 },
  Chornovil: { born: 1937, died: 1999 },
  Khrushcev: { born: 1894, died: 1971 },
};
console.log(lifeTerm(persons));