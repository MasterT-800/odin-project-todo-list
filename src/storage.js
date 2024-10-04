//Handles local storage logic
//Locally stores object
//Must make two sets of key value pairs that are arrays that get added to Projects and Todos
function storeObject(object, key){
    localStorage.setItem(key, JSON.stringify(object));
}
//Retrueves locally stored object
function getObject(key){
    return JSON.parse(localStorage.getItem(key));
}

export{storeObject, getObject};