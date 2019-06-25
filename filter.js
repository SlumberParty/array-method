const array = [1, 2,, 4, 5];

const

function filter(arr)
  const filtered = [];
  for(let i = 0; i < arr.length; i++) {
    filtered[i] = callback(arr[i]);
}
return filtered;