/* STEPS IN PROCESS
1. classList - shows/gets all classes
2. contains - checks classList for specific class
3. add - add class if class does not exist
4. remove - remove class if class already exist
5. toggle - toggles class is short version for add/remove
*/

/* LOOK AT CSS FILE FOR NOTES */

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    /*  - check if classList of "link" contain class "fake-links"
            ----> expected result: FALSE
            console.log(links.classList.contains('fake-links'));
            
        - check if classList of "link" contain class "links"
            ----> expected result: TRUE
            console.log(links.classList.contains('links'));

        - alternative for classList.toggle() method
            if (links.classList.contains('show-links')){
                links.classList.remove('show-links');
                console.log(`class is removed: ${links.classList}`);

                ---> Template literals ${links} allowing for multi-line strings, 
                for string interpolation with embedded expressions
        
            } else {
                links.classList.add('show-links');
                console.log(`class is added: ${links.classList}`);
            }

    */

    //The toggle() method of the DOMTokenList interface removes an existing token 
    //from the list and returns false. If the token doesn't exist it's added and 
    //the function returns true. 
    
     links.classList.toggle('show-links');      
})