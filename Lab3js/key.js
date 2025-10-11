'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = (length, characters) => {
    let key = '';
    const characLenth = characters.length;

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * characters.length);
        key += characters[random];
    }
    return key;
};

const key = generateKey(16, characters);

console.log(key);