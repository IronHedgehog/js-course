// BMI - індекс маси тіла

function bmiCalculator(weight, height) {
  const bmi = Math.round(weight / Math.pow(height, 2));
  return bmi;
}

var bmi = bmiCalculator(80, 1.86);

console.log(bmi);
