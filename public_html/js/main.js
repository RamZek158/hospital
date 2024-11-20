
let header = null;
let headerContainer = null;
let footer = null;
let footerContainer = null;

document.addEventListener("DOMContentLoaded", ready);

function ready(){
    createLayout();
}

function createLayout () {
    header = document.getElementById('header');
    headerContainer = document.createElement('div');
    header.appendChild(headerContainer);

    const headerTitle = document.createElement('h1');
    const headerTitleText = document.createTextNode('Госпиталь «Андреевский»');
    headerTitle.appendChild(headerTitleText);
    headerContainer.appendChild(headerTitle);

    footer = document.getElementById('footer');
    footerContainer = document.createElement('div');
    footerContainer.style.textAlign = 'center';
    footer.appendChild(footerContainer);
    const copyright =  document.createElement('p');
    const node = document.createTextNode('© Оформление сайта. ООО «Ромашка», 2024');
    copyright.appendChild(node);
    copyright.style.color = '#FFFAF0';
    footerContainer.appendChild(copyright);
}