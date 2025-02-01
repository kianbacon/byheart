let countDownDate;
let timesClicked = 0;

let countdown = function() {

	// Get the current date and time
	let now = new Date().getTime();

	// Find the distance between now and the count down date
	let diff = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((diff % (1000 * 60)) / 1000);

	// Display the result in timer div
	document.getElementById("timer").innerHTML = hours + "h "
		+ minutes + "m " + seconds + "s ";
	// If the count down is finished, write some text
	if (now >= countDownDate) {
   	clearInterval(countdown);
	document.getElementsByClassName("flash_body")[0].style.display = "flex";
   	document.getElementById("timer").innerHTML = "Time to start studying again!";
  }
}

function addClick() {
	timesClicked = timesClicked + 1;
}

function clearClick() {
	timesClicked = 0;
}

function startTimer() {
	countDownDate = new Date().getTime() + 150000 * Math.pow(2, (timesClicked));
	setInterval(countdown, 1000);
	clearInterval(countdown);
}

function blackout() {
	document.getElementsByClassName("flash_body")[0].style.display = "none";
}
