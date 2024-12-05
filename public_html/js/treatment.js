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
        console.log('key', key);        // the name of the current key.
        console.log(treatment[key]);// the value of the current key.
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

    treatmensContainer.appendChild(treatmentCard);
}

