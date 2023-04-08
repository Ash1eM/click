const main = document.querySelector('main');
const button = document.querySelector("button");

button.addEventListener('click', responseToClick)

function responseToClick() {
   const hTag= document.createElement('h3');
    hTag.textContent="Foo";
    main.appendChild(hTag);
} 
