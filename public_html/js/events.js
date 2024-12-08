const CARD_TITLES =  {
    event: "Событие:",
    eventData: "Дата:"
    
};

callBack = () => { drawEvent();}

function drawEvent(){
    const event = getItem(EVENTS_KEY);
    if(event) {
        const eventArray = JSON.parse(event);
        console.log ('eventArray',eventArray)
        eventArray.map((event) => {
            createEventCard(event);
        })
    }

}

function createEventCard(event){
    const eventContainer = document.getElementsByClassName('cardsContainer')[0];
    const eventCard = document.createElement('div');
    eventCard.classList.add("eventCard");
    if(event.eventUrgent){
        eventCard.classList.add("eventUrgentCard");
    }

    Object.keys(event).forEach(key => {
        // console.log('key', key);        // the name of the current key.
        // console.log(treatment[key]);// the value of the current key.
        if(key !== 'id'){
            let cardTitleElement = document.createElement('p');
            let cardTitle = document.createTextNode(CARD_TITLES[key]);
            cardTitleElement.appendChild(cardTitle);
            eventCard.appendChild(cardTitleElement);

            let cardValueElement = document.createElement('p');
            let cardValue = document.createTextNode(event[key]);
            cardValueElement.appendChild(cardValue);
            eventCard.appendChild(cardValueElement);
        }
    });
    // const treatmentDetails = document.createElement('details');
    const summary =  document.createElement('h4');
    const summaryTitle =  document.createTextNode('Выполнение');

    let actionContainer =  document.createElement('div');
    actionContainer.className = "eventActions";

    let actionButton = document.createElement("button");
    actionButton.className = "primaryButton";
    actionButton.id = event.id;
    const buttonTitle =  document.createTextNode('Завершить');
    actionButton.appendChild(buttonTitle);
    actionContainer.appendChild(actionButton);
    actionButton.onclick = (e) => {
        console.log('target', e.target.id)
        deleteItemFromJson(EVENTS_KEY, e.target.id);
        location.reload();
    }

    // treatmentDetails.appendChild(actionContainer);
    summary.appendChild(summaryTitle);


    eventCard.appendChild(summary);
    eventCard.appendChild(actionContainer);


    eventContainer.appendChild(eventCard);
}

