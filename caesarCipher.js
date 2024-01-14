function caesarCipher(str, shiftFactor) {
  const regex = new RegExp("[a-zA-Z]");
  let shifted = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    console.log(regex.test(str[i]));
    if (regex.test(str[i])) {
      // In case the shift factor is greater than the alphabet range
      const factor = shiftFactor % 26;
      charCode = charCode + factor;
    }

    shifted += String.fromCharCode(charCode);
  }
  return shifted;
}

module.exports = caesarCipher;
