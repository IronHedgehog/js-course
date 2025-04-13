const guests = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(guests) {
  const random = Math.floor(Math.random() * guests.length);
  return guests[random] + " is going to buy lunch today!";
}

alert(whosPaying(guests));
