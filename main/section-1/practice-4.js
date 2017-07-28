'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';
    var temp = [];
    for (var key in collectionA){
      temp.push(collectionA[key].key);
    }
    let A = new Set(temp);
    let B = new Set(objectB.value);
    let intersect = new Set([...A].filter(x => B.has(x)));
    return Array.from(intersect);
}
