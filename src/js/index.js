let min = 1,
  max = 10,
  winningNumber = 2,
  guessesleft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", guessBtnFunction);
function guessBtnFunction() {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
    setTimeout(clearMsg, 3000);
  }
  if (guess === winningNumber) {
    gameOver(true, `${guess} is correct,You WIN !`);
  } else {
    guessesleft -= 1;
    if (guessesleft === 0) {
      gameOver(false, `Game Over sucker!,you are out of guesses`);
    } else {
      setMessage(
        `${guess} is incorrect!,you have ${guessesleft} guesses left.`,
        "red"
      );
      guessInput.value = "";
    }
  }
}
