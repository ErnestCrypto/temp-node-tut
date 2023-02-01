// using npm to intall packages 

// using lodash
const _  = require('lodash');

// creating array
const items = [1,[2,[3,[4]]]];
const newItems  = _.flattenDeep(items);
console.log(newItems);









