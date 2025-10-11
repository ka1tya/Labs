'use strict';

const fn = () => {
    const obj1 = { name: 'Kateryna' };
    let obj2 = { name: 'Kateryna' };

    obj1.name = 'Varenko';
    obj2.name = 'Varenko';

    obj2 = { name: 'Kateryna Varenko'};
};

const createUser = (name, city) => {
    return {name, city};
};

console.log(createUser('Kateryna Varenko', 'Kyiv'))