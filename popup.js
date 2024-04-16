function makeCalculations() {
  let string = this.value;
  document.getElementById("charCount").innerText = string ? string.length : 0; // Chars
  document.getElementById("spaceCount").innerText = string ? string.split(" ").length - 1 : 0; // Spaces
  document.getElementById("sentenceCount").innerText = string ? string.split(".").length : 0; // Sentences
  document.getElementById("paragraphCount").innerText = string ? string.split(/\r\n|\r|\n/).length : 0; // Paragraphs
  document.getElementById("wordCount").innerText = string ? string.trim().split(/\s+/).length : 0; // Words
}

(function () {
  let inputText = document.getElementById("inputText");
  // Make focus
  inputText.focus();

  // Attach Listeners
  inputText.addEventListener("click", makeCalculations, true);
  inputText.addEventListener("focus", makeCalculations, true);
  inputText.addEventListener("blur", makeCalculations, true);
  inputText.addEventListener("cut", makeCalculations, true);
  inputText.addEventListener("paste", makeCalculations, true);
  inputText.addEventListener("input", makeCalculations, true);
  inputText.addEventListener("keyup", makeCalculations, true);

  // Current Date
  document.querySelector("#currentYear").innerText = new Date().getFullYear();
})();
