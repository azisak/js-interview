/***
 * Write a function to "shorten" a sentence.
 * Ex: sen = "Hello, my name is Kopiko, and I have a cat!"
 * shorten(sen) === "H3o, my n2e is K4o, and I h2e a cat!"
 */
function shorten(sentence) {
  if (sentence.length === 0) return "";
  let words = sentence.split(" ");
  return words
    .map(w => {
      let actualLength = w.match(/\w/g).length;
      if (actualLength <= 3) return w;
      return (
        w.charAt(0) +
        (actualLength - 2) +
        w.charAt(actualLength - 1) +
        w.substr(actualLength)
      );
    })
    .join(" ");
}

module.exports = {
  shorten: shorten
};
