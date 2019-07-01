function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    if(!arr.hasOwnProperty(i)) continue;

    mapped[i] = callback(arr[i]);
  }
  return mapped;
}

function filter(arr, callback) {
  const filtered = [];
  for(let i = 0; i < arr.length; i++) {
    if(!arr.hasOwnProperty(i)) continue;

    if(callback(arr[i])) {
      filtered[filtered.length] = arr[i];
    }
  }
  return filtered;
}

function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i) && callback(arr[i])) return i;
  }
  return -1;
}

function reduce(arr, callback, initialValue) {
  let acc = initialValue;
  let i = 0;

  if(initialValue === undefined) {
    for(i; i < arr.length; i++) {
      if(arr.hasOwnProperty(i)) {
        acc = arr[i];
        i += 1;
        break;
      }
    }
  }

  for(i; i < arr.length; i++) {
    if(!arr.hasOwnProperty(i)) continue;
    acc = callback(acc, arr[i]);
  }

  return acc;
}

module.exports = {
  map,
  filter,
  findIndex,
  reduce
};
