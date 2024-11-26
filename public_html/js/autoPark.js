const HEADER_TITLES =  {
    model: "Модель",
    year: "Год выпуска",
    numbrer: "Гос. намер",
    status: "Статус"
};

async function drawAutoParkTable() {
    let autoPark = await loadAutoPatk();
    const autoParkTableContainer = document.getElementsByClassName('tableContainer')[0]
    const autoParkTable = document.createElement('table');
    autoParkTable.classList.add("mainTable");
    const autoParkTableHead = document.createElement('thead');
    const autoParkTableBody = document.createElement('tbody');
    const autoParkTableHeadRow = document.createElement('tr');

    Object.keys(autoPark[0]).forEach(function(key) {
        const personalTableHeadColumn = document.createElement('th')
        const headerTitleText = document.createTextNode(HEADER_TITLES[key]);
        personalTableHeadColumn.appendChild(headerTitleText);
        autoParkTableHeadRow.appendChild(personalTableHeadColumn);
    });

    autoPark.map((person) => {
        const  personalTableBodyRow = document.createElement('tr');
        Object.values(person).forEach(function(value) {
            const personalTableBodyColumn = document.createElement('th')
            const columnText = document.createTextNode(value);
            personalTableBodyColumn.appendChild(columnText);
            personalTableBodyRow.appendChild(personalTableBodyColumn);
        });
        autoParkTableBody.appendChild(personalTableBodyRow);
    });
    autoParkTableHead.appendChild(autoParkTableHeadRow);
    autoParkTable.appendChild(autoParkTableHead);
    autoParkTable.appendChild(autoParkTableBody);
    autoParkTableContainer.appendChild(autoParkTable);
}

async function loadAutoPatk(){
    let autoParkResponse = null;
    let autoParkJson = null
    try {
        autoParkResponse = await fetch('./static/autoPark.json')
        autoParkJson =  await autoParkResponse.json()

        console.log('uuu autoParkJson: ',autoParkJson );
        return autoParkJson;
    } catch(error) {
        console.log(error);
    }
    return autoParkJson;
}

drawAutoParkTable();


