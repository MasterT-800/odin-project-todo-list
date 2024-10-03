//Handles local storage logic
//Locally stores object
function storeObject(object){
    localStorage.setItem(object.title, JSON.stringify(object));
    console.log(JSON.parse(localStorage.getItem(object.title)));
}
//Retrueves locally stored object
function getObject(object){
    return JSON.parse(localStorage.getItem(object.title));
}

export{storeObject, getObject};