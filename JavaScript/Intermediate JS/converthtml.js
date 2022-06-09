function convertHTML(str) {
  const strArr = str.split("");

  return strArr
    .map((huruf) => {
      switch (huruf) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&apos;";
        default:
          return huruf;
      }
    })
    .join("");
}
console.log(convertHTML("Dolce & Gabbana"));
