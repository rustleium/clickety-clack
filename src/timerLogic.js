function startTimer() {
  let count = 30;
  let myInterval = setInterval(tick, 1000);
  
  function tick() {
    console.log(count)
    count--;
    if(count < 0) {
      clearInterval(myInterval);
    }
  }
}

startTimer();