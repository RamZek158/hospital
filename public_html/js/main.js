let header = null;
let headerContainer = null;
let footer = null;
let footerContainer = null;
let unregisterUserMessageContainer = null;

const LOGIN_USER_COOKIE_NAME = "loggedUser";

document.addEventListener("DOMContentLoaded", ready);

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

function createButton(title, container) {
    const buttonElement = document.createElement('button');
    const loginButtonText = document.createTextNode(title);
    buttonElement.classList.add('primaryButton');
    buttonElement.appendChild(loginButtonText);
    container.appendChild(buttonElement);
    return buttonElement;
}

function getLoginButtonName() {
    let loginButtonName;
    const isLogged = getCookie(LOGIN_USER_COOKIE_NAME);

    isLogged ? loginButtonName = 'Выйти' : loginButtonName = 'Войти'
    return loginButtonName;
}

function setLogin(loginName){
    const loginButton = document.getElementById('loginButton');
    setCookie(LOGIN_USER_COOKIE_NAME, loginName);
    window.location.href = 'index.html';
    loginButton.innerHTML = 'Войти';
    removeUnregisterUserMessage();
}

function loginAction(event) {
    event.preventDefault();
    event.stopPropagation();
    const isLogged = getCookie(LOGIN_USER_COOKIE_NAME);
    if (!isLogged){
        window.location.href = 'login.html';
    } else {
        deleteCookie(LOGIN_USER_COOKIE_NAME);
        event.target.innerHTML = 'Войти';
        addUnregisterUserMessage();
    };
}

function ready() {
    createLayout();
}

function createLayout() {
    const isLogged = getCookie(LOGIN_USER_COOKIE_NAME);
    header = document.getElementById('header');
    headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    const headerLeftPanel = document.createElement('div');
    const headerCenterPanel = document.createElement('div');
    const headerRightPanel = document.createElement('div');
    headerLeftPanel.classList.add('headerLeftPanel');
    headerCenterPanel.classList.add('headerCenterPanel');
    headerRightPanel.classList.add('headerRightPanel');

    const goHomeButton = createButton('На главную', headerLeftPanel);
    goHomeButton.onclick = () => {
        window.location.href = 'index.html';
    };

    const loginButton = createButton(getLoginButtonName(), headerRightPanel);
    loginButton.id = 'loginButton';
    loginButton.onclick = (event) => loginAction(event);

    headerContainer.appendChild(headerLeftPanel);
    headerContainer.appendChild(headerCenterPanel);
    headerContainer.appendChild(headerRightPanel);
    header.appendChild(headerContainer);

    const headerTitle = document.createElement('h1');
    const headerTitleText = document.createTextNode('Больница «Андреевская»');
    headerTitle.appendChild(headerTitleText);
    headerCenterPanel.appendChild(headerTitle);

    footer = document.getElementById('footer');
    footerContainer = document.createElement('div');
    footerContainer.style.textAlign = 'center';
    footer.appendChild(footerContainer);
    const copyright = document.createElement('p');
    const node = document.createTextNode('© Оформление сайта. ООО «Ромашка», 2024');
    copyright.appendChild(node);
    copyright.style.color = '#FFFAF0';
    footerContainer.appendChild(copyright);

    if(!isLogged) {
        addUnregisterUserMessage();
    }
}

function addUnregisterUserMessage() {
    const contentContainer = document.getElementsByClassName('contentContainer')[0];
    contentContainer.style.display = 'none';
    unregisterUserMessageContainer = document.createElement('div');
    unregisterUserMessageContainer.classList.add('unregisterUserMessageContainer');
    const unregisterUserMessageHeader =  document.createElement('h2');
    const unregisterUserMessage =  document.createTextNode('Для продолжения работы необходимо зарегистрироваться!');
    unregisterUserMessageHeader.appendChild(unregisterUserMessage);
    unregisterUserMessageContainer.appendChild(unregisterUserMessageHeader);
    header.parentNode.insertBefore(unregisterUserMessageContainer, header.nextSibling);
}

function removeUnregisterUserMessage() {
    const contentContainer = document.getElementsByClassName('contentContainer')[0];
    unregisterUserMessageContainer.remove();
    contentContainer.style.display = 'block';
}
