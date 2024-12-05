
const TREATMENTS_KEY = "treatments";

function setJsonItem(key, json) {
    //removeItem(key);
    //return;
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

function getItem(key) {
 return localStorage.getItem(key)
}

function removeItem(key) {
    localStorage.removeItem(key);
}