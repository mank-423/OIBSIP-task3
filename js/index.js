function addTask() {
    // Get the input value
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();


    // Check if the input is not empty
    if (task !== '') {
      // Create a new list item
      const listItem = document.createElement('li');

      // Create a span element for the task text
      const taskText = document.createElement('span');
      taskText.textContent = task;
      listItem.appendChild(taskText);

      // Create a button for removing the task
      const removeBtn = document.createElement('button');
      removeBtn.className = 'btn-remove';
      removeBtn.textContent = ' ✖';
      removeBtn.textContent.className = 'fnt';
      removeBtn.onclick = removeTask;
      listItem.appendChild(removeBtn);

      // Create a button for marking the task as complete
      const cmpBtn = document.createElement('button');
      cmpBtn.textContent = ' ✔ ';
      cmpBtn.className = 'btn-complete';
      cmpBtn.onclick = markComplete;
      listItem.appendChild(cmpBtn);

      // Add the list item to the task list
      const taskList = document.getElementById('taskList');
      taskList.appendChild(listItem);

      taskInput.value = '';
    }
  }

  // Function to remove a task
  function removeTask(event) {
    const listItem = event.target.parentNode;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(listItem);
  }

  // Function to mark a task as complete
  function markComplete(event) {
    const taskText = event.target.parentNode.firstChild;
    taskText.style.textDecoration = 'line-through';
    completeInput(taskText.innerText);
  }

  //Function to put the task in completed section
  function completeInput(value){
    //Grabbing the element for making list
    const ulComplete = document.getElementById('taskCompleted');
    //Creating list
    const completeListItem = document.createElement('li');
    const textList = document.createElement('span');
    textList.textContent = value;
    completeListItem.appendChild(textList);
    
    //Entering the list in the component grabbed
    ulComplete.appendChild(completeListItem);
  }
