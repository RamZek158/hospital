const HEADER_TITLES =  {
    fio: "ФИО",
    speciality: "Должность",
    phone: "Номер телефона"
}

async function drawPersonalTable() {
    let personal = await loadPersonal();
    const personalTableContainer = document.getElementsByClassName('tableContainer')[0]
    const personalTable = document.createElement('table');
    personalTable.classList.add("mainTable");
    const personalTableHead = document.createElement('thead');
    const personalTableBody = document.createElement('tbody');
    const personalTableHeadRow = document.createElement('tr');

    Object.keys(personal[0]).forEach(function(key) {
        const personalTableHeadColumn = document.createElement('th')
        const headerTitleText = document.createTextNode(HEADER_TITLES[key]);
        personalTableHeadColumn.appendChild(headerTitleText);
        personalTableHeadRow.appendChild(personalTableHeadColumn);
    });

    personal.map((person) => {
        const  personalTableBodyRow = document.createElement('tr');
        Object.values(person).forEach(function(value) {
            const personalTableBodyColumn = document.createElement('th')
            const columnText = document.createTextNode(value);
            personalTableBodyColumn.appendChild(columnText);
            personalTableBodyRow.appendChild(personalTableBodyColumn);
        });
        personalTableBody.appendChild(personalTableBodyRow);
    })
    personalTableHead.appendChild(personalTableHeadRow);
    personalTable.appendChild(personalTableHead);
    personalTable.appendChild(personalTableBody);
    personalTableContainer.appendChild(personalTable);
    
    const eventButton = document.getElementById('eventButton');
    
    eventButton.onclick = () => {
        const event = document.getElementById('event');
         const eventData = document.getElementById('eventData');
         
         
            let task = {
                id: `id_${Math.random().toString(16).slice(2)}`,
                event:event.value,
                eventData:eventData.value
            }
            setJsonItem(EVENTS_KEY, task);
            event.value = '';             
    }
    
}

async function loadPersonal(){
    let personalResponse = null;
    let personalJson = null
    try {
        personalResponse = await fetch('./static/personal.json')
        personalJson =  await personalResponse.json()
        return personalJson;
    } catch(error) {
        console.log(error);
    }
    return personalJson;
}

drawPersonalTable();

