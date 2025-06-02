import { generateText } from "./textGenerator.js";
import { updateTextColor, updateTextContent } from "./ui.js";

export function startTyping() {
  const text = document.querySelector('.textBox');
  let currentText = generateText();
  updateTextContent(text, currentText);

  window.addEventListener('keydown', (e) => {
    if(currentText === e.key) {
      updateTextColor(text, "correct");
    } else {
      updateTextColor(text, 'incorrect');
    }
  })

  window.addEventListener('keyup', () => {
    currentText = generateText();
    updateTextContent(text, currentText);
    updateTextColor(text, "doesn't matter")
  })
}