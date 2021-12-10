// Set the date we're counting down to
var countDownDate = new Date('2020-09-10T11:00:00.000-08:00');

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if (days > 0) {
        document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (hours > 0) {
        document.getElementById("countdown-timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
        document.getElementById("countdown-timer").innerHTML = `${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown-timer").innerHTML = `${seconds}s`;
    }

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").style.display = "none";
    }
}, 1000);
