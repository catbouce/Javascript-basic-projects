const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const backgroundColor = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number between 0-3
    //const randomNum = randomNum() will run into reference error
    const randomNum = Math.floor(Math.random() * colors.length);
    console.log(randomNum);
    document.body.style.backgroundColor = colors[randomNum];
    backgroundColor.textContent = colors[randomNum];
})


    /*
    Can obmit {} () and "return" keyword in "Arrow function expressions =>"" if
    function doesn't have multiple arguments or no arguments
        (a, b) => {
        let chuck = 42;
        return a + b + chuck;
        }

    Math.floor() returns the largest integer less than or equal to a given number.
        Math.floor(3.95)) ---> expected output: 3
        Math.floor(3.05)) ---> expected output: 3   
    Math.random: return a floating-point, pseudo-random number between 
        0 (inclusive) and 1 (exclusive)
    return Math.floor(Math.random() * colors.length) will generate random
        number between 0-3

    Math.random() does not provide cryptographically secure random numbers. 
    Do not use them for anything related to security. Use the Web Crypto API 
    instead, and more precisely the window.crypto.getRandomValues() method.
    */


    /* ORIGINAL CODE
    const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");

    btn.addEventListener("click", function () {
        const randomNumber = getRandomNumber();
        // console.log(randomNumber);

        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    });

    function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    }
     */