function translatePigLatin(str) {
  if (str.match(/^[aiueo]/)) {
    return str.replace(/([aiueo])([a-z]+|[aiueo]+)/, "$1$2way");
  } else if (str.match(/([^aiueo])([aiueo][a-z]+)/)) {
    return str.replace(/([^aiueo]+)([aiueo][a-z]+)/, "$2$1ay");
  } else {
    return str.replace(/([a-z]+)/, "$1ay");
  }
}

console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
