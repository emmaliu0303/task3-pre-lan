'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';
    let A = new Set(collectionA);
    let result = [];
    for (var temp of Array.from(A)){
        var count = 0;
        let ans = {};
        if (temp.indexOf('-')>=0){
            var temp1 = temp.split('-')[0];
            count = Number.parseInt(temp.split('-')[1]);
            ans.key = temp1;
            ans.count = count;
            result.push(ans);
        }else {
            ans = {};
            count = 0;
            for (var i in collectionA){
                if (collectionA[i] == temp){
                    count ++;
                }
            }
            ans.key = temp;
            ans.count = count;
            result.push(ans);
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
