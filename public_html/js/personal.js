
function drawPersonalTable() {
    let personal = loadPersonal();
    console.log('personal: ', personal );
}

async function loadPersonal(){
    let personalResponse = null;
    let personalJson = null
    try {
        personalResponse = await fetch('./static/personal.json')
        personalJson =  await personalResponse.json()
       /* personal = await fetch('./static/personal.json')
            .then(response => response.json())
            .then(json => {
                console.log('json: ', json);
                return json
            })*/

        console.log('uuu personalJson: ',personalJson );
        return personalJson;
    } catch(error) {
        console.log(error);
    }
    return personalJson;
}

drawPersonalTable();

