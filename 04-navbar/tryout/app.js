
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    navToggle.classList.toggle('show-toggle');
    links.classList.toggle('show-links');
       
})
