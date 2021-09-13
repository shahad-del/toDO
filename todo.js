
function add() {
    var toDoText = document.getElementById("toDo").value;
    // document.getElementById("p").innerText = input;
    document.getElementById("outputList").innerHTML += "<li>"+toDoText+"</li>";
    // document.getElementById("outputList").innerHTML = "";
}