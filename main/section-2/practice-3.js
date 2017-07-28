'use strict';

module.exports = function countSameElements(collection) {
  //return '实现练习要求，并改写该行代码。';
    let A = new Set([...collection].map(x => x[0]));
    let result = [];
    for (var item of Array.from(A)){
        result.push({name:item,summary:0})
    }
    for (var a of collection){
        var temp_count = 1;
        if (a.indexOf('-')>=0 || a.indexOf(':')>=0){
            temp_count = Number.parseInt(a[2]);
        }
        if (a.indexOf('[')>=0){
            var a1 = a.split('[');
            temp_count = Number.parseInt(a1[1].split(']')[0]);
        }
        for (var ans of result){
            if (ans.name == a[0]){
                ans.summary += temp_count;
            }
        }
    }
    return result;
}
