const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    text = "#"
    // get random number between 0 - 3
    for (let i = 0; i < 6; i++) {
        const randomNumber = getRandomNumber();
        text += hex[randomNumber]
    }
    
    console.log(text)

    document.body.style.backgroundColor = text;
    color.textContent = text;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}