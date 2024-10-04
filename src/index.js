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
        //Display list of projects
    }
    //If not load new default empty project
    else{
        //Create empty project list array and add default project to it
        const projectList = [];
        const defaultProject = new Project('Default Project');
        //Save project list to local storage
        storeObject(projectList, 'project list');
        //Display project
        
    }
  })();

  function displayList(list){
    //Iterates through stored list and adds it to dom
  }
