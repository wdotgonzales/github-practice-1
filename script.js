const sayGreetings = () => {
    let countdown = 15;

    let intervalId = setInterval(() => {
        countdown--;
        console.log(countdown + 1); // Log the countdown value
        console.log("I'm still counting down");

        if (countdown === 0) {
            console.logZ("I'm down counting! lol")
            console.log('Happy New Year!!! :)')
            clearInterval(intervalId); // Stop the interval when countdown is 1
        }
    }, 1000);
}

sayGreetings(); // Call the function to start the countdown

/* This code is now in Master branch */