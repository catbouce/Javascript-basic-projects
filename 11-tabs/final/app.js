/*
    -  Event.target() identifies the element on which the event occurred 
    and which may be its descendant.
        + as oppposed to event.currentTarget(),which refers to the element
         to which the event handler has been attached
    - IF or BOOLEAN: JavaScript uses type coercion in Boolean contexts
        + Type coercion is the automatic or implicit conversion of values 
        from one data type to another (such as strings to numbers). 
        + Type conversion is similar to type coercion because they both 
        convert values from one data type to another with one key difference — 
        type coercion is implicit whereas type conversion can be either 
        implicit or explicit
            - truthy: if (true), if ({}), if ([]), if (42), if ("0"),if ("false"),
                        if (new Date()), if (-42), if (12n), if (Infinity), if (-Infinity)
            - falsy: if (false), if (null), if (undefined), if (0), if (-0),if (0n), if (NaN), if ("")
        + DO NOT confuse the PRIMITIVE Boolean values true and false with the true and false 
        values of the Boolean object. Any object of which the value is not undefined or null, including 
        a Boolean object whose value is false, evaluates to true when passed to a conditional statement
            - var x = new Boolean(false);
                  if (x) { //will execute as evaluate to TRUE}
            - var x = false;
                  if (x) {//will not execute as evaluate to FALSE}
            - if ([] == false) {//will execute}
                --> JavaScript engine first calls [].toString(). 
                That results in "", and that is what's actually 
                compared to false. In other words, [] == false is 
                equivalent to "" == false. And "" is falsy
        + Undefined vs Null:
            + type: underfined vs object (or a primitive value to be precise)
            + comparing: undefined == null (true, as compared values only)
                         undefined === null (false, as compared values + type)
*/

const tabBtns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const content = document.querySelectorAll('.content');

about.addEventListener('click',function(e){
    //console.log(e.target); //---> return the element where it was clicked
    
    //if the event element has an id dataset, extract it
    const id = e.target.dataset.id;

    //this returns TypeError if clicked anywhere else beside tab buttons
    // tabBtns.forEach(function(btn){
    //     content.forEach(function(contentItem){
    //         contentItem.classList.remove('active');
    //         document.getElementById(id).classList.add('active');
    //     })
    //     btn.classList.remove('active');
    //     e.target.classList.add('active');
    // })

    //only execute if id is not null or underfined
    if (id){
        tabBtns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        //hide other article content
        content.forEach(function(contentItem){
            contentItem.classList.remove('active');
        })
        document.getElementById(id).classList.add('active');
    }
})