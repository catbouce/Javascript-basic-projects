// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

/*
BIG MISTAKE: updated the app.js in setup folder instead of final folder
----> webpage did not load properly
----> wasted 15min trying to figure out why it didn't work
*/


const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");


modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
       
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});