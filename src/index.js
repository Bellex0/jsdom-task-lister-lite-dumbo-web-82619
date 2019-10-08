document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", handleForm)

 function handleForm(evt){ 
   evt.preventDefault()
   let form = evt.target
   let newTaskInput = form.newtaskdescription
   let newTask = newTaskInput.value

   let newTaskLi = document.createElement("li")

   let buttonX = document.createElement("button")
   buttonX.innerText = "X"

   buttonX.addEventListener("click", function(e) {
     e.target.parentNode.remove()
   })

   newTaskLi.innerText = newTask
   newTaskLi.append(buttonX)

let taskColorInput = form.priority
let taskColor = taskColorInput.value


  
   newTaskLi.style.color = taskColor
   document.querySelector("#tasks").append(newTaskLi)
 }

});



