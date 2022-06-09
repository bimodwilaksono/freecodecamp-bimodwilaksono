function convertToRoman(num) {
  let romanNum = "";
  const roman = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const keys = Object.keys(roman).reverse();
  keys.forEach((key) => {
    while (key <= num) {
      romanNum += roman[key];
      num -= key;
    }
  });
  return romanNum;
}

console.log(convertToRoman(9999));
