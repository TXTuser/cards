let game = document.getElementById('game')
let imageNames = []
let startgame = document.getElementById('startgame')

for(let i = 0; i<12; i++) {
    imageNames.push('src/' + i + '.jpg')
    imageNames.push('src/' + i + '.jpg')
}
console.log(imageNames);

for(let i = 0; i<imageNames.length; i++) {
    let img = document.createElement('img')
    img.src = imageNames[i]
    img.classList.add('card')
    game.appendChild(img)
    img.onclick = () => {
        console.log(1);

    }
}

let cards = document.getElementsByClassName('card')

startgame.onclick = function() {
    for(let i = 0; i<imageNames.length; i++) {
        cards[i].style.transform = 'scaleX(0)'
        setTimeout(() => {
            cards[i].src = 'src/shirt.jpg'
            cards[i].style.transform = 'scaleX(1)'
        }, 500);
    }
    for(let i = 23; i > 0; i--) {
        let randomNumber = Math.floor(Math.random() * (i + 1))
        let saveImage = imageNames[randomNumber]
        imageNames[randomNumber] = imageNames[i]
        imageNames[i] = saveImage
    }
}

// card.onclick = function() {
//     card.style.transform = 'scaleX(0)'
// }