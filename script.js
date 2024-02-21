const sayGreetings = () => {
    let countdown = 10;

    let intervalId = setInterval(() => {
        countdown--;
        console.log(countdown + 1); // Log the countdown value

        if (countdown === 0) {
            console.log('Happy New Year!!! :)')
            clearInterval(intervalId); // Stop the interval when countdown is 1
        }
    }, 1000);
}

sayGreetings(); // Call the function to start the countdown
