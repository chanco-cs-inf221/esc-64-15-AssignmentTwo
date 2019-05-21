  // getting the data and converting it back to an array
var projects = localStorage.getItem("Projects");
  projects = JSON.parse(projects);



if (projects) {
  var ul = document.querySelector("ul");

for (let index = 0; index < projects.length; index++) {
    const projectList = projects[index];
   var listItem =document.createElement("li");

   listItem.textContent =(index + 1) +". "+  projectList.projectName;
   ul.appendChild(listItem);

 listItem.addEventListener("click", function() {
    
    let details = document.getElementById("showDescription").innerHTML = projectList.projectDescription;
    });

    
  }

}

goBack = () => {//refreshing the page
  document.location.reload(true)
}