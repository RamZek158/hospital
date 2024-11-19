
function drawPersonalTable() {
    fetch('./static/personal.json')
        .then(response => response.json())
        .then(data => console.log('data', data))
}

drawPersonalTable();

