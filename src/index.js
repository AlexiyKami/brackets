module.exports = function check(str, bracketsConfig) {
  let openBracket = [];
  let closeBracket = [];
  let arr = [];
  for (let x of bracketsConfig) {
    openBracket.push(x[0]);
    closeBracket.push(x[1]);
  }
  for (let symb of str) {
    let brackets = bracketsConfig.find((pair) => pair[0] === symb || pair[1] === symb);
    if (closeBracket.includes(symb) && arr[arr.length - 1] === brackets[0]) {
      arr.pop();
    } else if (openBracket.includes(symb)) {
      arr.push(symb);
    } else {
      return false;
    }
  }
  return arr.length === 0;
}