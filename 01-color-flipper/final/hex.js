const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexCode = "#"; //cannot use const hexCode --> TypeError
    for (let i = 0; i < 6; i++){
        hexCode += hex[randomNum()]; //running function inside []
    }
    document.body.style.backgroundColor = hexCode;
    color.textContent = hexCode;
})

function randomNum(){
    return Math.floor(Math.random() * hex.length);
}