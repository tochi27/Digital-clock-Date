document.title = "Digital Clock";

const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const meridianEl = document.querySelector("#meridian");

const dayEl = document.querySelector("#day");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");

let setter = setInterval(() => {
    let ourTime = new Date()
    let hours = ourTime.getHours();
    // hours = hours % 12 || 12;
    let minutes = ourTime.getMinutes();
    let seconds = ourTime.getSeconds();
    // let miniSeconds = ourTime.getMilliseconds();

    if (hours > 12) {
        hours = '0' + (hours - 12);
        meridianEl.innerHTML = "PM"
    }
    if (hours < 10) {
        hours = '0' + (hours);
    }
    if (minutes < 10) {
        minutes = '0' + (minutes);
    }
    if (seconds < 10) {
        seconds = '0' + (seconds);
    }

    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    // document.querySelector("#miniseconds").innerHTML = miniSeconds;

     
}, 1000)


let calender = setInterval(() => {

    let date = new Date();
    // console.log(date);
    let day = date.getDate();
    // console.log(day);
    let month = date.getMonth() +1;
    // console.log(month);
    let year = date.getFullYear();
    // console.log(year);

    if (day < 10) {
        day = '0' + (day);
    }

    if (month < 10) {
        month = '0' + (month);
    }

    dayEl.innerHTML = day;
    monthEl.innerHTML = month;
    yearEl.innerHTML = year;


}, 1000)