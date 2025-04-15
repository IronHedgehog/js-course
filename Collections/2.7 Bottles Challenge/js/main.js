function beerSong(countOfBottles) {
  while (countOfBottles >= 0) {
    console.log(`${countOfBottles} bottles of beer on the wall, ${countOfBottles} bottles of beer.
Take one down and pass it around, ${
      countOfBottles - 1
    } bottles of beer on the wall.`);
    countOfBottles--;
  }
}

beerSong(100);
