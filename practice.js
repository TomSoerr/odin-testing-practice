// helper function for capitalize and reverse String
function toStringArray(input) {
  const string = input.toString();
  const arr = string.split('');
  return arr;
}

function capitalize(input) {
  const arr = toStringArray(input);
  arr.splice(0, 1, arr[0].toUpperCase());
  return arr.join('');
}

function reverseString(input) {
  const arr = toStringArray(input);
  arr.reverse();
  return arr.join('');
}

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

export { capitalize, reverseString, calculator };
