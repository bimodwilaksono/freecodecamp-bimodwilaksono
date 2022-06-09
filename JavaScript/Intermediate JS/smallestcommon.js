function kpk(a, b) {
  return (a / fpb(a, b)) * b;
}

function fpb(a, b) {
  if (b == 0) {
    return a;
  }
  return fpb(b, a % b);
}

function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    min = kpk(i, min);
  }
  return min;
}

console.log(smallestCommons([1, 5]));
