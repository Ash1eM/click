const main = document.querySelector('main');
const buttons = document.getElementById("Foo");

buttons.addEventListener('click', responseToClick)

function responseToClick() {
    const hTag = document.createElement('h3');
    hTag.textContent = "Foo"
    main.appendChild(hTag)
}

const button = document.getElementById("Bar");

button.addEventListener ('click', myFunction);
function myFunction() {
    const anTag =  document.createElement('h3');
    anTag.textContent = "Bar"
    main.appendChild(anTag)
}

const anbutton = document.getElementById("FooBar");

anbutton.addEventListener('click', anFunction);
function anFunction() {
    const lastTag = document.createElement('h2');
    lastTag.textContent = "FooBar"
    main.appendChild(lastTag)
}









    

