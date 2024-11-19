
document.addEventListener("DOMContentLoaded", ready);
function ready(){
    createLayout();
}

function createLayout () {
    const header = document.getElementById('header');
    const headerContainer = document.createElement('div');
    header.appendChild(headerContainer);

    const footer = document.getElementById('footer');
    const footerContainer = document.createElement('div');
    footerContainer.style.textAlign = 'center';
    footer.appendChild(footerContainer);
    const copyright =  document.createElement('p');
    const node = document.createTextNode('© Оформление сайта. ООО «Ромашка», 2020');
    copyright.appendChild(node);
    copyright.style.color = '#FFFAF0';
    footerContainer.appendChild(copyright)
}