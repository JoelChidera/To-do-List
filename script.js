// Get references to elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to create a new task item
function createTask(taskText) {
  // Create the list item
  const li = document.createElement('li');
  li.classList.add('task-item'); // Add a class for styling

  // Add the task text to the list item
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  li.appendChild(taskContent);

  // Create a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Add event listener to mark as completed
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Add event listener to delete the task
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent triggering the 'click' event for marking as completed
    li.classList.add('deleted'); // Add deleted class for animation
    setTimeout(() => {
      li.remove(); // Remove the task after the animation
    }, 500); // Wait for the slide-out animation to finish
  });

  // Append the delete button to the list item
  li.appendChild(deleteBtn);

  // Append the list item to the task list
  taskList.appendChild(li);
}

// Event listener for adding a task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    createTask(taskText);
    taskInput.value = ''; // Clear input field
  }
});

// Optional: Allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
