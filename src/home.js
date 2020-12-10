function loadHome() {
    const content = document.querySelector('#content');
    const container = document.querySelector('.container');
    const emptyDiv = container.innerHTML = '';
    const home = document.createElement('div');
    home.innerHTML = `
        <div class="home">
            <h1>Welcome to Jim's Cafe</h1> 
            <img src="https://source.unsplash.com/random/" alt="">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum voluptas necessitatibus quisquam repellendus quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eligendi consequuntur asperiores nesciunt natus delectus! Quos, quibusdam officiis? Ex, sunt totam! Explicabo nam at sed?</p>
        </div>
    `;
    container.appendChild(home);
}

export default loadHome;