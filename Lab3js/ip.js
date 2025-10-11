'use strict';

const ipToint = (ip = '192.168.1.10') => {
    const fn = (res, object) => (res << 8) + parseInt(object);
    return ip.split('.').reduce(fn, 0);
};

console.dir(ipToint());