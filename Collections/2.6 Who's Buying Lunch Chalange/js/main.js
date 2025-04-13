const array = [];
let counter = 0;

function fizBuzGame() {
  counter++;

  if (counter % 3 === 0 && counter % 5 === 0) {
    array.push("FizzBuzz");
  } else if (counter % 5 === 0) {
    array.push("Buzz");
  } else if (counter % 3 === 0) {
    array.push("Fizz");
  } else {
    array.push(counter);
  }
}
while (counter < 100) {
  fizBuzGame();
  console.log(array);
}
