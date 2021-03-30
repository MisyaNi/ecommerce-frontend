import { fetchWrapper } from '../helpers';
const CURRENTUSER = "currentUser";

export const authService = {
  isLoggedIn,
  login,
  logout,
  register,
  currentUserValue: JSON.parse(localStorage.getItem(CURRENTUSER)),
};

function isLoggedIn() {
  return localStorage.getItem(CURRENTUSER) !== null;
}

async function login(user) {
  const result = await fetchWrapper.post('login', user);
  localStorage.setItem(CURRENTUSER, JSON.stringify(result.data));
}

function logout() {
  localStorage.removeItem(CURRENTUSER);
}

async function register(user) {
  const result = await fetchWrapper.post('register', user);
  localStorage.setItem(CURRENTUSER, JSON.stringify(result.data))
}