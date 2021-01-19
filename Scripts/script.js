function setTime(daysBox, hrBox, minBox, secBox) {
  const currentTime = new Date().getTime(); //Fetch current time.
  const timeLeft = countDownDate - currentTime;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const secondStroke = 360 * (seconds / 60);

  daysBox.innerText = `~${days} DAYS~`;
  hrBox.innerText = `${hours} :`;
  minBox.innerText = `${minutes} :`;
  secBox.innerText = `${seconds}`;
  document.getElementById("second").style.transform =
    "rotate(" + (359 - secondStroke) + "deg)";
  // console.log(screen.width);
}

const countDownDate = new Date("Jan 26, 2021 00:00:00").getTime();
daysBox = document.querySelector(".box-dd > .timestamp");
hrBox = document.querySelector(".box-hh > .timestamp");
minBox = document.querySelector(".box-mm > .timestamp");
secBox = document.querySelector(".box-ss > .timestamp");

let time = setInterval(function () {
  setTime(daysBox, hrBox, minBox, secBox);
}, 1000);
