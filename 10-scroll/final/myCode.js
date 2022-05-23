"use strict"

// ********** set date ************
/* STEPS BY STEPS
1. Get the date button/element
2.Update innerHTML with new Date().getfullyear()
*/

/* 
    The only correct way to instantiate a new Date object is by using 
    the new operator. If you call the Date object directly, such as 
    now = Date(), the returned value is a string rather than a 
    Date object. 
*/
const date = document.getElementById('date').innerHTML = new Date().getFullYear();





// ********** toggle links/nav bar ************

/* STEPS BY STEPS
1. Get the element for toggle & links container
2. AddEventLister to nav bar
    . add ".show-links" to links container
    ---> downside of this approach/not dynamic if new links added
3. Apply .getBoundingClientRect() on both links container and links to get the element height
    - Element.getBoundingClientRect() method returns the size of an 
    element and its position relative to the viewport.
4. Set up if container height is 0, then its height should be links height (this will be considered as inline CSS)
5. 
*/

/*
    - Element.getBoundingClientRect() method returns a DOMRect object provide
    the size of element and its position relative to the viewport.
    - HTMLElement.style: read-only property and returns the INLINE style of 
    an element in the form of a CSSStyleDeclaration object.
        + to add specific styles to an element without altering other style 
        values, set individual properties on the CSSStyleDeclaration object. 
        E.g: element.style.backgroundColor = "red"
    
*/
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    /*
     linksContainer.classList.toggle('show-links');
     - this approach works fine but not dynamically. As the height is set to 200px,
     the links container's hard coded and will not work if we add a new link to the nav.
    */
    //the reason why we wrap the links inside a div is so we can do this dynamic method
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(linksContainerHeight); will show "height: 0" because per CSS the container is hidden by default
    const linksHeight = links.getBoundingClientRect().height;
    //console.log(linksHeight); returns the exact height of the "ul" element of the links

    //set height property to inline style of ".links-container"
    (linksContainerHeight === 0)? 
    linksContainer.style.height = `${linksHeight}px`:
    linksContainer.style.height = 0; 
    
})


// ********** fixed navbar ************
/* STEPS BY STEPS
1. Get the nav bar and top links element
2. AddEventListener on scroll event
3. Get the page pixel by .pagheYOffset
    pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
4. If statement: if scroll height > nav height
    then add .fixed-nav to nav bar element
    otherwise remove it 
5. If statement: if scroll height > 500 pixel
    add/remove .show-link from top-link
*/
/*
    - window.pageYOffset is a read - only window property that returns the number 
    of pixels the document has been scrolled vertically.
        + is an alias for window.scrollY (not supported in IE tho)
*/
const nav = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
//'scroll' events can fire at a high rate, the event handler shouldn't execute 
    //computationally expensive operations such as DOM modifications
window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;

    //maked nav fixed when scroll to certain pixel - navHeight is set at 82px
    (scrollHeight > navHeight)?  
    nav.classList.add('fixed-nav'): 
    nav.classList.remove('fixed-nav');
    
    //make "back to top" button vissible when scroll to certain pixel
    (scrollHeight > 500)? 
    topLink.classList.add('show-link') : 
    topLink.classList.remove('show-link');
})




// ********** smooth scroll ************
// select links

/* STEPS BY STEPS
1. Get all of scroll link elements
2. Loop over each of them to addEventListener
3. Use preventDefault() on event
4. Navigate to specific spot by .getAttribute().slice to get the ID then get the element
5. Caculate the exact heights for section position if nav bar is fixed
    -   get the position by subtract nav height from element.offsetTop
    Caculate the exact heights for section position if nav bar is static
    - if nav contain .fixed-nav then position - 2 navbar
    - if nav height > 82 then position + container height
6. use window.scrollTo() to set the position 
7. set links container height to 0 so it closes nav bar when we scroll


*/

/*
    - document.querySelectorAll(): returns a static (not live) NodeList => if a classlist is added
    by JS it will not be included in the NodeList
    - event.preventDefault() method tells the user agent that if the event does not get 
    explicitly handled, its default action should not be taken as it normally would be.
    - element.getAttribute() method returns the value of a specified attribute on the element.
    - HTMLElement.offsetTop read-only property returns the distance of the outer border of the 
    current element relative to the inner border of the top of the offsetParent, the closest positioned 
    ancestor element
    - Window.scrollTo() scrolls to a particular set of coordinates in the document.
        + scrollTo(x-coord, y-coord)
        + window.scrollTo({
          top: 100,
          left: 100,
          behavior: 'smooth'/'auto'});
*/

const scrollLink = document.querySelectorAll('.scroll-link');
scrollLink.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault(); //we didn't navigate to the section when clicked because this prevents the default behavior
        // const id = e.currentTarget.getAttribute('href').slice(1);
        
        //get the id of the section we want to navigate to
        const id = link.getAttribute('href').slice(1);
        //console.log(id); --> .getAttribute() return "#home" then .slice(1) extract "#" to return final string "home"
        
        //get the navigation bar height
        const navHeight = nav.getBoundingClientRect().height;
        
        //Exact Position of the section = the distance to section from the top - navigation bar height
        let linkYPosition = document.getElementById(id).offsetTop - navHeight;
        
        //the navBar is taken out of the normal flow when it's fixed so we need to check if it's fixed
        const fixedNav = nav.classList.contains('fixed-nav');
        //if it's not fixed, then it's in normal flow, so subtract 2 times navBar height
        if (!fixedNav){
            linkYPosition = linkYPosition - navHeight;
        }
        //on small screen, the navHeight was set to = linkscontainerheight when navbar is open
        //so it was substracted from the distance to section from the top 
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        if (navHeight > 82){
            linkYPosition = linkYPosition + linksContainerHeight;
        }

        window.scrollTo({
            left: 0,
            top: linkYPosition,
        })
        //close the navBar on small screen after navigate to the section
        linksContainer.style.height = 0;

    })
})

