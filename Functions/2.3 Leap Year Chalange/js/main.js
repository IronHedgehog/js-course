const testValue = prompt("Write year for the test");

function testLeapYear(year) {
  let message = "";

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    message = "Leap year.";
  } else {
    message = "Not leap year.";
  }

  return message;
}

alert(testLeapYear(testValue));
