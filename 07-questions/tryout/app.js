const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
       questions.forEach(function(question){
           (e.currentTarget.parentElement.parentElement === question)
            ? (question.classList.toggle('show-text'))
            : question.classList.remove('show-text');
       })   
    })
})