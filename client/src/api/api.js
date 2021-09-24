const SERVER_URL = 'http://localhost:3001';

export async function getSingleTask(taskId) {
  return fetch(`${SERVER_URL}/edit/${taskId}`, {
    method: 'GET',
  }).then((res) => res.json());
}

export async function getAllTasksForDay(numericalDate) {
  return fetch(`${SERVER_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ numericalDate: numericalDate }),
  }).then((res) => res.json());
}

export async function createTask(title) {
  console.log('test');
  return fetch(`${SERVER_URL}/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title }),
  }).then((res) => res.json());
}

export async function deleteTask(taskId) {
  fetch(`${SERVER_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  });
}

export async function setCompletedProp(taskId) {
  fetch(`${SERVER_URL}/tasks/${taskId}/status`, {
    method: 'PUT',
  });
}

export async function editTask(taskId, newTitle) {
  console.log(taskId, newTitle);
  fetch(`${SERVER_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newTitle: newTitle }),
  });
}
