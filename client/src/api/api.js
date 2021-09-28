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

export function getAllTasks() {
  return fetch(`${SERVER_URL}/tasks/all`, {
    method: 'GET',
  }).then((res) => res.json());
}

export function createTask(title, date) {
  return fetch(`${SERVER_URL}/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, date }),
  }).then((res) => res.json());
}

export function deleteTask(taskId) {
  fetch(`${SERVER_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  });
}

export function setTaskCompletedProp(taskId) {
  return fetch(`${SERVER_URL}/tasks/${taskId}/status`, {
    method: 'PUT',
  }).then((res) => res.json());
}

export function editTask(taskId, newTitle, date) {
  fetch(`${SERVER_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newTitle, date }),
  });
}

export function getAllDates(month) {
  fetch(`${SERVER_URL}/calendar/${month}`, {
    method: 'GET',
  });
}

export function setDateCompletedProp(numericalDate) {
  fetch(`${SERVER_URL}/calendar`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ numericalDate }),
  });
}
