

export default function createBulletinBoard(root) {
    // console.log(root);
    return ({ postIts }) => {
        root.innerHTML = '';

        for (const post of postIts) {
            const li = postNote({ post });
            root.append(li);
        }
    };
}

export function postNote({ post }) {
    const li = document.createElement('li');
    const headerTitle = document.createElement('h2');
    const parDescription = document.createElement('p');
    const parContact = document.createElement('p');

    
    headerTitle.textContent = post.title;
    parDescription.textContent = post.description;
    parContact.textContent = post.contact;

    li.append(headerTitle, parContact, parDescription);
    
    return li;
}


