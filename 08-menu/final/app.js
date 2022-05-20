const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Brazillian Steak",
    category: "steak",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];



/* 
//   ---------STEPS BY STEPS------------
//   ### a. display menu items
//   1. Get the parent element that we want to update HTML using JS
//   2. When DOM is loaded, we will dynamically populate the menu items
//   3. Using .map() to iterate through the original array and get back a
//       new array
//   4. Since we get back an array, we need to .join('') to remove the comma
//     between items
//   5. Update innerHTML of the parent element to the new array

//   ### b. adding filter buttons (hard-code using .dataset)
//   1. Get all the buttons with the same button class
//   2. Loop over each button to add EventListner
//   3. Use .dataset() to get the string category
//   4. Filter the menu list to get the items that have matching category
//   5. Send the new array to displayMenuItem to populate its HTML

//   ### c. adding filter buttons (dynamically using reduce())
//   if we add/change the original array, the button will populate accordingly 
//   3. Get only the unique categories - using reduce()
//   4. Iterate over categories and use map() to get the HTML 
//   5. Update the parent HTML element with the HTML
//   6. Then add event listener to each button from step b
// */

//1a.
const sectionCenter = document.querySelector('.section-center');
      // console.log(sectionCenter);
      //---> return <.section-center> element

const categoryContainer = document.querySelector('.btn-container');




//2a.
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItem(menu);
  displayMenuButton();

})

// /* -----------------display menu------------------------ */

function displayMenuItem(menuArray){
  /*  3a.
      - array.map() method creates a new array populated 
          with the results of calling a provided function on every 
          element in the calling array.
          + console.log(displayMenu); 
              -> ---> return a list of new menu array containing all 9 
                  in the original array
          + .map() can return anything that it has access to
    */  
          //using let instead of const so we can use join() later
          let displayMenu = menuArray.map(function(item){
            //each item has access to its properties
            return `<article class="menu-item">
                      <img src= ${item.img} alt= ${item.title} class="photo" />
                      <div class="item-info">
                        <header>
                          <h4>${item.title}</h4>
                          <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">
                          ${item.desc}
                        </p>
                      </div>
                    </article>`;
        })
        displayMenu = displayMenu.join('');//4a. remove comma between items in array
        sectionCenter.innerHTML = displayMenu; //5a.
  }

// /* -------------Filter Buttons------------ */

function displayMenuButton(){

//   /*
//     - array.reduce() take 2 args (callback function & initial value) walks through the array element-by-element, at each step 
//       adding the current array value to the result from the previous step 
//       until there are no more elements to add.
//     - syntax: reduce(function(previousValue, currentValue, currentIndex, array) {...}, initialValue)
//         ---> .reduce() method execute the callback function on each element of "menu" array
//         ---> initial value is an array ['all], 
//         ---> "returnArray" is previousValue, te value resulting from the previous call to callbackFn (['all', 'breakfast',..])
//         ---> currentValue is "item" or each "menu" element, which have access to all properties
//         ---> currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1
//         ---> array (optional) the array to traverse

//   */
        const category = menu.reduce(function(returnArray, item){
          //if the returnArray does not have the item.category then push it to the array
          if (!returnArray.includes(item.category)){
            returnArray.push(item.category);
          }
          return returnArray; //if the item.category is already in the array then just return the array
        },['all']);
        // console.log(category);
      
        const categoryBtns = category.map(function(category){
          return `<button type="button" class="filter-btn" data-id=${category}>
                          ${category}
                  </button>`
        }).join('');
      
        categoryContainer.innerHTML = categoryBtns;

//         /* IMPORTANT */
        const filterBtns = categoryContainer.querySelectorAll('.filter-btn');
//             // console.log(filterBtns)will return an empty NodeList
//             // if we add any item dynamically (using .innerHTML), we can access the buttons ONLY
//               //after they are added to the DOM

//         // 2b.
        filterBtns.forEach(function(btn){
          btn.addEventListener('click', function(e){
//               /* 3b.
//                 - HTMLElement.dataset "read-only"( can be read, but not directly written)
//                   property of the HTMLElement interface provides read/write access to 
//                   custom data attributes (data-*) on elements
//                   + since we call our attribute "data-id", we then have access to a property 
//                     call "id"
//                   + console.log(e.currentTarget.dataset.id);
//                     ---> return a string represent "id", in this case (breakfast, lunch, all...)
//                   4b.
//                 - array.filter() method creates a new array with all elements 
//                   that pass the test implemented by the provided function.
//               */
            const category = e.currentTarget.dataset.id ;
                
            const filterArray = menu.filter(function(filterItem){
                if(filterItem.category === category){
                  return filterItem;
                }
            })
            
            //there is no category "all" so we need to factor it in with this if
            if (category === 'all'){
              displayMenuItem(menu);
            }
            else {
              displayMenuItem(filterArray); //5b. pass the new aray to displayMenuItem to populate the new HTML
            }
            
          })
        })
}


