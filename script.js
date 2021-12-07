const addBtn = document.querySelector('#add-btn')
const newTask = document.querySelector('#new-task-input')
const pendingTasksList = document.querySelector('#pending-tasks')
const completeTasksList = document.querySelector('#complete-tasks')
const pendingEmptyMsg = document.getElementById('pending-empty-msg')
const completeEmptyMsg =  document.getElementById('complete-empty-msg')

addBtn.addEventListener('click', handleAddClick)

function handleAddClick(e) {
  e.preventDefault()

  pendingEmptyMsg.style.display = 'none'

  const newTaskValue = newTask.value
  newPendingTask = `<li class="pending-checkbox">
                    <input type="checkbox" class="pending" onclick="handleCheck(event)"> ${newTaskValue}
                    <span class="remove" onclick="removeTask(event)"> REMOVE </span>
                    </li>`
  pendingTasksList.innerHTML += newPendingTask
  newTask.value = ""
}

function removeTask(event) {
  listElement = event.target.parentElement
  listElement.remove()

  checkForEmptyLists()
}

function checkForEmptyLists() {
  if (pendingTasksList.children.length == 0 ) pendingEmptyMsg.style.display = 'block'
  if (completeTasksList.children.length == 0 ) completeEmptyMsg.style.display = 'block'

  if (pendingTasksList.children.length > 0 ) pendingEmptyMsg.style.display = 'none'
  if (completeTasksList.children.length > 0 ) completeEmptyMsg.style.display = 'none'
}

function handleCheck(event) {

  const toDoItem = event.target 
  if (toDoItem.classList.contains("pending")) {
    toDoItem.classList.remove("pending")
    toDoItem.classList.add("complete")
    completeTasksList.appendChild(toDoItem.parentElement)
    completeEmptyMsg.style.display = 'none'
    checkForEmptyLists()
  } else if (toDoItem.classList.contains("complete")) {
    toDoItem.classList.remove("complete")
    toDoItem.classList.add("pending")
    pendingTasksList.appendChild(toDoItem.parentElement)
    checkForEmptyLists()
  } else {
    console.log('error - your element has no class')
  }
}




