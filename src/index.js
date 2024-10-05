import "./styles.css";
import { Todo, Project } from "./logic.js";
import { storeObject, getObject } from "./storage.js";

//Dom manipulation of logic setting user display elements
//Display default project on initial load
(function onLoad() {
    //Check to see if projects exist in local storage, load , and display them
    if(localStorage.length > 0){
        //Retrieve locally stored list and save to it variable
        const retrievedList = getObject('project list');
        console.log(retrievedList);
        //Create new Project objects out of retrieved json object
        //Returns method funtionality to stored objects
        //Display list of projects
    }
    //If not load new default empty project
    else{
        //Create empty project list array and add default project to it
        const projectList = [];
        const defaultProject = new Project('Default Project');
        projectList.push(defaultProject);
        //Save project list to local storage
        storeObject(projectList, 'project list');
        //Display project
        
    }
  })();
  
//Restores method functionality to objects rertrieved from local storage
function restoreMethods(project){

}

function displayList(list){
    //Iterates through stored list and adds it to dom
    //Iterate through each todo list and add each item to dom
    //Add edit and delete buttons to todos
}

//Create new todo to project then save to local storage
function addTodo(){
    //Add to todo list in project
    //Save to local storage
}
//Create new project and save to local storage
function addProject(title){
    const newProject = new Project(title);
    //Save to storage
    const retrievedList = getObject('project list');
    retrievedList.push(newProject);
    storeObject(retrievedList, 'project list');
  }