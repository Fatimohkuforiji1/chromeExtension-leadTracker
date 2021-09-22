// chrome://extensions/
let myLeads = [];
const inputEl = document.getElementById("input-el"); //const means name can't be reassign
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); //local storage saves our work on chrome
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li) same as
    //listItems += "<li><a target='_blank' href = '" + leads[i] + "' >" +  myLeads[i] +"</a></li>";
    listItems += `
    <li>
        <a target='_blank' href = '${leads[i]}'>
          ${leads[i]}
          </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
//add event listener to the input button to replace onclick on html
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""; //clear input field
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
