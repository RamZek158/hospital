
const TREATMENTS_KEY = "treatments";

function setJsonItem(key, json) {
    let lsData = localStorage.getItem(key);
    let jsonData;

    if(lsData != null || lsData != undefined){
        jsonData = JSON.parse(lsData);
    } else {
        jsonData = [];
    }
    jsonData.push(json);
    localStorage.setItem(key, JSON.stringify(jsonData));
}

function deleteItemFromJson(key, id) {
    let lsData = localStorage.getItem(key);

    if(lsData){
        if(lsData.length){
            let jsonData = JSON.parse(lsData);
            let newJsonData = [];
            jsonData.map((jsData) => {
                if(jsData.id !== id) {
                    newJsonData.push(jsData)
                }
            })
            localStorage.setItem(key, JSON.stringify(newJsonData));
        }
        if(lsData.length == 0) {
            removeItem(key);
        }
    }
}

function getItem(key) {
    return localStorage.getItem(key)
}

function removeItem(key) {
    localStorage.removeItem(key);
}