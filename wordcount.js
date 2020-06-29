var countWords = 'key heart rock knife joystick rock rock knife key'
var words = countWords.split(' ')
var wordObj = {}


for (word of words) {
  if (wordObj[word] & wordObj[word] >= 1) wordObj[word]++
  else wordObj[word] = 1
}

console.log(wordObj)