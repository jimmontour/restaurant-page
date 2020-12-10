function loadContact() {
    const container = document.querySelector('#content');

    const contact = document.createElement('div');

    menu.innerHTML = `<p>Add contact content here!</p>`

    container.appendChild(contact);
}

export default loadContact;