const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hr = document.getElementById("hr");
const time = document.getElementById("time");

setInterval(() => {
  var date = new Date();
  time.innerHTML =
    date.getHours() + ": " + date.getMinutes() + ": " + date.getSeconds();

  let angle_sec = "rotate(" + date.getSeconds() * 6 + "deg)";

  let angle_min = "rotate(" + date.getMinutes() * 6 + "deg)";

  sec.style.transform = angle_sec;

  min.style.transform = angle_min;

  if (date.getHours() > 12) {
    let d = date.getHours() - 12;

    let angle_hr = "rotate(" + d * 30 + "deg)";
    hr.style.transform = angle_hr;
  } else {
    let angle_hr = "rotate(" + date.getHours() * 30 + "deg)";
    hr.style.transform = angle_hr;
  }
}, 1000);
