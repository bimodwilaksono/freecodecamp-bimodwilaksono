function diffArray(arr1, arr2) {
  const filter1 = arr1.filter((el) => !arr2.includes(el));
  const filter2 = arr2.filter((el) => !arr1.includes(el));

  return [...filter1, ...filter2];
}

console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]));
