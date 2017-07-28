'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';
    let arrayB = objectB.value;
    for (var b in arrayB){
        for (var item of collectionA){
            if (item.key == arrayB[b]){
                item.count--;
            }
        }
    }
    return collectionA;
}
