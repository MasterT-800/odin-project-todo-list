import "./styles.css";
import { Todo, Project } from "./logic.js";
import { storeObject, getObject } from "./storage.js";

//Dom manipulation of logic setting user display elements
const body = document.querySelector('body');
//Display default project on initial load
(function onLoad() {
    //Check to see if projects exist in local storage, load , and display them
    if(localStorage.length > 0){
        //Retrieve locally stored list and save to it variable
        const retrievedList = getObject('project list');
        createProjectButton();
        //Returns method funtionality to stored objects
        retrievedList.forEach(item => {
            let restoredItem = restoreMethods(item);
        //Display list of projects
            displayList(restoredItem);
        });
    }
    //If not load new default empty project
    else{
        //Create empty project list array and add default project to it
        const projectList = [];
        const defaultProject = new Project('Default Project');
        projectList.push(defaultProject);
        //Additional test project with todo list
        const testProject = new Project('test');
        const testTodo = new Todo('test','testing methods','now','top');
        testProject.addTodo(testTodo);
        projectList.push(testProject);
        //Save project list to local storage
        storeObject(projectList, 'project list');
        //Display project
        
    }
  })();
  
//Restores method functionality to objects rertrieved from local storage
function restoreMethods(project){
    const restoredProject = new Project(project.title, project.todoList);
    return restoredProject;
}

function displayList(listObject){
    //Iterates through stored list and adds it to dom
    const projectDiv = document.createElement('div');
    projectDiv.textContent = listObject.title;
    const projectUL = document.createElement('ul');
    //Add todo button
    body.appendChild(projectDiv);
    projectDiv.appendChild(projectUL);
    //Iterate through each todo list and add each item to dom
        for(let i = 0; i < listObject.todoList.length; i++){
            const todoItem = document.createElement('li');
            todoItem.textContent = listObject.todoList[i].title;
            //Add edit and delete buttons to todos
            createEditButton(todoItem, listObject, i);
            createDeleteButton(todoItem, listObject, i);
            projectUL.appendChild(todoItem);
        }
}

function createEditButton(element, listObject, index){
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.addEventListener('click',()=>{
        //Shows the entire todo object with editable fields
        //Save edited project to storage
        replaceStoredProject(listObject);
    })
    element.appendChild(editButton);
}

function createDeleteButton(element, listObject, index){
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click',()=>{
        listObject.removeTodo(index);
        //Save edited project to local storage
        replaceStoredProject(listObject);
        // //Relaod page
        window.location.reload();
    })
    element.appendChild(deleteButton);
}

//Create new todo add to project then save to local storage
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
  //Used when saving an edited project to local storage
  function replaceStoredProject(project){
    const retrievedList = getObject('project list');
    let index = retrievedList.findIndex(x=> x.title === project.title);
    retrievedList.splice(index, 1);
    retrievedList.push(project);
    storeObject(retrievedList, 'project list');
  }
function createProjectButton(){
  //Create add project button and add it to the top of page
    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = 'Add New Project';
    addProjectButton.addEventListener('click',()=>{
        let projectName = prompt('Please enter project title')
        addProject(projectName);
        window.location.reload();
    })
    body.appendChild(addProjectButton);
}