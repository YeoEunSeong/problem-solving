function isPalindrome1(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left++] !== str[right--]) return "NO";
  }
  return "YES";
}

function isPalindrome2(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("") ? "YES" : "NO";
}
