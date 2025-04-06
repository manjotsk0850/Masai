const API = 'https://64fcf3a6605a026163ae7a6e.mockapi.io/tasks';
const taskList = document.getElementById('taskList');
let currentEditId = null;

async function loadTasks() {
  taskList.innerHTML = '';
  try {
    const res = await fetch(API);
    const tasks = await res.json();

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task.title} - <strong>${task.status}</strong></span>
        <div>
          <button onclick="editTask('${task.id}', '${task.title}', '${task.status}')">Edit</button>
          <button onclick="deleteTask('${task.id}')">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    });

  } catch (err) {
    alert("Error fetching tasks.");
  }
}

loadTasks();

async function deleteTask(id) {
  const confirmDel = confirm("Are you sure you want to delete this task?");
  if (!confirmDel) return;

  try {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    loadTasks();
  } catch (err) {
    alert("Failed to delete task.");
  }
}

function editTask(id, title, status) {
  currentEditId = id;
  document.getElementById('editTitle').value = title;
  document.getElementById('editStatus').value = status;
  document.getElementById('editModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('editModal').style.display = 'none';
}

async function saveEdit() {
  const newTitle = document.getElementById('editTitle').value.trim();
  const newStatus = document.getElementById('editStatus').value;

  if (!newTitle) return alert("Title can't be empty");

  try {
    await fetch(`${API}/${currentEditId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, status: newStatus })
    });
    closeModal();
    loadTasks();
  } catch (err) {
    alert("Failed to update task.");
  }
}
