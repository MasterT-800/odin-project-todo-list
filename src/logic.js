//Todos are objects that can be dynamically created
class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
//Projects are objects that contain lists of todos
//Is an array of todos that can be aded and removed
class Project{
    //initial todolist set to an empty array
    todolist = [];
    constructor(title){
        this.title = title;
    }
    //Methods to add and remove todos
    //Getter to return list


}
