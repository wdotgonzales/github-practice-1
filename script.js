const sayGreetings = () => {
    const nWord = 'hello world';
    let nWordArr = nWord.split('');
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