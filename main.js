(()=>{"use strict";const n=function(){document.querySelector("#content");const n=document.querySelector(".container"),e=(n.innerHTML="",document.createElement("div"));e.innerHTML='\n        <div class="home">\n            <h1>Welcome to Jim\'s Cafe</h1> \n            <img src="https://source.unsplash.com/random/" alt="">\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum voluptas necessitatibus quisquam repellendus quo.</p>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eligendi consequuntur asperiores nesciunt natus delectus! Quos, quibusdam officiis? Ex, sunt totam! Explicabo nam at sed?</p>\n        </div>\n    ',n.appendChild(e)};(function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("container");const c=document.createElement("header");c.innerHTML='\n        <div class="logo">Jims Diner</div>\n        <nav>\n            <ul>\n                <li class="home">Home</li>\n                <li class="menu">Menu</li>\n                <li class="contact">Contact</li>\n            </ul>\n        </nav>\n    ',n.appendChild(c),n.appendChild(e)})(),n(),function(){const e=document.querySelector(".home"),c=document.querySelector(".menu"),i=document.querySelector(".contact");e.addEventListener("click",(e=>n())),c.addEventListener("click",(n=>function(){document.querySelector("#content");const n=document.querySelector(".container");n.innerHTML="";const e=document.createElement("div");e.innerHTML='\n        <h1>Menu</h1>\n        <div class="menu-options">\n            <div class="menu-card">\n                <div class="menu-card-image">\n                </div>\n                <div class="menu-card-info">\n                    <p>Hamburger</p>\n                    <p>$2.59</p>\n                    <p>A delicious burger with a secret sauce.</p>\n                </div>\n            </div>\n            <div class="menu-card">\n                <div class="menu-card-image">\n                </div>\n                <div class="menu-card-info">\n                    <p>Hamburger</p>\n                    <p>$2.59</p>\n                    <p>A delicious burger with a secret sauce.</p>\n                </div>\n            </div>\n            <div class="menu-card">\n                <div class="menu-card-image">\n                </div>\n                <div class="menu-card-info">\n                    <p>Hamburger</p>\n                    <p>$2.59</p>\n                    <p>A delicious burger with a secret sauce.</p>\n                </div>\n            </div>\n            <div class="menu-card">\n                <div class="menu-card-image">\n                </div>\n                <div class="menu-card-info">\n                    <p>Hamburger</p>\n                    <p>$2.59</p>\n                    <p>A delicious burger with a secret sauce.</p>\n                </div>\n            </div>\n            <div class="menu-card">\n                <div class="menu-card-image">\n                </div>\n                <div class="menu-card-info">\n                    <p>Hamburger</p>\n                    <p>$2.59</p>\n                    <p>A delicious burger with a secret sauce.</p>\n                </div>\n            </div>\n            <div class="menu-card">\n                <div class="menu-card-image">\n                </div>\n                <div class="menu-card-info">\n                    <p>Hamburger</p>\n                    <p>$2.59</p>\n                    <p>A delicious burger with a secret sauce.</p>\n                </div>\n            </div>\n        </div>\n    ',n.appendChild(e)}())),i.addEventListener("click",(n=>function(){document.querySelector("#content");const n=document.querySelector(".container");n.innerHTML="";const e=document.createElement("div");e.innerHTML="<p>Add contact content here!</p>",n.appendChild(e)}()))}()})();