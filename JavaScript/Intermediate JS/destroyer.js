function destroyer(arr, ...destroy) {
    return arr.filter((el) => !destroy.includes(el));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
