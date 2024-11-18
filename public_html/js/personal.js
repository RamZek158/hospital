import personal from './../static/personal.json' with { type: 'json' }


document.addEventListener("DOMContentLoaded", ready);

function ready(){
   drawPersonalTable();
}

function drawPersonalTable() {
    //alert("alert")
    console.log('personal: ', personal);
}

