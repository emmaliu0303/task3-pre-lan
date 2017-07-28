'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  //return '实现练习要求，并改写该行代码。';
    let A = new Set(collectionA);
    let intersect = new Set();
    for (let B of collectionB){
        intersect = new Set([...A].filter(x => new Set(B).has(x)));
    }
    return Array.from(intersect);
}
