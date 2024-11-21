
let header = null;
let headerContainer = null;
let footer = null;
let footerContainer = null;

const LOGIN_USER_COOKIE_NAME = "loggedUser";
function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}

function createButton(title,container){
    const buttonElement = document.createElement('button');
    const loginButtonText = document.createTextNode(title);
    buttonElement.classList.add('primaryButton');
    buttonElement.appendChild(loginButtonText); 
    container.appendChild(buttonElement);
    return buttonElement;
}

document.addEventListener("DOMContentLoaded", ready);

function ready(){
    createLayout();
}

function createLayout () {
    header = document.getElementById('header');
    headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    const headerLeftPanel = document.createElement('div');
    
    const headerCenterPanel = document.createElement('div');
    const headerRightPanel = document.createElement('div');
    
    const goHomeButton = createButton('На главную',headerLeftPanel);
    goHomeButton.onclick = ()=>{
        window.location.href='index.html';
    };
    
    const loginButton = createButton('Войти',headerRightPanel);
    
    headerContainer.appendChild(headerLeftPanel);
    headerContainer.appendChild(headerCenterPanel);
    headerContainer.appendChild(headerRightPanel);
    header.appendChild(headerContainer);

    const headerTitle = document.createElement('h1');
    const headerTitleText = document.createTextNode('Госпиталь «Андреевский»');
    headerTitle.appendChild(headerTitleText);
    headerCenterPanel.appendChild(headerTitle);

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
