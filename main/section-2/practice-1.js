'use strict';

module.exports = function countSameElements(collection) {
  //return '实现练习要求，并改写该行代码。';
  let A = new Set(collection);
  let result = [];
  for (var temp of Array.from(A)){
    var count = 0;
    let ans = {};
      for (var i in collection){
          if (collection[i] == temp){
                count ++;
          }
      }
      ans.key = temp;
      ans.count = count;
      result.push(ans);
  }
  return result;
}
