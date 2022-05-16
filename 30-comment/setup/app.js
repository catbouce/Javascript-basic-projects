const form = document.querySelector('.form');
const leftInput = document.getElementById('left-input');
const rightInput = document.getElementById('right-input');
const alert = document.querySelector('.alert');
const resetBtn = document.querySelector('.reset');
const runBtn = document.querySelector('.run');

runBtn.addEventListener('click', function(e){
  e.preventDefault();
  add(leftInput.value);
})

resetBtn.addEventListener('click',function(){
    leftInput.textContent = "";
})

function add(str){
    let newArr = [];

    str.split('\n').forEach(function(word){
        if (word.includes('{')){
            let border = addBorder();
            newArr.push(`${word}\r\n/*${border}*/`);
        }
        else if (word.includes(';')){
           newArr.push(`/* ${word}*/`);
        }
        else {
            newArr.push(word);
        }
    })
    let finalStr = newArr.join("\r\n");
    rightInput.textContent = `${finalStr}`;
    copyToClipBoard();
}

function addBorder(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexCode = "#"; 
    
    for (let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random()*hex.length);
        hexCode += hex[randomNum]; 
    }
    
    return `border: 1px dashed ${hexCode};`
}

function copyToClipBoard() {
    rightInput.select();
    document.execCommand('copy');
    displayAlert('copied to clipboard!','success');
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    
    setTimeout(function () {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`);
    }, 5000);
  }