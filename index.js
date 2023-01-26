function sumItems(array) {
  array = array.flat(Infinity);
  let sum = 0;
  for (let i=0; i<array.length; i++){
    sum+=array[i];
  }
  return sum;
}

module.exports = sumItems;