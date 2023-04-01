let hour = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let second = document.querySelector(".second");

let clockTiming = () => {
  let date = new Date();

  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  const hourDeg = 30 * hours + minute / 2;
  hour.style.transform = `rotate(${hourDeg}deg)`;

  const minuteDeg = 6 * minute;
  minutes.style.transform = `rotate(${minuteDeg}deg)`;

  const secDeg = 6 * seconds;
  second.style.transform = `rotate(${secDeg}deg)`;
};
setInterval(clockTiming, 1000);
