// ****** SELECT ITEMS **********
const groceryForm = document.querySelector('.grocery-form');
const input = document.getElementById('grocery');
const groceryContainer = document.querySelector('.grocery-container');

// edit option
let edit = false;

// ****** EVENT LISTENERS **********
//submit event
groceryForm.addEventListener('submit',addItem);

//clear event

// ****** FUNCTIONS **********
//function to add item 
function addItem(e){
    e.preventDefault();
    let inputValue = input.value;
    // if edit is false and value not empty (add new grocerry item)
    if (inputValue && !edit){
        // add a .grocery-item article dynamically
        const groceryItem = document.createElement('grocery-item');
        const id = new Date().getDay().toString();
        //each article has unique data-id attribute 
        
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
    
//function to clear all items
    //remove all the list item from the grocery list
    //hide the container/clear list button
    //display alert , .danger or sucess class
    
//function to set back to default

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
