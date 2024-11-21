
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