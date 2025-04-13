// BMI - індекс маси тіла

// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
// BMI > 24.9, the output should be "Your BMI is <bmi>, so you are overweight."

function bmiCalculator(weight, height) {
  const bmi = Math.round(weight / Math.pow(height, 2));
  let message = "";
  if (bmi < 18.5) {
    message = "Your BMI is " + bmi + ", so you are underweight.";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    message = "Your BMI is " + bmi + ", so you have a normal weight.";
  }
  if (bmi > 24.9) {
    message = "Your BMI is " + bmi + ", so you are overweight.";
  }
  return message;
}

var bmi = bmiCalculator(80, 1.85);

console.log(bmi);
