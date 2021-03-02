
exports.min = function min (array) {
    if (array === undefined || array.length === 0) return 0;
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
        let temp = result;
        result = array[i] < temp ? array[i] : temp;
    }
  return result;
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) return 0;
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
        let temp = result;
        result = array[i] > temp ? array[i] : temp;
    }
  return result;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) return 0;
    let result = 0;
    let counter = array.length;
    for (let i = 0; i < array.length; i += 1) {
        result += array[i];
    }
  return result / counter;
}
