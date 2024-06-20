// Import 
////////////////////////////////////////////////////////////
import { dom } from './dom.js';
////////////////////////////////////////////////////////////


// Frame work for a project
////////////////////////////////////////////////////////////
export class Project {
    constructor(title) {
        this.title = title;
        this.toDoList = [];
    };
    addTaskToProject(task) { 
        this.toDoList.push(task);
    }
}
////////////////////////////////////////////////////////////


// Frame work for a task
////////////////////////////////////////////////////////////
export class Task {
    constructor(title, description) {
            this.title = title;
            this.description = description;
    }
}
////////////////////////////////////////////////////////////


// Factory function
/////////////////////////////////////////////////////////////////////////////////////
const create =  (function(){


    // Create a project 
    ////////////////////////////////////////////////////////////
    function project (name) {
        const projectName = name;
        const userProject = new Project(projectName);

        console.log(userProject);

        return userProject;
    }
    ////////////////////////////////////////////////////////////


    // Create a task
    ////////////////////////////////////////////////////////////
    function task (title, description) {
        const userTask = new Task(title, description);

        return userTask;
    }
    ////////////////////////////////////////////////////////////


    return { project, task }
})()
/////////////////////////////////////////////////////////////////////////////////////


// Factory Function
/////////////////////////////////////////////////////////////////////////////////////
    const manageProjects = (function () {


        // Variables
        ////////////////////////////////////////////////////////////
        const projects = [];
        // const array = Array.from(document.getElementsByClassName('projectBtn'));
        // ////////////////////////////////////////////////////////////


        // Store the project
        ////////////////////////////////////////////////////////////
        function store (project) {
            projects.push(project);

            console.log(project);
            console.log(projects);
            }  
        ////////////////////////////////////////////////////////////


        // Delete the project
        ////////////////////////////////////////////////////////////
        function remove (project) {
            console.log(projects);
            console.log(projects.length);

            const projectIndex = projects.indexOf(project);
            projects.splice(projectIndex);


            console.log(projects);
            console.log(projects.length);
        }
        ////////////////////////////////////////////////////////////

        // Select the project
        ////////////////////////////////////////////////////////////
        function select (btn) {


            // const array = Array.from(document.getElementsByClassName('projectBtn'));
            // let project = "";
            // let button = "";
 
            // console.log(btn)
        

           

            // for ( let i = 0; i < projects.length; i++ ){
            //     if (( btn.textContent == projects[i].title && btn.classList.contains("projectBtnBlue"))|| projects[i].title == "default" ) {
                    
            //         project = projects[i];
            //         button = btn;

            //         console.log(project);
            //         console.log(btn);

            //         const index = array.indexOf(btn);
            //         const arrayWithOutPressedBtn = array.splice(index, 1);

            //         console.log(index)
            //         console.log(arrayWithOutPressedBtn) 

            //         for ( let k = 0; k < arrayWithOutPressedBtn.length; k++ ){ // prevent secondly presssed to turn blue after pressing the first button
            //             arrayWithOutPressedBtn[k].classList.remove("projectBtnBlue");
            //             console.log(array[k]);
            //         } 
            //     }                                  
            // }

            // return [ project, button ];
                            //    
            
            const array = [(document.getElementsByClassName('projectBtn'))];
        
                let project = "";
                let button = "";
                let condition = "True";
        
                for ( let i = 0; i < projects.length; i++ ){
                    if ( condition == "True" ) {
                        for  ( let j = 0; j < array.length; j++ ) {
                            if ( (array[j].classList.contains("projectBtnBlue") && array[j].textContent == projects[i].title) || projects[i].title == "default" ) {
                                
                                project = projects[i];
                                button = array[j];
    
                                console.log(array[j])

                                for ( let k = 0; k < array.length; k++ ){ // prevent secondly presssed to turn blue after pressing the first button
                                    array[k].classList.remove("projectBtnBlue");
                                    console.log(array[k]);
                                }
    
                                condition = "False";
                            }                        
                        } 
                    }  
                }

                console.log(projects)
                console.log(project)
                console.log(button)
                return [ project, button ];
                
        }
        ////////////////////////////////////////////////////////////


        // Add task to the project
        ////////////////////////////////////////////////////////////
        function addTask (project, task) {
            console.log(project);
            console.log(task)


            project.addTaskToProject(task);
        }
        ////////////////////////////////////////////////////////////


        // Check the number of projects
        ////////////////////////////////////////////////////////////
        function check() {
            let length = ""

            if (projects.length == 0 ) {
                length = "empty";

                return length;
            }
            else {
                length = "not empty"

                return length;
            }
        }
        ////////////////////////////////////////////////////////////


        // const array = [(document.getElementsByClassName('projectBtn'))];
        // for ( let i = 0; i < array.length; i++ ){

        // }
    return { store, remove, select, addTask, check };
})()
////////////////////////////////////////////////////////////


// Export
////////////////////////////////////////////////////////////
export { manageProjects, create };
////////////////////////////////////////////////////////////
