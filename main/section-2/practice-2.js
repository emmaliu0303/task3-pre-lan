'use strict';

module.exports = function countSameElements(collection) {
  //return '实现练习要求，并改写该行代码。';
    let A = new Set(collection);
    let result = [];
    for (var temp of Array.from(A)){
        var count = 0;
        let ans = {};
        if (temp.indexOf('-')>=0){
            var temp1 = temp.split('-')[0];
            count = Number.parseInt(temp.split('-')[1]);
            console.log(count);
            ans.key = temp1;
            ans.count = count;
            result.push(ans);
        }else {
            ans = {};
            count = 0;
            for (var i in collection){
                if (collection[i] == temp){
                    count ++;
                }
            }
            ans.key = temp;
            ans.count = count;
            result.push(ans);
        }

    }
    return result;
}
