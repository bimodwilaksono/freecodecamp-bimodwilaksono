function pairElement(str) {
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  const arr = str.split("");
  return arr.map((x) => [x, pairs[x]]);
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
