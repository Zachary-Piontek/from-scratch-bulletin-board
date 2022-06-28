// import services and utilities
import { postItNotes } from './fetch-utils/fetch.js';

// import component creators

// declare state variables
let postIt = [];

// write handler functions
async function pageLoad() {
    postIt = await postItNotes();
    console.log(postIt);
}

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component
// function display() {
//     // Call each component passing in props that are the pieces of state this component needs
// }

// Call display on page load
pageLoad();
