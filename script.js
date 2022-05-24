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

// Function which displays the current time thanks to the class
function display(hours, minutes, seconds) {   
    for (let h in hoursValues) {
        if (hours >= hoursValues[h] && h < hoursValues.length) {
            dotsHours[h].classList.add('activeOn');
            dotsHours[h].classList.remove('bg-[#fff]');
            
            hours -= hoursValues[h];
        } else {
            dotsHours[h].classList.remove('activeOn');
            dotsHours[h].classList.add('bg-[#fff]');
        }
    }

    for (let m in minutesValues) {
        if (minutes >= minutesValues[m] && m < minutesValues.length) {
            dotsMinutes[m].classList.add('activeOn');
            dotsMinutes[m].classList.remove('bg-[#fff]');

            minutes -= minutesValues[m];
        } else {
            dotsMinutes[m].classList.remove('activeOn');
            dotsMinutes[m].classList.add('bg-[#fff]');
        }
    }

    for (let s in secondsValues) {
        if (seconds >= secondsValues[s] && s < secondsValues.length) {
            dotsSeconds[s].classList.add('activeOn');
            dotsSeconds[s].classList.remove('bg-[#fff]');

            seconds -= secondsValues[s];
        } else {
            dotsSeconds[s].classList.remove('activeOn');
            dotsSeconds[s].classList.add('bg-[#fff]');
        }
    }
}