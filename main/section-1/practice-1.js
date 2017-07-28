'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var result = [];
  for (var a in collectionA){
    for (var b in collectionB){
      if (collectionA[a] == collectionB[b]){
          result.push(collectionA[a])
      }
    }
  }
  return result;
}
