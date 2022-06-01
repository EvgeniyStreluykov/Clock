calculateTime = () => {
  const date = new Date();
  const dayNumber = date.getDay();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  const amPm = hour >= 12 ? 'PM' : 'AM';
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? hour : '12';

  writeHTML("#day", dayNames[dayNumber]);
  writeHTML("#hour", withLeadingZero(hour));
  writeHTML("#minute", withLeadingZero(minute));
  writeHTML("#seconds", withLeadingZero(seconds));
  writeHTML("#amPm", amPm);

  function withLeadingZero(value) {
    return value < 10 ? '0' + value : value
  }

  function writeHTML(selector, newValue) {
    element = document.querySelector(selector);
    let currentValue = element.value;
    if (currentValue === newValue) return;
    element.textContent = newValue;
  }
  setTimeout(calculateTime, 200);
}

window.addEventListener('load', calculateTime);

bgcolor = () => {
  const data = new Date();
  const d = data.getHours();
  const body = document.querySelector('body');

  if (d >= 22 || d < 6) {
    body.style.background = 'radial-gradient(circle farthest-corner at 100px 50px, #FBF2EB, #352A3B)';
  } else if (d >= 6 && d < 10) {
    body.style.background = 'linear-gradient(to top left, powderblue, pink)';
  } else if (d >= 10 && d < 18) {
    body.style.background = 'conic-gradient(from 90deg at 25% -10%, #fff700ed, #1e00ff68, #25c12f, #ea00ff7c, #0004ff)';
  } else if (d >= 18 && d < 22) {
    body.style.background = 'radial-gradient(white, #FFA9A1)';
  }
}
window.addEventListener('load', bgcolor);
