
async function drawPersonalTable() {
    let personal = await loadPersonal();
    const personalTable = document.createElement('table');
    console.log('personal[0]', personal[0])

}

async function loadPersonal(){
    let personalResponse = null;
    let personalJson = null
    try {
        personalResponse = await fetch('./static/personal.json')
        personalJson =  await personalResponse.json()

        console.log('uuu personalJson: ',personalJson );
        return personalJson;
    } catch(error) {
        console.log(error);
    }
    return personalJson;
}

drawPersonalTable();

