function isPalindrome(word) {
  // Write your algorithm here
  const b = word
  
  const c = b.split('')
  const d = c.reverse()
  const e = d.join('')
  console.log(e)

  return word===e
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
