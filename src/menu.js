function loadMenu() {
  const content = document.querySelector('#content');
  const container = document.querySelector('.container');
  container.innerHTML = '';
  const menu = document.createElement('div');

  menu.innerHTML = `
        <h1>Menu</h1>
        <div class="menu-options">
            <div class="menu-card">
                <div class="menu-card-image">
                </div>
                <div class="menu-card-info">
                    <p>Hamburger</p>
                    <p>$2.59</p>
                    <p>A delicious burger with a secret sauce.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="menu-card-image">
                </div>
                <div class="menu-card-info">
                    <p>Hamburger</p>
                    <p>$2.59</p>
                    <p>A delicious burger with a secret sauce.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="menu-card-image">
                </div>
                <div class="menu-card-info">
                    <p>Hamburger</p>
                    <p>$2.59</p>
                    <p>A delicious burger with a secret sauce.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="menu-card-image">
                </div>
                <div class="menu-card-info">
                    <p>Hamburger</p>
                    <p>$2.59</p>
                    <p>A delicious burger with a secret sauce.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="menu-card-image">
                </div>
                <div class="menu-card-info">
                    <p>Hamburger</p>
                    <p>$2.59</p>
                    <p>A delicious burger with a secret sauce.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="menu-card-image">
                </div>
                <div class="menu-card-info">
                    <p>Hamburger</p>
                    <p>$2.59</p>
                    <p>A delicious burger with a secret sauce.</p>
                </div>
            </div>
        </div>
    `;

  container.appendChild(menu);
}

export default loadMenu;
