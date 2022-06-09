function palindrome(str) {
  const arr = str
    .toLowerCase()
    .split("")
    .filter((el) => !el.match(/[ _.,-/()]/g));

  const newStr = arr.join("");

  const reverseStr = arr.reverse().join("");

  if (reverseStr === newStr) {
    return true;
  } else {
    return false;
  }
}

// console.log(palindrome("_eye"));
// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("race car"));
// console.log(palindrome("almostomla"));
console.log(palindrome("0_0 (: /- :) 0-0"));

// arr.reverse() === arr ? true : false;
// let str = "_Eye";
// const arr= str.toLowerCase()
// .split('').filter((el) => !el.match(/[ _.,-]/g));
// const arr2= arr.reverse()
// if(arr2 === arr) {
//   return true
// } else {
//   return false
// }
// const re = /[_.,- ]/g;
// console.log(arr);
// console.log(arr2);
