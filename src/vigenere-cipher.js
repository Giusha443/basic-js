const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    return this._cipher(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    return this._cipher(encryptedMessage, key, false);
  }

  _cipher(input, key, isEncrypting) {
    const A = 65;
    const ALPHABET_SIZE = 26;
    const inputUpper = input.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < inputUpper.length; i++) {
      const charCode = inputUpper.charCodeAt(i);

      if (charCode >= A && charCode <= 90) {
        // Check if the character is a letter
        const shift = keyUpper.charCodeAt(keyIndex % keyUpper.length) - A;
        const newCharCode = isEncrypting
          ? ((charCode - A + shift) % ALPHABET_SIZE) + A
          : ((charCode - A - shift + ALPHABET_SIZE) % ALPHABET_SIZE) + A;

        result += String.fromCharCode(newCharCode);
        keyIndex++;
      } else {
        result += inputUpper[i]; // Non-alphabet characters are added unchanged
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
