hidden = []

longer = []
for (var i = 0; i < commonWords.length; i++) {
  if (commonWords[i].length >= 3) longer.push(commonWords[i])

  //let randomWord = longer[Math.floor(Math.random() * longer.length)]

  // let wordlength = selectedWord.length

  // document.querySelector("#nextWord").innerHTML = selectedWord
}

let selectedWord = longer[Math.floor(Math.random() * longer.length)]
for (i = 0; i < selectedWord.length; i++) {
  hidden.push("_")
}

console.log(hidden)
document.querySelector("#nextWord").innerHTML = hidden.join("")

// ***When a button is pressed, check that button's value against the characters in 'hidden' IF the value of button is the same as one of the characters in 'hidden'- take away the underscore, show the letter value.***

$("button").on("click", function(e) {
  var letter = $(this).html()
  if (letter === hidden.value) {
    return console.log(letter)
    // selectedWord.charAt(e)
  }
})

// newString = ''

// document.querySelector('letter').addEventListener("click", function() {
//   for(let i = 0; i < word.length; i++){
// 		if(char.value == selectedWord.charAt(i)){
// 				let split = selectedWord.split('')
// 					spl[i] = char.value
// // 						newString = spl.join('')
// }
// )

//  var indie = selectedWord.charAt(letter)
// for (i=0; i<hidden.length; i++) {
//   if (i = indie) {
//      = hidden.split()
//   }
// }
