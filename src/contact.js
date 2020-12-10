function loadContact() {
    const content = document.querySelector('#content');
    const container = document.querySelector('.container');
    container.innerHTML = '';
    const contact = document.createElement('div');

    contact.innerHTML = `<p>Add contact content here!</p>`

    container.appendChild(contact);
}

export default loadContact;