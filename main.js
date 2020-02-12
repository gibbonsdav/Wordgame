let wordstatus = null
let answer = " "
let guessed = []

longer = []
for (var i = 0; i < commonWords.length; i++) {
  if (commonWords[i].length >= 3) longer.push(commonWords[i])

  let randomWord = longer[Math.floor(Math.random() * longer.length)]

  let selectedWord = longer[Math.floor(Math.random() * longer.length)]

  // let wordlength = selectedWord.length

  document.querySelector("#nextWord").innerHTML = selectedWord

  function guessedword() {
    wordstatus = answer
      .split("")
      .map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
      .join("")
    document.getElementById("otherword").innerHTML = wordstatus
  }
  guessedword()
}
