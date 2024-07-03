let maximum = parseInt(prompt("Enter the maximun  number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)
let attempts = 1;
let guess = (prompt("Enter your first guess! (Type 'q' to quit)"));
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        break;
    }
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = (prompt("Too high! Enter a new guess:"));
        attempts++;
    }
    else if (guess < targetNum) {
        guess = (prompt("Too low! Enter a new guess:"));
        attempts++;
    }
    else{
        guess = prompt("Invalid guess. Please enter a valid number or 'q' to quit");

    }

}
if (guess === 'q') {
    console.log("OK, YOU QUIT!!")
}
else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it in ${attempts} attempts!`)
}