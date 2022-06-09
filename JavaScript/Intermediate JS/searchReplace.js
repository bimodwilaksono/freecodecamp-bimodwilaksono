function myReplace(str, before, after) {
  // if (before[0] === before[0].toUpperCase()) {
  //   const after1 = after.charAt(0).toUpperCase() + after.slice(1);
  //   return str.replace(before, after1);
  // } else {
  //   return str.replace(before, after.toLowerCase());
  // }
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
