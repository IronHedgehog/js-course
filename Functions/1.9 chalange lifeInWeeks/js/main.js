function lifeInWeeks(age) {
  const life = Math.floor(60 - age);
  const days = Math.floor(365 * life);
  const weeks = Math.floor(days / 7);
  const month = Math.floor(days / 30);

  console.log(
    "You have " + days + " days ",
    weeks + " weeks, and " + month + " months left."
  );
}

lifeInWeeks(25);
