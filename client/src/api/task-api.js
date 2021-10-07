import authHeader from '../utils/auth_helper';

const SERVER_URL = 'http://localhost:3001';

export function getSingleTask(taskId) {
  return fetch(`${SERVER_URL}/edit/${taskId}`, {
    method: 'GET',
    headers: authHeader(),
  }).then((res) => res.json());
}

export function getAllTasksForDay(numericalDate) {
  return fetch(`${SERVER_URL}/tasks`, {
    method: 'POST',
    headers: authHeader(true),
    body: JSON.stringify({ numericalDate }),
  }).then((res) => res.json());
}

export function createTask(title, date) {
  return fetch(`${SERVER_URL}/task`, {
    method: 'POST',
    headers: authHeader(true),
    body: JSON.stringify({ title, date }),
  }).then((res) => res.json());
}

export function deleteTask(taskId) {
  fetch(`${SERVER_URL}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: authHeader(),
  });
}

export function setTaskCompletedProp(taskId) {
  return fetch(`${SERVER_URL}/tasks/${taskId}/status`, {
    method: 'PUT',
    headers: authHeader(),
  }).then((res) => res.json());
}

export function editTask(taskId, newTitle, date) {
  fetch(`${SERVER_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: authHeader(true),
    body: JSON.stringify({ newTitle, date }),
  });
}

export function setDateCompletedProp(numericalDate) {
  fetch(`${SERVER_URL}/calendar`, {
    method: 'PUT',
    headers: authHeader(true),
    body: JSON.stringify({ numericalDate }),
  });
}
