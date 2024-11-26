const HEADER_TITLES =  {
    fio: "ФИО",
    weight: "Вес",
    age: "Возраст",
    diagnosis: "Диагноз"
};

async function drawPatientsTable() {
    let patients = await loadPatients();
    const patientsTableContainer = document.getElementsByClassName('tableContainer')[0]
    const patientsTable = document.createElement('table');
    patientsTable.classList.add("mainTable");
    const patientsTableHead = document.createElement('thead');
    const patientsTableBody = document.createElement('tbody');
    const patientsTableHeadRow = document.createElement('tr');

    Object.keys(patients[0]).forEach(function(key) {
        const patientsTableHeadColumn = document.createElement('th')
        const headerTitleText = document.createTextNode(HEADER_TITLES[key]);
        patientsTableHeadColumn.appendChild(headerTitleText);
        patientsTableHeadRow.appendChild(patientsTableHeadColumn);
    });

    patients.map((person) => {
        const  personalTableBodyRow = document.createElement('tr');
        Object.values(person).forEach(function(value) {
            const personalTableBodyColumn = document.createElement('th')
            const columnText = document.createTextNode(value);
            personalTableBodyColumn.appendChild(columnText);
            personalTableBodyRow.appendChild(personalTableBodyColumn);
        });
        patientsTableBody.appendChild(personalTableBodyRow);
    })
    patientsTableHead.appendChild(patientsTableHeadRow);
    patientsTable.appendChild(patientsTableHead);
    patientsTable.appendChild(patientsTableBody);
    patientsTableContainer.appendChild(patientsTable);
}

async function loadPatients(){
    let patientsResponse = null;
    let patientsJson = null
    try {
        patientsResponse = await fetch('./static/patients.json')
        patientsJson =  await patientsResponse.json()

        console.log('uuu patientsJson: ',patientsJson );
        return patientsJson;
    } catch(error) {
        console.log(error);
    }
    return patientsJson;
}

drawPatientsTable();


