const CARD_TITLES =  {
    patient: "Пациент:",
    hospitalWard: "Палата:",
    treatment: "Лечение (процедура):"
};

callBack = () => { drawTreatments();}

function drawTreatments(){
    const treatments = getItem(TREATMENTS_KEY);
    if(treatments) {
        const treatmentsArray = JSON.parse(treatments);
        treatmentsArray.map((treatment) => {
            createTreatmentCard(treatment);
        })
    }

}

function createTreatmentCard(treatment){
    const treatmensContainer = document.getElementsByClassName('cardsContainer')[0];
    const treatmentCard = document.createElement('div');
    treatmentCard.classList.add("treatmentCard");
    if(treatment.treatmentUrgent){
        treatmentCard.classList.add("treatmentUrgentCard");
    }

    Object.keys(treatment).forEach(key => {
        // console.log('key', key);        // the name of the current key.
        // console.log(treatment[key]);// the value of the current key.
        if(key !== 'id' && key !== 'treatmentUrgent'){
            let cardTitleElement = document.createElement('p');
            let cardTitle = document.createTextNode(CARD_TITLES[key]);
            cardTitleElement.appendChild(cardTitle);
            treatmentCard.appendChild(cardTitleElement);

            let cardValueElement = document.createElement('p');
            let cardValue = document.createTextNode(treatment[key]);
            cardValueElement.appendChild(cardValue);
            treatmentCard.appendChild(cardValueElement);
        }
    });
    // const treatmentDetails = document.createElement('details');
    const summary =  document.createElement('h4');
    const summaryTitle =  document.createTextNode('Выполнение');

    let actionContainer =  document.createElement('div');
    actionContainer.className = "treatmentActions";

    let input = document.createElement("input");
    input.type = "text";
    input.className = "doctor";
    actionContainer.appendChild(input);

    let actionButton = document.createElement("button");
    actionButton.className = "primaryButton";
    actionButton.id = treatment.id;
    const buttonTitle =  document.createTextNode('Завершить');
    actionButton.appendChild(buttonTitle);
    actionContainer.appendChild(actionButton);
    actionButton.onclick = (e) => {
        console.log('target', e.target.id)
        deleteItemFromJson(TREATMENTS_KEY, e.target.id);
        location.reload();
    }

    // treatmentDetails.appendChild(actionContainer);
    summary.appendChild(summaryTitle);


    treatmentCard.appendChild(summary);
    treatmentCard.appendChild(actionContainer);


    treatmensContainer.appendChild(treatmentCard);
}

