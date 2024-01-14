function capitalize(str) {
  const firstLetter = str.charAt(0);
  const remainingWords = str.slice(1);
  return firstLetter.toUpperCase() + remainingWords;
}

module.exports = capitalize;