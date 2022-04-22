/*
    BRAINSTORM BEFORE CODING
1. Each question <article> have the same class, so need to addEventListner() 
    to all of them using querySelectorAll()
    ----> reality: on the right track but target the wrong parents
2. To target the specific clicked button, use currentTarget
3. Add <classList.add('show-text)> to <.question> to open the text
    when <.plus-icon> button is clicked
    ---->
4. Add <classList.remove('show-text')> to <.question> to close the text
    when <.minus-icon> button is clicked
*/

/*
    MISTAKES
1. Do not forget the "." in querySelector()
2. document.querySelectorAll() only return a Nodelist, not an array, so need to use loop if want to add
    eventListener to each item element
3. 

*/


/* FIRST TRY: Correctly target <.question> but it doesn't work because
        didn't target the element correctly
const questions = document.querySelectorAll('.question');


for (let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click',showText);
}

function showText(event){
    console.log(event.currentTarget);
}

*/


/*  
    METHOD 1: Traversing the DOM
1. Select all button elements
2. Loop over each item to add EventListener
3. Each item when clicked will select all of children elements 
    of that item
4. Then it will trigger an event function that will get me
    the MAIN parent (parent of parent)
    - console.log(e.currentTarget.parentElement)
        ----> target <.question-title> parent
    - console.log(e.currentTarget.parentElement.parentElement)
        ----> target <.question> parent
5. Add <.show-text> to the main parent question (in this case is <.question>)
*/

//1
const btns = document.querySelectorAll('.question-btn');
    //console.log(btns);
    //--> return a Nodelist objects of <button> elements with class <.question-btn>
// //2.
btns.forEach( function(btn){ //in this callback function we could access each of btns items
        //console.log(btn);
        //---> return a list of <button> elements and its siblings
       //3.
    btn.addEventListener('click', function(e){ //in this callback function we want to access to the event object
        // addEventListner to each <button> item with class <.question-btn>
        //4. 
    const question = e.currentTarget.parentElement.parentElement;
        // console.log(question);
         // ---> return the <article> with class .question that was clicked
        const questions = document.querySelectorAll('.question');
        questions.forEach(function(item){
          if(item !== question){
              item.classList.remove('show-text');
          }
        })
        question.classList.toggle('show-text'); //5.
   })
})


/*
    METHOD 2: Use selectors inside the element
1. Select all the main parent elements
2. Loop over each parent element to gain access to each children element 
3. Each children element will give you access to all of their children
4. Then select the target children element (<btn>)
5. Add EventListener() to the children element 
6. Loop over the parent elements to check if current clicked children is 
    contain <show-text>
7. Remove the <show-text> if the children is not currently clicked
8. Add <.show-text> to the parent when clicked (<.question>)
*/

// //1
// const questions = document.querySelectorAll('.question');
// /*
//     console.log(questions)
//     - return a static (not live) NodeList objects of <article> elements with class <.question>
//     - static NodeList means any changes in the DOM does not affect the content of the collection.
//     - NodeList is not an Array, it is possible to iterate over it with forEach(). 
//     - It can also be converted to a real Array using Array.from()
// */
// //2
// questions.forEach(function(question){
//    /*
//     forEach() method executes a provided callbackFn function once for each array element.

//     4. console.log(question);
//      - return a list of <article>.question elements <.question>
    
//      - <questions> target the article
//      - <question> target an element within the article
//     */
//     question.addEventListener('click', function(){
//         /*
//         - need to loop over all of the <article> questions to check if there is a question
//             that is currently open
//             --> loop over <.questions> parent elements and check if each item is equal to the clicked <question>
//         - if they are not equal then remove the <show-text> off item list
//         */
//         questions.forEach(function(item){
//             //console.log(item); 
//                 //6. item = question since it is looping over the same parent <.question> article
//             if (item!== question){
//                 item.classList.remove('show-text'); //7
//             }
//         })
//         question.classList.toggle('show-text');//8.
//     })
// })

