function truthCheck(collection, pre) {
  return collection.every(obj => obj.hasOwnProperty(pre) && Boolean(obj[pre]) );
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
