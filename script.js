

setInterval(displayTime, 1000);


function displayTime() {
    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();    
    let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];     
    let today = weekDay[timeNow.getDay()];    
    let months = timeNow.toLocaleString('default',{month:'long'});     
    let year = timeNow.getFullYear();
    let period = 'am';
    
    if(hoursOfDay > 12){
        hoursOfDay -= 12; 
        period = 'PM';}

    if (hoursOfDay===0){
        hoursOfDay =12;
        period= 'AM'
    }
    
    hoursOfDay = hoursOfDay < 10 ? '0' + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds= seconds < 10 ? '0' + seconds : seconds;

    let time = hoursOfDay + ':' + minutes + ':' + seconds + period;
    document.getElementById('Clock').innerHTML = time + " " + today + " " + months + ", " + year;
}
displayTime();


// Permit me to declare period and hourOfDay again even though we've declared them before.
// let period = 'am';
// let hourOfDay = timeNow.getHours();

// Write  a condition that set our period to AM or PM

// this block checks whether the hour is greater than 12 and if that is true, 12 is subtracted from the hour. 
// The result is then assigned back to ```hour``` and the period is set to PM. 12 is subtracted since 
// we're building a 12-hour time clock




    /*This block checks whether the hour is equal to 0. If that is true, we assign 12 to the 
    hourOfDay variable and the period is set to AM.*/

