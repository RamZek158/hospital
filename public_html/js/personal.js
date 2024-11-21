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

