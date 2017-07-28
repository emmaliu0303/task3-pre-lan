'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';
    let A = Array.from(new Set(collectionA));
    let result = [];
    for (var item of A){
        result.push({key:item,count:0});
    }
    console.log(A);
    for (var a in A){
        var num = 0;
        for (var item in collectionA){
            if (collectionA[item] == A[a]){
                num ++;
            }
        }
        for (var item of result){
            if (item.key == A[a]){
                item.count = num;
            }
        }
    }
    let arrayB = objectB.value;
    for (var b in arrayB){
        for (var item of result){
            if (item.key == arrayB[b]){
                var num = Number.parseInt(item.count/3);
                item.count = item.count - num;
            }
        }
    }
    return result;
}
