
    const readline = require('redline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let computerGuess=Math.floor(Math.random()*100);
    let asyncReadLine = function(){
        readline.question('Guess the number (0-100): ',number =>
        {

        });
    }asyncReadLine();

