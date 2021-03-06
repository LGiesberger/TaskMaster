import authHeader from '../utils/auth_helper';
const SERVER_URL = 'http://localhost:3001';

export function registerUser(data) {
  return fetch(`${SERVER_URL}/register`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function loginUser(credentials) {
  return fetch(`${SERVER_URL}/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(credentials),
  }).then((res) => res.json());
}

export function persistUser() {
  return fetch(`${SERVER_URL}/profile`, {
    method: 'GET',
    headers: authHeader(),
  }).then((res) => res.json());
}

export function editUser(data) {
  return fetch(`${SERVER_URL}/profile`, {
    method: 'PUT',
    headers: authHeader(true),
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
