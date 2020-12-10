function loadContact() {
    const content = document.querySelector('#content');
    const container = document.querySelector('.container');
    container.innerHTML = '';
    const contact = document.createElement('div');

    contact.innerHTML = `
        <h1>Contact Jim's Diner</h1>
        <form class="contact-form" action="">
            <div class="contact-form-section">
                <p>Name:</p>
                <input type="text">
            </div>
            <div class="contact-form-section">
                <p>Phone:</p>
                <input type="text">
            </div>
            <div class="contact-form-section">
                <p>Email:</p>
                <input type="email">
            </div>
            <div class="contact-form-section">
                <p>Comment:</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </form>
    `;

    container.appendChild(contact);
}

export default loadContact;4