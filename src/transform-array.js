const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
}else if(arr.length < 1){
  return arr
}
let newArr = arr.slice();
while(newArr.some(item => typeof(item)==='string')){
    newArr.forEach(function(item, index){
        if(typeof(item) === 'string'){
            switch(item){
                case '--discard-next':
                    newArr.splice((index), 2)
                    break;
                case '--discard-prev':
                    if(index === 0){
                      newArr.shift();
                    }else{newArr.splice((index -1), 1)}
                    break;
                case '--double-next':
                  if(index != newArr.length-1){
                    item =  newArr[index + 1];
                  }else{newArr.splice(index, 1)}
                break;
                case '--double-prev':
                    newArr[index] =  newArr[index - 1];
                break;
            }
      }else if(item == undefined){
          newArr.splice(index, 1)
      }
    });
    return newArr
}
}
module.exports = {
  transform
};
