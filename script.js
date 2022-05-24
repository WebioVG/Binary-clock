// Declare variables //
let i, date, hours, minutes, seconds;
let hoursValues = [20, 10, 8, 4, 2, 1];
let minutesValues = [40, 20, 10, 8, 4, 2, 1];
let secondsValues = [40, 20, 10, 8, 4, 2, 1];

// Get HTML elements //
let dotsHours = document.getElementsByClassName('hoursSelector');
let dotsMinutes = document.getElementsByClassName('minutesSelector');
let dotsSeconds = document.getElementsByClassName('secondsSelector');
let time_h = document.getElementById('time_h');
let time_m = document.getElementById('time_m');
let time_s = document.getElementById('time_s');

// Main //

// Get hours, minutes and seconds dynamically
i = setInterval(function() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    
    display(hours, minutes, seconds);

    time_h.textContent = `${hours}h`;
    time_m.textContent = `${minutes}min`;
    time_s.textContent = `${seconds}s`;
    
}, 1000);

function display(hours, minutes, seconds) {   
    let countH = -1, countM = -1, countS = -1;     

    for (let h of hoursValues) {
        countH++;
        if (hours >= h && countH < hoursValues.length) {
            dotsHours[countH].classList.add('activeOn');
            dotsHours[countH].classList.remove('bg-[#fff]');
            
            hours -= h;
        } else {
            dotsHours[countH].classList.remove('activeOn');
            dotsHours[countH].classList.add('bg-[#fff]');
        }
    }

    for (let m of minutesValues) {
        countM++;

        if (minutes >= m && countM < minutesValues.length) {
            dotsMinutes[countM].classList.add('activeOn');
            dotsMinutes[countM].classList.remove('bg-[#fff]');

            minutes -= m;
        } else {
            dotsMinutes[countM].classList.remove('activeOn');
            dotsMinutes[countM].classList.add('bg-[#fff]');
        }
    }

    for (let s of secondsValues) {
        countS++;

        if (seconds >= s && countS < secondsValues.length) {
            dotsSeconds[countS].classList.add('activeOn');
            dotsSeconds[countS].classList.remove('bg-[#fff]');

            seconds -= s;
        } else {
            dotsSeconds[countS].classList.remove('activeOn');
            dotsSeconds[countS].classList.add('bg-[#fff]');
        }
    }
}