// chrome://extensions/
let myLeads = [];
const inputEl = document.getElementById("input-el"); //const means name can't be reassign
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

//local storage saves our work on chrome
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
 console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}
//add event listener to the input button to replace onclick on html
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""; //clear input field

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
 
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li) same as

    //listItems += "<li><a target='_blank' href = '" + myLeads[i] + "' >" +  myLeads[i] +"</a></li>";
    listItems += `
    <li>
        <a target='_blank' href = '${myLeads[i]}'>
          ${myLeads[i]}
          </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}
