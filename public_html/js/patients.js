const HEADER_TITLES =  {
    fio: "ФИО",
    weight: "Вес",
    age: "Возраст",
    diagnosis: "Диагноз",
    hospitalWard: "Палата"
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

    const treatmentTableHeadColumn = document.createElement('th')
    const headerTreatmentTitleText = document.createTextNode("Лечение");
    treatmentTableHeadColumn.appendChild(headerTreatmentTitleText);
    patientsTableHeadRow.appendChild(treatmentTableHeadColumn);

    patients.map((person) => {
        const  patiensTableBodyRow = document.createElement('tr');
        Object.values(person).forEach(function(value) {
            const patiensTableBodyColumn = document.createElement('th')
            const columnText = document.createTextNode(value);
            patiensTableBodyColumn.appendChild(columnText);
            patiensTableBodyRow.appendChild(patiensTableBodyColumn);
        });
        const treatmentTableBodyColumn = document.createElement('th')

        const treatmentContainer = document.createElement('div');
        treatmentContainer.classList.add("treatmentContainer");
        const treatmentButton = document.createElement('button');
        const treatmentButtonText = document.createTextNode('Назначить лечение');
        treatmentButton.appendChild(treatmentButtonText);
        treatmentButton.classList.add("primaryButton");
        treatmentContainer.appendChild(treatmentButton);

        treatmentButton.onclick = () => {
            const popUpElement = document.getElementById("popup");
            popUpElement.show();
            const popupActionBtn = popUpElement.getElementsByClassName('addTreatment')[0];
            popupActionBtn.onclick = () => {
                const treatment = popUpElement.getElementsByClassName('treatment')[0];
                const treatmentUrgent = popUpElement.getElementsByClassName('treatmentUrgent')[0];
                console.log('treatment', treatment.value);
                console.log('treatmentUrgent', treatmentUrgent.checked);
                addTreatment({
                    patient: person.fio,
                    hospitalWard: person.hospitalWard,
                    treatment: treatment.value,
                    treatmentUrgent: treatmentUrgent.checked
                })
                treatment.value = '';
                treatmentUrgent.checked = false;
                popUpElement.close();
            }
        }

        treatmentTableBodyColumn.appendChild(treatmentContainer);
        patiensTableBodyRow.appendChild(treatmentTableBodyColumn);

        patientsTableBody.appendChild(patiensTableBodyRow);
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

        return patientsJson;
    } catch(error) {
        console.log(error);
    }
    return patientsJson;
}

drawPatientsTable();


