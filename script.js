// =============================
// Countdown Timer
// =============================

const targetDate = new Date("2026-08-07T13:00:00");

const timer = document.getElementById("timer");

function updateTimer(){

    const now = new Date();

    const difference = targetDate - now;

    if(difference <= 0){

        timer.innerHTML = "<h2>🎉 Қош келдіңіздер!</h2>";

        return;

    }

    const days = Math.floor(difference / (1000*60*60*24));

    const hours = Math.floor((difference%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((difference%(1000*60*60))/(1000*60));

    const seconds = Math.floor((difference%(1000*60))/1000);

    timer.innerHTML = `

    <div class="time-box">

        <span>${days}</span>

        <small>КҮН</small>

    </div>

    <div class="time-box">

        <span>${hours}</span>

        <small>САҒ</small>

    </div>

    <div class="time-box">

        <span>${minutes}</span>

        <small>МИН</small>

    </div>

    <div class="time-box">

        <span>${seconds}</span>

        <small>СЕК</small>

    </div>

    `;

}

updateTimer();

setInterval(updateTimer,1000);


// =============================
// Scroll Animation
// =============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

document.querySelectorAll("section,.card,footer").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// =============================
// Smooth Hero Button
// =============================

document.querySelector(".btn").addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector("#invitation").scrollIntoView({

behavior:"smooth"

});

});
