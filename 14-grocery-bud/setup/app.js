// ****** SELECT ITEMS **********

const groceryForm = document.querySelector('.grocery-form');
const input = document.getElementById('grocery');
const list = document.querySelector('.grocery-list');
const groceryContainer = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit event
groceryForm.addEventListener('submit',addItem);
//clear event
clearBtn.addEventListener('click',clearAll);


// ****** FUNCTIONS **********
/**************************************************************************
- 

 ***************************************************************************/
//function to add item 
function addItem(e){
    //prevent the default event from submitting the grocery item to a server
    e.preventDefault();
    const inputValue = input.value;
    //if value not empty (inputValue !== "") and edit not true (add new grocerry item)
    if (inputValue && !editFlag){
        //Steps in create an grocery item dynamically
        //1.Create an HTML article element
        const groceryItem = document.createElement('article');
        //each article has unique data-id attribute 
        const id = new Date().getTime().toString();
        //2.Add a class to the article element
        groceryItem.classList.add('grocery-item');
        //3.Create an attribute and update its value
        const dataAttr = document.createAttribute('data-id');
        dataAttr.value = id;
        //4.Attach the attribute and its value to the article element
        groceryItem.setAttributeNode(dataAttr);
        //5.Update article's HTML 
        groceryItem.innerHTML = `<p class="title">${inputValue}</p>
                                <div class="btn-container">
                                <!-- edit btn -->
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <!-- delete btn -->
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                                </div>`;
        //6. append the article element to the parent element
        list.appendChild(groceryItem);
        //display alert-sucess class
        displayAlert('Item added to the list!','success')
        //have to use this container instead of grocery-list so the clear button is not hidden
        // grocery-container is hidden by default
        groceryContainer.classList.add('show-container');
        //add to local storage
        //set back to default
        setToDefault();
    }
    //if value is not empty  and edit is true
    else if (inputValue && editFlag) {
        console.log(inputValue);
    }
    else {
        displayAlert('Please input a value','danger');
    }
}

/**************************************************************************
- The global setTimeout() method sets a timer which executes a function or 
    specified piece of code once the timer expires.
    + Timeouts are cancelled using clearTimeout()
    + To call a function repeatedly (e.g., every N milliseconds), consider 
    using setInterval()

 ***************************************************************************/
const alert = document.querySelector('.alert');
//function to send alert
function displayAlert(text,alertClass){
    alert.textContent = text;
    alert.classList.add(`alert-${alertClass}`);
    //remove alert after certain time
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${alertClass}`);
    },2000);
}


/**************************************************************************
- Node.removeChild() method of the Node interface removes a child node from 
    the DOM and returns the removed node.

 ***************************************************************************/
//function to clear all items
function clearAll(){
    //select all the grocery-item element
    const items = document.querySelectorAll('.grocery-item');
    //console.log(items); return a NodeList of all articles with class grocery-item
    //check to see if the list is empty
    if (items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        })
    }
    //hide the container to remove the clear list button
    groceryContainer.classList.remove('show-container');
    //display alert-danger 
    displayAlert('empty list!','danger');
    //set back to default
    //local storage
} 

//function to set back to default
function setToDefault(){
    //clear the input area
    input.value = '';
   

}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

/**************************************************************************


 ***************************************************************************/