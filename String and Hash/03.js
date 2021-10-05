function suffixSort(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s.substring(i));
  }

  arr.sort();
  return arr; 
}

console.log(suffixSort("kseaedu"));