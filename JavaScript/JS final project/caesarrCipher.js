function rot13(str) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .map((x) =>
      alpha.indexOf(x) == -1 ? x : alpha[(alpha.indexOf(x) + 13) % alpha.length]
    )
    .join("");
}

console.log(rot13("SERR PBQR PNZC"));
