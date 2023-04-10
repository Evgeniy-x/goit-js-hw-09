const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
}

let timerRandom = null; 
refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', () => {

    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    timerRandom = setInterval( () => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
})

refs.btnStop.addEventListener('click', () => {
    clearInterval(timerRandom);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
})


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }