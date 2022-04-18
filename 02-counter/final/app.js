// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

/* 
- use .querySelectorAll() to select all the .btn
- console.log(btns) will get back a Nodelist(3)
- Nodelist is like an array, so we can use forEach() method
- call function(btn) will give access to all the buttons
    that have .btn class
*/
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    /*
    - addEventListener to each of the button using forEach() loop
    - console.log(e.currentTarget) will give the button that 
        was clicked    
    -.classList will give the list of all the classes this
        currentTarget element has
    */
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    //change color of counter display based on value
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});


/* MY CODE
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');
const valueDisplay = document.getElementById('value');

//set initial count
let value = 0;
decreaseBtn.addEventListener('click', function(){
    value -= 1;
    valueDisplay.textContent = value;
})
increaseBtn.addEventListener('click', function(){
    value += 1;
    valueDisplay.textContent = value;
})
resetBtn.addEventListener('click', function(){
    value = 0;
    valueDisplay.textContent = value;
})
*/