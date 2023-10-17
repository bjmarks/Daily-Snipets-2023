let app = document.getElementById("app");
const Calander = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
let month = (d) => d.toLocaleString('default', {month: 'long'}),
checkDate = (d) => d.toLocaleString("default", {month: "long"}) + " " + d.getDate(),
year = (d) => d.getFullYear(),
today = date.getDate(),
day = date.getDay(),
week = ``, 
cal = [], 
days = ``,
offset = 0,
dayz,
dayLetter = (d) => Calander[d].slice(0,1).toUpperCase();
for(let i = 0; i < 7; i++) {week += `<li>${dayLetter(i)}</li>`}
let calander = `<div class="calander">
                    <div class="month">
                        <span id="monthline"></span>
                        <span>
                            <span id="back">&lt;</span>
                            <span id="forward">&gt;</span>
                        </span>
                    </div>
                    <ul class="weekdays">${week}</ul>
                    <ul class="days" id="dayline"></ul>
                </div>`;
app.innerHTML = calander;
let dayline = document.getElementById("dayline");
let monthline = document.getElementById("monthline");
let forward = document.getElementById("forward");
let back = document.getElementById("back");
let s = (o) => {
    cal = [];
    days = ``;
    for(let i = (today - day + o); i <= (today - day + o + 6); i++) {
        cal.push(new Date(date.getFullYear(), date.getMonth(), i))
    }
    cal.forEach((d) => {
        monthline.innerHTML = month(d) + " " + year(d);
        checkDate(d) == checkDate(date) ? days += `<li class="active day">${d.getDate()}</li>`: days += `<li class="day">${d.getDate()}</li>`
    })
    dayline.innerHTML = days;
};
back.classList.add("unable");
s(0);
daya()
forward.addEventListener("click", () => {
    offset += 7;
    s(offset);
    daya();
    back.classList.remove("unable");
})
back.addEventListener("click", () => {
    if(offset <= 7) { 
        offset = 0
        back.classList.add("unable");
    }
    else { 
        offset -= 7 
    };
    s(offset);
    daya()
})
function daya() {
    dayz = document.querySelectorAll(".day");
    dayz.forEach((d) => {
        d.addEventListener("click", () => { 
            dayz.forEach((e) => {e.classList.remove("active")})
            d.classList.add("active");
        })
    })
}