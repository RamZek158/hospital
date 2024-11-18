
document.addEventListener("DOMContentLoaded", ready);
function ready(){
    createLayout();
}

function createLayout () {
    const header = document.getElementById('header');
    console.log('header: ', header);
    const headerContainer = document.createElement('div');
    headerContainer.style.width = '100%';
    headerContainer.style.height = '100px';
    headerContainer.style.backgroundColor = '#90EE90';
    header.appendChild(headerContainer);

}