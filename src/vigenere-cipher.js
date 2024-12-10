const { NotImplementedError } = require('../extensions/index.js');

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

  constructor(type = true) {
    this.type = type;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const string = str.toUpperCase();
    const keyCopy = key.toUpperCase();

    let result = '';
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
      if (counter >= keyCopy.length) {
        counter = 0;
      }
      
      if (letters.includes(string[i])) {
        let offset = letters.indexOf(string[i]) + letters.indexOf(keyCopy[counter]);
        
        result += letters[offset % letters.length];
        counter++;
      } else {
        result += string[i];
      }
    }

    return this.type ? result : [...result].reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const string = str.toUpperCase();
    const keyCopy = key.toUpperCase();

    let result = '';
    let counter = 0;

    
    for (let i = 0; i < string.length; i++) {
      if (counter >= keyCopy.length) {
        counter = 0;
      }

      if (letters.includes(string[i])) {;
        let offset = letters.indexOf(string[i]) - letters.indexOf(keyCopy[counter]);

        if (offset >= 0) {
          result += letters[offset % letters.length];
        } else {
          result += letters[(offset + letters.length) % letters.length];
        }
        counter++;
      }
      else result += string[i];
    }

    return this.type ? result : [...result].reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
