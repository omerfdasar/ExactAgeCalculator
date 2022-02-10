const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.getElementById("countdown");

const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  loading.style.display = "block";
  //it provides disappearance of the loading icon with some delay
  setTimeout(() => {
    loading.style.display = "none";
    countdown.style.display = "flex";
  }, 1000);

  //   First Way
  /*      years.innerHTML = "00";
     months.innerHTML = "00";
     days.innerHTML = "00";
     hours.innerHTML = "00";
     minutes.innerHTML = "00";
     seconds.innerHTML = "00"; */
  // Second Way
  /* let H2Elements = document.getElementsByTagName("h2");
  for (let index = 0; index < H2Elements.length; index++) {
    H2Elements[index].innerHTML = "00";
  } */

  let H2Elements2 = countdown.querySelectorAll("h2");
  H2Elements2.forEach((h2Element) => {
    h2Element.innerHTML = "00";
  });
});

let selectedBirthday = new Date();
let birthdayInput = document.querySelector("input[name=birthday]");

birthdayInput.addEventListener("change", (event) => {
  //   console.log(event.target.value);
  //   converting to date from dateString
  selectedBirthday = new Date(event.target.value);
  if (selectedBirthday > new Date()) {
    alert("Your birthday can not be after today");
    return;
  }
  document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

  loading.style.display = "block";
  setInterval(updateCountdown, 1000);
  setTimeout(() => {
    loading.style.display = "none";
    countdown.style.display = "flex";
  }, 1000);
});

const updateCountdown = () => {
  let dobYear = selectedBirthday.getFullYear();
  let dobMonth = selectedBirthday.getMonth();
  let dobDay = selectedBirthday.getDate();
  let dobHour = selectedBirthday.getHours();
  let dobMinute = selectedBirthday.getMinutes();
  let dobSecond = selectedBirthday.getSeconds();

  let now = new Date();

  let currentYear = now.getFullYear();
  let currentMonth = now.getMonth();
  let currentDay = now.getDate();
  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
  let currentSecond = now.getSeconds();

  let yearOfAge = currentYear - dobYear;
  let monthOfAge = currentMonth - dobMonth;
  let dayOfAge = currentDay - dobDay;
  let hourOfAge = currentHour - dobHour;
  let minuteOfAge = currentMinute - dobMinute;
  let secondOfAge = currentSecond - dobSecond;

  //   if the months,days,hours,minute is bigger than current months it returns negative. I hereby handle this problem.
  if (minuteOfAge < 0) {
    minuteOfAge += 60;
    hourOfAge--;
  }
  if (hourOfAge < 0) {
    hourOfAge += 24;
    dayOfAge--;
  }
  if (dayOfAge < 0) {
    dayOfAge += 30;
    monthOfAge--;
  }
  if (monthOfAge < 0) {
    monthOfAge += 12;
    yearOfAge--;
  }

  //Adding values to DOM

  years.innerHTML = yearOfAge.toString().padStart(2, "0");
  months.innerHTML = monthOfAge.toString().padStart(2, "0");
  days.innerHTML = dayOfAge.toString().padStart(2, "0");
  hours.innerHTML = hourOfAge.toString().padStart(2, "0");
  minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
  seconds.innerHTML = secondOfAge.toString().padStart(2, "0");
};
