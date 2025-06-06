import { startTyping } from "./typingLogic.js";
import { startTimer } from "./timerLogic.js";
import './style.css';

const startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', () => {
  startTyping();
  startTimer();
})