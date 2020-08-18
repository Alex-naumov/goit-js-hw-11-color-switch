const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector(`button[data-action="start"]`),
  stop: document.querySelector(`button[data-action="stop"]`),
  body: document.querySelector("body"),
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let id = 0;
const stop = () => {
  clearInterval(id);
  id = 0;
  refs.start.removeAttribute("disabled");
};

const start = () => {
  refs.start.setAttribute("disabled", "disabled");
  if (id) {
    return;
  }
  id = setInterval(() => {
    let index = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[index];
    console.log(colors[index]);
  }, 1000);
};

refs.start.addEventListener("click", start);
refs.stop.addEventListener("click", stop);
