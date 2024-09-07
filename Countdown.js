let timer;
let isPaused = true;
let timeRemaining = 0;

const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timerDisplay = document.getElementById('timer-display');

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (isPaused) {
        const minutes = parseInt(minutesInput.value, 10);
        const seconds = parseInt(secondsInput.value, 10);
        timeRemaining = minutes * 60 + seconds;
        isPaused = false;
    }

    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    isPaused = true;
    timeRemaining = 0;
    timerDisplay.textContent = '00:00';
    minutesInput.value = '0';
    secondsInput.value = '0';
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
