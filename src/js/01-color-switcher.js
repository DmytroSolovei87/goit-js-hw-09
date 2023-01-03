function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

let intervalId = null;

function onStartBtnClick() {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
}

function onStopBtnClick() {
  clearInterval(intervalId);
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
}
