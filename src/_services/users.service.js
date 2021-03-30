import { fetchWrapper } from '../helpers';

export const usersService = {
  getAll,
  getById,
  update,
  deleteUser,
};

function getAll() {
  return fetchWrapper.get('products');
}

function getById(id) {
  return fetchWrapper.get(`products/${id}`);
}

function update({ id, ...user }) {
  return fetchWrapper.put(`users/${id}`, user);
}

function deleteUser(id) {
  console.log(id);
  return fetchWrapper._delete(`users/${id}`);
}

