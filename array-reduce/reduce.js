function reduce(array, reducer, initialValue) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    reducer(array[i - 1], array[i]);
  }
  return newArray;
}
