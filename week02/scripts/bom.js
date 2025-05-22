const inputElement = document.getElementById("favchap");
const buttonElement = document.querySelector("button");
const listElement = document.getElementById("list");

buttonElement.addEventListener("click", function() {
    let value = inputElement.value;
    if (value.trim() === "") {
        alert("Please enter a value");
        return;
    }
    addItemList(value);
});


function addItemList(value){
    const listItem = document.createElement("li");
    listItem.textContent = value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", function() {
        listElement.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);
    listElement.appendChild(listItem);
    inputElement.value = "";
    inputElement.style.fintW
}