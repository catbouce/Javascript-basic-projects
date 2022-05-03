// ****** SELECT ITEMS **********
const groceryForm = document.querySelector('.grocery-form');
const input = document.getElementById('grocery');
const groceryContainer = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let edit = false;
let inputFlag = "";
// ****** EVENT LISTENERS **********
//submit event
groceryForm.addEventListener('submit',addItem);
clearBtn.addEventListener('click',clearAll);
//clear event

// ****** FUNCTIONS **********
//function to add item 
function addItem(e){
    e.preventDefault();
    let inputValue = input.value;
    //if edit is false and value not empty (add new grocerry item)
    if (inputValue && !edit){
        // add a .grocery-item article dynamically
        const groceryItem = document.createElement('article');
        const id = new Date().getTime().toString();
        //each article has unique data-id attribute 
        groceryItem.classList.add('grocery-item');
        const dataAttr = document.createAttribute('data-id');
        dataAttr.value = id;
        groceryItem.setAttributeNode(dataAttr);
        console.log(dataAttr);
        //update article's HTML to reflect the new added element
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
        //append the new element to the list
        groceryContainer.appendChild(groceryItem);
        //display alert, .sucess class
        //.show-container as it is hidden by default
        groceryContainer.classList.add('show-container');
        //add to local storage
        //set back to default
    }
    //if edit is true and value is not empty 
    else if (inputValue && edit) {
        console.log(inputValue);
    }
    else {
        displayAlert('please input value',danger);
    }
}
//function to send alert
function displayAlert(text){
    //alert will display some text if there is alert class

    //remove alert after certain time

}

const allGroceryItem = document.querySelectorAll('.grocery-item');
//function to clear all items
function clearAll(){
    //remove all the list item from the grocery list
    allGroceryItem.forEach(function(item){
        console.log(item);
    })
    //hide the container/clear list button
    //display alert , .danger or sucess class
} 
//function to set back to default
function setToDefault(){
    edit = false;
    inputFlag = "";
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
