const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
	const task = taskInput.value;
	if (task !== '') {
		const taskElement = document.createElement('li');
		taskElement.textContent = task;
		const deleteIcon = document.createElement('i');
		deleteIcon.className = 'fas fa-trash-alt delete-icon';
		deleteIcon.onclick = function() {
			taskElement.remove();
		};
		taskElement.appendChild(deleteIcon);
		taskList.appendChild(taskElement);
		taskInput.value = '';
	}
}
