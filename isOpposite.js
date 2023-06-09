// DESCRIPTION:
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.
// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// my solution

function isOpposite(s1,s2){
  if(s1.length !== s2.length) return false
  if(s1.length === 0) return false
  for (let i = 0; i < s1.length; i++){
    const s1Char = s1[i]
    const s2Char = s2[i]
    if(s1Char === s1Char.toLowerCase()){
      if(s1Char.toUpperCase() !== s2Char) return false
    } else {
      if (s1Char.toLowerCase() !== s2Char) return false
    }
  }
  return true
}