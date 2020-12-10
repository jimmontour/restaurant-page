function loadMenu() {
    const container = document.querySelector('#content');

    const menu = document.createElement('div');

    menu.innerHTML = `<p>Add menu content here!</p>`

    container.appendChild(menu);
}

export default loadMenu;