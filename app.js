// import services and utilities
import { postItNotes } from './fetch-utils/fetch.js';

// import component creators
import createBulletinBoard from './components/BulletinBoard.js';
// import createAuthForm from './components/AuthForm.js';

// declare state variables
let postIts = [];

// write handler functions
async function pageLoad() {
    postIts = await postItNotes();
    // console.log(postIts);
    display();
}

// Create each component: 
const bulletinBoard = createBulletinBoard(document.getElementById('bulletin-board'));
// const signInForm = createAuthForm(document.getElementById('sign-in'));

// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 



// Roll-up display function that renders (calls with state) each component
function display() {
    bulletinBoard({ postIts });
    // Call each component passing in props that are the pieces of state this component needs
}

// Call display on page load
pageLoad();
