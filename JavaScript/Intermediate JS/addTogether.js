function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") {
    return undefined;
  } else if (second === undefined) {
    return (second) => addTogether(first, second);
  } else if (typeof second !== "number") {
    return undefined;
  } else {
    return first + second;
  }
}

console.log(addTogether(2, 3));
