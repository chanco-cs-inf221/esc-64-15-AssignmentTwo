
  var fromLocalStorage2 = localStorage.getItem("project_description");
  var pDescr = JSON.parse(fromLocalStorage2);

  var h3 = document.querySelector('h3');

  for (let index = 0; index < pDescr.length; index++) {

      const projDescr = pDescr[index];
     var listItem2 = document.createElement("p");
     listItem2.textContent = (index + 1) +". "+ projDescr.value;
     h3.appendChild(listItem2);
  }