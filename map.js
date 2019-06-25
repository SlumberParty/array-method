const array = [1, 2, , 4, 5];

function map(arr, callback) {
    const mapped = [];
    for(let i = 0; i < arr.length; i++) {
        mapped[i] = callback(arr[i]);
    }
    return mapped;
}

module.exports = map;