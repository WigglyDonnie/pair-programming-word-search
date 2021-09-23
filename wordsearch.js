const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    let reverseArray = l.split("").reverse().join('');
    if (reverseArray.includes(word)) {
      return true;
    }

    if (l.includes(word)) {
      return true
    }
  }

  for (let x = horizontalJoin.length - 1; x > 0; x--) {
    let string = "";
    for (let y = letters.length - 1; y > 0; y--) {
      string += letters[y][x]
    }
    if (string.includes(word)) {
      return true
    }
  }

  for (let x = 0; x < horizontalJoin.length; x++) {
    let string = "";
    for (let y = 0; y < letters.length; y++) {
      string += letters[y][x]
    }
    if (string.includes(word)) {
      return true
    }
  }
  return false;
};


module.exports = wordSearch


