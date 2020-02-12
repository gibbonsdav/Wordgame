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

$("button").on("click", function() {
  var letter = $(this).html()
})

// // var indie = word.charAt(letter)
// for (i=0; i<hidden.length; i++) {
//   if (i = indie) {
//      = hidden.split()
//   }
// }
