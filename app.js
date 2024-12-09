const inputBox = document.querySelector("#input");
const button = document.querySelector("#btn");
const listcontainer = document.querySelector(".list-container");

button.addEventListener("click", () => {
  addToDolist();
});

const addToDolist = () => {
  if (inputBox.value === "") {
    alert("Please enter your to do ......");
  } else {
    const list = document.createElement("li");
    list.innerHTML = inputBox.value;
    listcontainer.appendChild(list);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.appendChild(span);
  }
  inputBox.value = "";
saveData();
};

listcontainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

const saveData = () =>{
    localStorage.setItem("data", listcontainer.innerHTML);
};

const showData = () =>{
    listcontainer.innerHTML = localStorage.getItem("data");
}
showData();
