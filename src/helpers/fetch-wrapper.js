import { authService } from '../_services';
import { usersService } from '../_services';

const BASEAPIURL = "http://localhost:8000/api/";

export const fetchWrapper = {
  get,
  post,
  put,
  _delete,
};

async function get(url) {
  const requestOptions = {
    method: 'GET',
    headers: getHeaders(),
  };
  const response = await fetch(
    BASEAPIURL + url,
    requestOptions
  );

  return handleResponse(response);
}

async function post(url, data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: getHeaders(),
  };
  const response = await fetch(
    BASEAPIURL + url,
    requestOptions
  );

  return handleResponse(response);
}

async function put(url, data) {
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: getHeaders(),
  };
  const response = await fetch(
    BASEAPIURL + url,
    requestOptions
  );

  return handleResponse(response);
}

async function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
    headers: getHeaders(),
  };
  const response = await fetch(
    BASEAPIURL + url,
    requestOptions
  );

  return handleResponse(response);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 404) window.location = "/404";

      const error = data?.message || "Unknown error";

      return Promise.reject(error);
    }
    return data;
  })
}

function getHeaders() {
  let headers = new Headers();
  headers.append('Content-Type', "application/json");
  if (authService.isLoggedIn())
    headers.append('Authorization', `Bearer ${authService.currentUserValue.token}`);

  return headers;
}