const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const heading = document.querySelector("h1");
const throwButton = document.querySelector(".throw-button");

throwButton.addEventListener("click", diceeGame);

function diceeGame() {
  const randomNumber1 = Math.floor(Math.random() * 6 + 1);
  const randomNumber2 = Math.floor(Math.random() * 6 + 1);

  img1.src = `./images/dice${randomNumber1}.png`;
  img2.src = `./images/dice${randomNumber2}.png`;

  if (randomNumber1 > randomNumber2) {
    heading.textContent = "first player win";
  } else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Second player win";
  } else {
    heading.textContent = "Draw";
  }
}
