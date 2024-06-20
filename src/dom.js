// Import 
////////////////////////////////////////////////////////////
import { manageProjects } from './function.js';
////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////
const dom = (function() {


    // Variables
    ////////////////////////////////////////////////////////////
    const main = document.getElementById("main");
    const projectsDiv = document.getElementById("projectsDiv");
    ////////////////////////////////////////////////////////////
    
    
    function createProjectDiv (project) {


        // Create element
        ////////////////////////////////////////////////////////////
        const projectDiv = document.createElement("div");
        const projectTitle = document.createElement("div");  
        const projectToDoList = document.createElement("div");  
        const removeProjectBtn = document.createElement("button");
        ////////////////////////////////////////////////////////////
        

        // Append
        ////////////////////////////////////////////////////////////
        main.appendChild(projectDiv);
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectToDoList);
        projectDiv.appendChild(removeProjectBtn);
        ////////////////////////////////////////////////////////////


        // ClassList and ID
        ////////////////////////////////////////////////////////////
        projectDiv.classList.add("projectDiv");
        projectDiv.id = project.title;
        projectTitle.classList.add("projectTitle");
        projectToDoList.classList.add("projectToDoList");
        projectToDoList.id = project.title;
        removeProjectBtn.id = project.title;
        ////////////////////////////////////////////////////////////

        

        // TextContent
        ////////////////////////////////////////////////////////////
        projectTitle.textContent = project.title;
        removeProjectBtn.textContent = "REMOVE";
        ////////////////////////////////////////////////////////////

        
        // Remove project button
        ////////////////////////////////////////////////////////////
        removeProjectBtn.addEventListener('click', () => {
            
                projectDiv.remove();
                
                manageProjects.remove(project);

                const array = Array.from(document.getElementsByClassName('projectBtn'));
                for ( let i = 0; i < array.length; i++ ) {
                    if (array[i].textContent == project.title)
                    array[i].remove();
                };
                    
    
            })
        ////////////////////////////////////////////////////////////
    
        console.log(project.title);

        return projectToDoList;

        };

    
    
    function createTaskDiv (task, container){
        const todolistDiv = document.createElement("div");
        const divOfSelectedProject = document.getElementById(container.title);
   
        console.log(container.title);
;        console.log(divOfSelectedProject)

        divOfSelectedProject.appendChild(todolistDiv);
   


        todolistDiv.classList.add("todolistDiv")

        todolistDiv.innerHTML = `${task.title}<br>${task.description}`;
        
        todolistDiv.classList.add("todolistDiv");
    }

    function createProjectsBtns (project) {
        const btn = document.createElement("button");

        btn.type = "button";
        btn.classList.add("projectBtn");
        btn.textContent = project.title;

        console.log(btn)
        
        btn.addEventListener('click', function () {
            console.log(this)

            btn.classList.add("projectBtnBlue");
            
        })

        
                    

        console.log(btn)

        projectsDiv.appendChild(btn);

        return btn;
    }

    function unselectButton (button) {
        button.classList.remove("projectBtnBlue");

        }

return { createProjectDiv, createTaskDiv, createProjectsBtns, unselectButton }

})()

/////////////////////////////////////////////////////////////////////////////////////


export { dom };


////////////////////////////////////////////////////////


