const input    = document.querySelector('#sentece');
const elResult = document.querySelector('#result');

function isPalindrome() {
  const string = formatString(this.value);
  const reversedString = reverseString(string);
  let result;

  if (string === reversedString) {
    result = `<b>${this.value}</b> is a palindrome.`;
  } else {
    result = `<b>${this.value}</b> is not a palindrome.`;
  }

  if (string.length === 0) result = "";

  elResult.innerHTML = result;
}

function formatString(string) {
  return string.toLowerCase().replace(/\s/g, "");
}

function reverseString(string) {
  return string.split('')
    .reverse()
    .join('');
}

input.addEventListener('keyup', isPalindrome);
