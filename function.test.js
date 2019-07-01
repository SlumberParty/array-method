const {
  map,
  filter,
  findIndex,
  reduce,
  every,
  forEach
} = require('./function.js');
  
describe('array methods', () => {
  describe('map function', () => {
    it('returns an array', () => {
      const numbers = [1, 2, 3];
      const mapped = map(numbers, number => number * 2);
  
      expect(mapped).toEqual(expect.any(Array));
    });
  
    it('returns a mapped array with the same length as arr', () => {
      const colors = ['red', 'green', 'blue', 'yellow'];
      const mapped = map(colors, color => color.toUpperCase());
  
      // expect(mapped.length).toEqual(colors.length);
      expect(mapped).toHaveLength(colors.length);
    });
  
    it('returns a mapped array with uppercase colors', () => {
      const colors = ['red', 'green', 'blue', 'yellow'];
      const mapped = map(colors, color => color.toUpperCase());
  
      expect(mapped).toEqual([
        'RED',
        'GREEN',
        'BLUE',
        'YELLOW'
      ]);
    });
  
    it('returns a mapped array with doubled numbers', () => {
      const numbers = [1, 2, 3, 4];
      const mapped = map(numbers, number => number * 2);
  
      expect(mapped).toEqual([
        2,
        4,
        6,
        8
      ]);
    });
  
    it('skips holes', () => {
      // eslint-disable-next-line no-sparse-arrays
      const numbers = [1, , 3, 4];
      const callback = jest.fn();
      map(numbers, callback);
  
      // 3 times since the hole is skipped
      expect(callback).toHaveBeenCalledTimes(3);
    });
  });
  
  describe('filter function', () => {
    it('returns an array', () => {
      const numbers = [1, 2, 3];
      const filtered = filter(
        numbers,
        number => number % 2 === 0
      );
  
      expect(filtered).toEqual(expect.any(Array));
    });
  
    it('filters out odd numbers', () => {
      const numbers = [1, 2, 3, 4];
      const evens = filter(
        numbers,
        number => number % 2 === 0
      );
  
      expect(evens).toEqual([2, 4]);
    });
  
    it('skips holes', () => {
      // eslint-disable-next-line no-sparse-arrays
      const numbers = [1, , 3, 4];
      const callback = jest.fn();
      filter(numbers, callback);
  
      expect(callback).toHaveBeenCalledTimes(3);
    });
  });

  describe('findIndex function', () => {
    it('returns a number', () => {
      const colors = ['red', 'blue', 'green'];
      const index = findIndex(colors, color => color.includes('l'));

      expect(index).toEqual(expect.any(Number));
    });

    it('returns the index of a matching item', () => {
      const colors = ['red', 'blue', 'green'];
      const index = findIndex(colors, color => color.includes('l'));

      expect(index).toEqual(1);
    });
    it('returns -1 if no match', () => {
      const colors = ['red', 'blue', 'green'];
      const index = findIndex(colors, color => color.includes('y'));

      expect(index).toEqual(-1);
    });

    it('skips holes', () => {
      // eslint-disable-next-line no-sparse-arrays
      const numbers = [1, , 3, 4];
      const callback = jest.fn();
      findIndex(numbers, callback);

      expect(callback).toHaveBeenCalledTimes(3);
    });
  });
});

describe ('reduce function', () => {
  it('iterates through an array and invokes the callback', () => {
    const numbers = [1, 2, 3];
    const callback = jest.fn();

    reduce(numbers, callback, 0);

    expect(callback).toHaveBeenCalledTimes(numbers.length);
  });

  it('iterates through an array and updates the acc with result of callback', () => {
    const numbers = [1, 2, 3];
    const sum = reduce(numbers, (acc, item) => acc + item, 0);

    expect(sum).toEqual(6);
  });

  it('skips holes', () => {
    // eslint-disable-next-line no-sparse-arrays
    const numbers = [1, , 3, 4];
    const callback = jest.fn();
    reduce(numbers, callback, 0);

    expect(callback).toHaveBeenCalledTimes(3);
  });
});

describe('every function', () => {
  it('returns false if any number does not match', () => {
    const numbers = [1, 2, 3, 4];
    expect(every(numbers, number => number < 2)).toBeFalsy();
  });

  it('returns true if any number does not match', () => {
    const numbers = [1, 2, 3, 4];
    expect(every(numbers, number => number < 10)).toBeTruthy();
  });

  it('skips holes', () => {
    // eslint-disable-next-line no-sparse-arrays
    const numbers = [1, , 3, 4];
    const callback = jest.fn(number => number < 10);
    every(numbers, callback);

    expect(callback).toHaveBeenCalledTimes(3);
  });
});

describe('forEach function', () => {
  it('iterates throught the array calling callback', () => {
    const callback = jest.fn();

    forEach([1, 2, 3], callback);

    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith(1);
    expect(callback).toHaveBeenCalledWith(2);
    expect(callback).toHaveBeenCalledWith(3);
  });

  it('skips holes', () => {
    // eslint-disable-next-line no-sparse-arrays
    const numbers = [1, , 3, 4];
    const callback = jest.fn();
    forEach(numbers, callback);

    expect(callback).toHaveBeenCalledTimes(3);
  });
});
