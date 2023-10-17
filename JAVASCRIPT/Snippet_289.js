const MONTHS = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
]
const WEEKDAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]
let date = new Date();
let month = MONTHS[date.getMonth()];
let today = date.getDate();
let theFirstOfTheMonth = new Date(date.getFullYear(), date.getMonth(), 1);
let day = date.getDay();
let cal = [], week = ``, days = ``;
for (let i = 1; i <= 35; i++) { cal.push(new Date(date.getFullYear(), date.getMonth(), i)) }
for (let i = 0; i < WEEKDAYS.length; i++) { week += `<li>${WEEKDAYS[i]}</li>` }
cal.forEach((d) => { d.getDate() == today ? days += `<li class="active day">${d.getDate()}</li>`: days += `<li class="day">${d.getDate()}</li>` })
let calander = `
<div style="width: 60%; margin: 5% auto;">
    <div class="month">${month + " " + date.getFullYear()}</div>
    <ul class="weekdays">${week}</ul>
    <ul class="days">${days}</ul>
</div>
`
document.body.innerHTML += calander
let dayz = document.querySelectorAll(".day");
dayz.forEach((d) => {
    d.addEventListener("click", () => { 
        dayz.forEach((e) => {e.classList.remove("active")})
        d.classList.add("active");
    })
})