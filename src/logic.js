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
    constructor(title, todoList = []){
        this.title = title;
        this.todoList = todoList;
    }
    //Methods to add and remove todos
    addTodo(todo){
        this.todoList.push(todo);
    }
    removeTodo(todo){
        let index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
    }
    //Getter to return list
    get displayList(){
        return this.todoList;
    }


}
export {Todo, Project};