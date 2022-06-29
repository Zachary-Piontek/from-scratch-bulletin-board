import { createPostIt } from '../fetch-utils.js';

const postItForm = document.getElementById('post-it');
postItForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = new FormData(postItForm);
    await createPostIt({
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    });
    location.replace('/');
});