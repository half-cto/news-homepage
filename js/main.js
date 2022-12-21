const button = document.getElementById('nav-button');
const buttonClose = document.getElementById('close-button');
const list = document.getElementsByClassName('header__nav')[0];
console.log(button);
console.log(list);


const dropdown = () => {
    list.classList.add('header__dropdown');
    button.classList.add('not-visible')
}

const closeDropdown = () => {
    list.classList.remove('header__dropdown');
    button.classList.remove('not-visible');
}

button.addEventListener('click', dropdown);
buttonClose.addEventListener('click', closeDropdown);