const guestList = ["James", "Jack", "Lara"];

const guestName = prompt("What is you'r name?");

function checkGuest(guest) {
  let message = "";
  if (guestList.includes(guest)) {
    message = "Welcome";
  } else {
    message = "next time";
  }
  return message;
}

alert(checkGuest(guestName));
