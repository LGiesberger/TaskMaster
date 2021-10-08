export default function authHeader(contentType) {
  // return authorization header with jwt token
  let token = localStorage.getItem('token');

  if (token && contentType) {
    return {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  } else if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
