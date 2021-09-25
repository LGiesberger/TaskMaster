const SERVER_URL = 'http://localhost:3001';

export function getSingleTask(taskId) {
  return fetch(`${SERVER_URL}/edit/${taskId}`, {
    method: 'GET',
  }).then((res) => res.json());
}

export function getAllTasksForDay(numericalDate) {
  return fetch(`${SERVER_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ numericalDate }),
  }).then((res) => res.json());
}

export function createTask(title) {
  return fetch(`${SERVER_URL}/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  }).then((res) => res.json());
}

export function deleteTask(taskId) {
  fetch(`${SERVER_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  });
}

export function setCompletedProp(taskId) {
  return fetch(`${SERVER_URL}/tasks/${taskId}/status`, {
    method: 'PUT',
  }).then((res) => res.json());
}

export function editTask(taskId, newTitle) {
  fetch(`${SERVER_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newTitle }),
  });
}
