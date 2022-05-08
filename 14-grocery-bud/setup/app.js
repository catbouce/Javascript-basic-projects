/**************************************************************************
------------MISTAKES-------------------
- if an element is populated dynamically, the EventListener needed to be added
    when the element is created

 ***************************************************************************/

// ****** SELECT ITEMS **********

const groceryForm = document.querySelector('.grocery-form');
const input = document.getElementById('grocery');
const list = document.querySelector('.grocery-list');
const groceryContainer = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-btn');
const submitBtn = document.querySelector('.submit-btn');

// edit option
let editFlag = false;
let editID = "";
let editElement;

// ****** EVENT LISTENERS **********
//submit event
groceryForm.addEventListener('submit',addItem);
//clear event
clearBtn.addEventListener('click',clearAll);
//load items from localStorage
window.addEventListener('DOMContentLoaded',displayList);

// ****** FUNCTIONS **********
/**************************************************************************
- 

 ***************************************************************************/
//function to add item 
function addItem(e){
    //prevent the default event from submitting the grocery item to a server
    e.preventDefault();
    const value = input.value;
    //each article has unique data-id attribute 
    const id = new Date().getTime().toString();

    //if value not empty (value !== "") and edit not true (add new grocerry item)
    if (value && !editFlag){
        createItem(id,value);
        //display alert-sucess class
        displayAlert('Item added to the list!','success')
        //have to use this container instead of grocery-list so the clear button is not hidden
        // grocery-container is hidden by default
        groceryContainer.classList.add('show-container');
        //add to local storage
        addToLocalStorage(id,value);
        //set back to default
        setToDefault();
    }
    //if value is not empty  and edit is true
    else if (value && editFlag) {
        editElement.innerHTML = value;
        console.log(editID);
        editLocalStorage(editID,value);
        console.log(editID);
        displayAlert('Item editted!','success');
        setToDefault();
        
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
    //IMPORTANT: the clear-btn get delayed before disapearing with other items
    groceryContainer.classList.remove('show-container');
    //display alert-danger 
    displayAlert('empty list!','danger');
     //clear local storage that has a key called 'list'
    localStorage.removeItem('list');
    //set back to default
    
} 

//function to delete an item 
/*
(1). Select delete btn, add event listener to each btn
 //this approach doesn't work because we added the button dynamically
 //eventListener is added when element is created
2. When clicked, trigger delete function
3. Get the parent element and then remove its child (target deleted item)
(3). On each event, grab the ID
(4). Grab the parent element and remove the child based on the id
    //3 & 4 are not applicable
4. Remove the clear-btn if there is no item left
5. Display alert
*/
function deleteItem(e){
    //get the parent element of child item to remove it
     list.removeChild(e.currentTarget.parentElement.parentElement);
    //remove the clear-btn and show-container class
     if (list.children.length === 0){
        groceryContainer.classList.remove('show-container');
     }
     //delete item in localStorage
     let itemsID = e.currentTarget.parentElement.parentElement.dataset.id;
     removeFromLocalStorage(itemsID);
     setToDefault();
}

//function to edit an item
/*
    (1). Select edit btn, add event listener to each btn
        //this method doesn't work because we added the button dynamically
    1. Select the parent container and listen to which child element is clicked
    2. When clicked, trigger edit function
    3. On each event, grab the ID and title
    3. Display the title in the input value, change submit button to edit btn
    4. Get the new value from user and update the title based on the ID
    5. Display alert and get back to default
*/
function editItem(e){
    //get the item value (.title)
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //assign the value to the input value
    input.value = editElement.innerHTML;
    //submitBtn.textContent = 'edit';
    submitBtn.innerText = 'Edit';
    editFlag = true;
    editID = e.currentTarget.parentElement.parentElement.dataset.id;
}

//function to set back to default
function setToDefault(){
    //clear the input area
    input.value = '';
    editFlag = false;
    editID = "";
    editElement; 
    submitBtn.textContent = 'submit';

}

/**************************************************************************
- getItem() method of the Storage interface, when passed a key name, will 
    return that key's value as an object string, or null if the key does not exist
    + E.g: localStorage.getItem('user') -> “{“name”:”Obaseki Nosa”,”location”:”Lagos”}"
- to use this value, we convert it back to an object by using JSON.parse() method
    + JSON.parse(localStorage.getItem('user'));
- setItem() method of the Storage interface, when passed a key name and value, will
    add that key to the given Storage object, or update that key's value if it already exists
    + setItem(keyName, keyValue) where keyName and keyValue are both strings
    + localStorage can only store strings. To store arrays or objects,we need to convert 
      them to strings by JSON.stringify()
- JSON.stringify() method converts a JavaScript object or value to a JSON string
    + localStorage.setItem('user', JSON.stringify(person))
 ***************************************************************************/
// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
    //shorthand if prop names are matching with key and values in ES6 for {id:id, value:value}
    const grocery = {id, value};
    let items = getLocalStorage();
    //push the new item grocery to the array
    items.push(grocery);
    //convert the items array to a JSON string and add the items as value and 'list' as id
    localStorage.setItem('list',JSON.stringify(items));
    
}

function removeFromLocalStorage(id){
    //receive an array with objects
    let items = getLocalStorage();
    //filter the items that don't match the id and return a new array
    items = items.filter(function(item){
        if (item.id !== id){
            return item;
        }
    })
    console.log(items);
    //add the new array to local storage (override the values with this new list)
    localStorage.setItem('list',JSON.stringify(items));
}

function editLocalStorage(id,value){
    let items = getLocalStorage();
    console.log(`id: ${id} and value: ${value}`);
    items = items.map(function(item){
        if (item.id === id){
            item.value = value;
        }
        return item;
    })
    localStorage.setItem('list',JSON.stringify(items));
}

function getLocalStorage(){
    //if there is item with id 'list' then assign items to our items variable
    //if not then return an empty array
    //our first run will always return an empty array, then everytime we call this function
    //our list item will be overriden
    return localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list'))
        :[];
}

// ****** SETUP ITEMS **********
function displayList(){
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach(function(item){
            createItem(item.id, item.value);
        })
        groceryContainer.classList.add('show-container');
    }
}
function createItem(id,value){
    //Steps in create an grocery item dynamically
        //1.Create an HTML article element
        const groceryItem = document.createElement('article');
        //2.Add a class to the article element
        groceryItem.classList.add('grocery-item');
        //3.Create an attribute and update its value
        const dataAttr = document.createAttribute('data-id');
        dataAttr.value = id;
        //4.Attach the attribute and its value to the article element
        groceryItem.setAttributeNode(dataAttr);
        //5.Update article's HTML 
        groceryItem.innerHTML = `<p class="title">${value}</p>
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
        //IMPORTANT: eventListner need to be added at this step since we 
        //populate the button dynamically
        //MISTAKE:  document.querySelector starts with the first element in the 
        //document markup and the grocery-item has not been appended yet
        // const editBtn = document.querySelector('.edit-btn');
        // const deleteBtn = document.querySelector('.delete-btn');
        const editBtn = groceryItem.querySelector('.edit-btn');
        const deleteBtn = groceryItem.querySelector('.delete-btn');
        editBtn.addEventListener('click',editItem);
        deleteBtn.addEventListener('click',deleteItem);
        
        //6. append the article element to the parent element
        list.appendChild(groceryItem);
        
}
/**************************************************************************


 ***************************************************************************/