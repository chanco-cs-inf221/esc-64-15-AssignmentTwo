var userList = [];
var idNo = 1;
// window.onload = init;

addProjects = () => {
 
    var userDetails = {
        projectName: document.getElementById('projectName').value,
       projectDescription: document.getElementById('projectDescription').value
    }

    if (userDetails.projectName !== "" && userDetails.projectDescription !=="") {
        
        userList = JSON.parse(localStorage.getItem("Projects")) || []; 

        if (userList) {
            userList.push(userDetails);

        localStorage.setItem('Projects', JSON.stringify(userList));

        alert("Project saved successfully...");

        }else{
            alert("Failed to save the project...")
        }
    }else{
        alert("project fields should not be empty!");
    }
   
}