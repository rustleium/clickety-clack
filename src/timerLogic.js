import { tickUITimer } from "./ui.js";

export function startTimer() {
  let count = 30;
  let myInterval = setInterval(tick, 1000);
  
  function tick() {
    const timer = document.querySelector('.timer');
    tickUITimer(timer, count);
    console.log(count)
    count--;
    if(count < 0) {
      clearInterval(myInterval);
    }
  }
}