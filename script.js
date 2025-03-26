// Initialize variables
let countdownInterval;
let previousSecond = null; // Track the previous second

// Function to update countdown
function updateCountdown() {
    const concertDate = new Date("2025-10-24T19:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = concertDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Check if the seconds have changed, and play the fart sound if they have
        if (previousSecond !== seconds) {
            playFartSound(); // Play fart sound when seconds change
            previousSecond = seconds; // Update previousSecond to the current second
        }
    } else {
        document.getElementById("countdown").innerHTML = "The concert has started!";
        clearInterval(countdownInterval);
    }
}

// Function to play fart sound
function playFartSound() {
    const fartSound = document.getElementById("fart-sound");
    fartSound.play();
}

// Function to start the countdown and fart sound when button is clicked
function startCountdown() {
    // Start the countdown every second
    countdownInterval = setInterval(() => {
        updateCountdown();
    }, 1000);

    // Hide the "Show Fartdown" button after it's clicked
    document.getElementById("startButton").style.display = "none";

    // Delay the showing of h2 element until the countdown updates for the first time
    setTimeout(() => {
        document.getElementById("concert-info").style.display = "block";
    }, 1000); // Wait for 1 second after the countdown starts
}

// Add event listener to the button
document.getElementById("startButton").addEventListener("click", startCountdown);
