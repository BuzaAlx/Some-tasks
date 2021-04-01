import { crudTypes } from "./types";

export const setUsersAction = (users) => ({
  type: crudTypes.SET_USERS,
  payload: users,
});

export const updateUserAction = (user) => ({
  type: crudTypes.UPDATE_USER,
  payload: user,
});

export const addUserAction = (user) => ({
  type: crudTypes.ADD_USER,
  payload: user,
});

export const deleteUserAction = (id) => ({
  type: crudTypes.DELETE_USER,
  payload: id,
});

export const errorAction = (text) => ({
  type: crudTypes.SET_ERROR,
  payload: text,
});

export const loadingAction = (payload) => ({
  type: crudTypes.SET_LOADING,
  payload: payload,
});
