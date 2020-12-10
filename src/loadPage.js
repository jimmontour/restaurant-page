function loadPage() {
    const contentContainer = document.querySelector('#content');

    const header = document.createElement('header');
    header.innerHTML = `
        <div class="logo">Jims Diner</div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Order Takeout</li>
                <li>Private Events</li>
                <li>Contact</li>
            </ul>
        </nav>
    `;
    
    contentContainer.appendChild(header)
}

export default loadPage;