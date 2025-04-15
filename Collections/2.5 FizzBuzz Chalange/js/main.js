const array = [];
let counter = 1;

function fizBuzGame() {
  while (counter <= 100) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      array.push("FizzBuzz");
    } else if (counter % 5 === 0) {
      array.push("Buzz");
    } else if (counter % 3 === 0) {
      array.push("Fizz");
    } else {
      array.push(counter);
    }
    counter++;
  }
  console.log(array);
}

fizBuzGame();
