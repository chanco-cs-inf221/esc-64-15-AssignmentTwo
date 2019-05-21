
var projectName = [];
var projectDescription = [];

const getForm = document.getElementById('form1');
   
        getForm.onsubmit = (e) => {
        e.preventDefault();
        
        var dataStore = localStorage.getItem("project_name");
        if (dataStore !== undefined && dataStore !== null) {
           projectName.push(project_name.value);
           projectDescription.push(project_description.value)
        } else{
         projectName = [];
           projectName.push(project_name.value);
           projectDescription.push(project_description.value);
        }
        localStorage.setItem("project_name", JSON.stringify(projectName));
        localStorage.setItem("project_description", JSON.stringify(projectDescription));
      
        getForm.reset();
        if (true) {
           alert("Project added successifly");
        }
}
