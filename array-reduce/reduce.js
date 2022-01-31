function reduce(array, reducer, initialValue) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    reducer();
  }
  return newArray;
}
