import { getUser, signIn, signUp } from '../fetch-utils';

import createAuthForm from './AuthForm.js';

async function handlePageLoad() {
    const user = await getUser();
    if (user) {
        location.replace('/');
        return;
    }
    display();
}

async function signInPost(email, password) {
    const response = await signIn(email, password);
    return response;
}

async function signUpPost(email, password) {
    const response = await signUp(email, password);
    return response;
}

const signInForm = createAuthForm(document.getElementById('sign-in'), { signInPost });

const signUpForm = createAuthForm(document.getElementById('sign-up'), { signUpPost });


function display() {
    signInForm();
    signUpForm();
}

handlePageLoad();