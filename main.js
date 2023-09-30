let game = document.getElementById("game");
let imageNames = [];
let startgame = document.getElementById("startgame");
let cards = document.getElementsByClassName("card");
let openCards = [];
let attempts = document.getElementById("attempts");
let pairs = document.getElementById("pairs");
let title = document.getElementById("title");
let a = 0;
let points = 0;

for (let i = 0; i < 12; i++) {
  imageNames.push("src/" + i + ".jpg");
  imageNames.push("src/" + i + ".jpg");
}
// .style.pointerEvents = "none";
console.log(imageNames);

for (let i = 0; i < imageNames.length; i++) {
  let img = document.createElement("img");
  img.src = imageNames[i];
  img.classList.add("card");
  game.appendChild(img);
  img.onclick = () => {
    img.style.pointerEvents = "none";
    img.style.transform = "scaleX(0)";
    setTimeout(() => {
      img.src = imageNames[i];
      img.style.transform = "scaleX(1)";
      openCards.push(img);
      if (openCards.length == 2) {
        a++;
        attempts.innerHTML = "Вы использовали " + a + " попыток";
        if (openCards[0].src == openCards[1].src) {
          points++;
          console.log("yes");
          openCards[0].classList.add("correct");
          openCards[1].classList.add("correct");
          openCards = [];
          if (points === 12) {
            title.innerHTML = "УРА, ПОБЕДА!!!!!!!!";
          }
        } else {
          console.log("no");
          for (let i = 0; i < 24; i++) {
            cards[i].style.pointerEvents = "none";
          }
          setTimeout(() => {
            openCards[0].style.transform = "scaleX(0)";
            openCards[1].style.transform = "scaleX(0)";
            setTimeout(() => {
              openCards[0].src = "src/shirt.jpg";
              openCards[1].src = "src/shirt.jpg";
              openCards[0].style.transform = "scaleX(1)";
              openCards[1].style.transform = "scaleX(1)";
              setTimeout(() => {
                openCards = [];
                for (let i = 0; i < 24; i++) {
                  cards[i].style.pointerEvents = "auto";
                }
              }, 500);
            }, 500);
          }, 1000);
        }
      }
    }, 500);
  };
}

startgame.onclick = function () {
  for (let i = 0; i < imageNames.length; i++) {
    cards[i].style.transform = "scaleX(0)";
    setTimeout(() => {
      cards[i].src = "src/shirt.jpg";
      cards[i].style.transform = "scaleX(1)";
    }, 500);
  }

  for (let i = 23; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * (i + 1));
    let saveImage = imageNames[randomNumber];
    imageNames[randomNumber] = imageNames[i];
    imageNames[i] = saveImage;
  }
};
