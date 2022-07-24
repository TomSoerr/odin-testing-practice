// helper function for capitalize and reverse String
function toStringArray(input) {
  const string = input.toString();
  const arr = string.split('');
  return arr;
}

// 1
function capitalize(input) {
  const arr = toStringArray(input);
  arr.splice(0, 1, arr[0].toUpperCase());
  return arr.join('');
}

// 2
function reverseString(input) {
  const arr = toStringArray(input);
  arr.reverse();
  return arr.join('');
}

// 3
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

// helper function for caesarCipher
const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function getShiftedLetter(letter, shift) {
  const getIndex = (l) => {
    let index = alphabet.indexOf(l) + shift;
    if (index > 25) {
      index -= 26;
    }
    return index;
  };
  if (alphabet.includes(letter)) {
    const index = getIndex(letter);
    return alphabet[index];
  }
  if (alphabet.includes(letter.toLowerCase())) {
    const index = getIndex(letter.toLowerCase());
    return alphabet[index].toUpperCase();
  }
  return letter;
}

// 4
function caesarCipher(string, shift) {
  if (shift > 25 || shift < 0) throw new Error('invalid shift');
  const arr = string.split('');
  for (let x = 0; x < arr.length; x += 1) {
    arr.splice(x, 1, getShiftedLetter(arr[x], shift));
  }
  return arr.join('');
}

export { capitalize, reverseString, calculator, caesarCipher };
