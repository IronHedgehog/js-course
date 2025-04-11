function lifeInWeeks(age) {
  const life = Math.floor(60 - age);
  const days = Math.floor(365 * life);
  const weeks = Math.floor(life * 52);
  const months = Math.floor(life * 12);

  console.log(
    `You have ${days} days, ${weeks} weeks, and ${months} months left.`
  );
}

lifeInWeeks(25);
