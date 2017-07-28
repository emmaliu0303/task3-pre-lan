'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';

    let arrayB = objectB.value;
    for (var b in arrayB){
        for (var item of collectionA){
            //console.log(item.count);
            if (item.key == arrayB[b]){
                var num = Number.parseInt(item.count/3);
                item.count = item.count - num;
            }
        }
    }
    return collectionA;
}
