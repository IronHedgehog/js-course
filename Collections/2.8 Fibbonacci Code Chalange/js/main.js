function fibonacciGenerator(n) {
  const output = [];
  let counter = 0;
  while (counter < n) {
    if (counter === 0) {
      output.push(0);
    } else if (counter === 1) {
      output.push(1);
    } else {
      const sum = output[counter - 1] + output[counter - 2];
      output.push(sum);
    }
    counter++;
  }
  return output;
}

console.log(fibonacciGenerator(10));
