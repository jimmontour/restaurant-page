function loadPage() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.classList.add('container')
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="logo">Jims Diner</div>
        <nav>
            <ul>
                <li class="home">Home</li>
                <li class="menu">Menu</li>
                <li class="contact">Contact</li>
            </ul>
        </nav>
    `;

    content.appendChild(header);
    content.appendChild(container);
}

export default loadPage;