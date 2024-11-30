const HEADER_TITLES =  {
    категория: "категория",
    наименование: "наименование",
    количество: "количество",
    статус: "статус"
};

async function drawEquipmentsTable() {
    let equipments = await loadEquipments();
    const equipmentsTableContainer = document.getElementsByClassName('tableContainer')[0]
    const equipmentsTable = document.createElement('table');
    equipmentsTable.classList.add("mainTable");
    const equipmentsTableHead = document.createElement('thead');
    const equipmentsTableBody = document.createElement('tbody');
    const equipmentsTableHeadRow = document.createElement('tr');

    Object.keys(equipments[0]).forEach(function(key) {
        const equipmentsTableHeadColumn = document.createElement('th')
        const headerTitleText = document.createTextNode(HEADER_TITLES[key]);
        equipmentsTableHeadColumn.appendChild(headerTitleText);
        equipmentsTableHeadRow.appendChild(equipmentsTableHeadColumn);
    });

    equipments.map((person) => {
        const  equipmentsTableBodyRow = document.createElement('tr');
        Object.values(person).forEach(function(value) {
            const equipmentsTableBodyColumn = document.createElement('th')
            const columnText = document.createTextNode(value);
            equipmentsTableBodyColumn.appendChild(columnText);
            equipmentsTableBodyRow.appendChild(equipmentsTableBodyColumn);
        });
        equipmentsTableBody.appendChild(equipmentsTableBodyRow);
    });
    equipmentsTableHead.appendChild(equipmentsTableHeadRow);
    equipmentsTable.appendChild(equipmentsTableHead);
    equipmentsTable.appendChild(equipmentsTableBody);
    equipmentsTableContainer.appendChild(equipmentsTable);
}

async function loadEquipments(){
    let equipmentsResponse = null;
    let equipmentsJson = null
    try {
        equipmentsResponse = await fetch('./static/equipments.json')
        equipmentsJson =  await equipmentsResponse.json()

        console.log('uuu equipmentsJson: ',equipmentsJson );
        return equipmentsJson;
    } catch(error) {
        console.log(error);
    }
    return equipmentsJson;
}

drawEquipmentsTable();