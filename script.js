const sayGreetings = () => {
    const word = 'hello world';
    const wordArr = nWord.split('');
    let index = 0;
    let intervalId;

    intervalId = setInterval(() => {
        if (index < nWord.length) {
            console.log(nWordArr[index]);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

sayGreetings();