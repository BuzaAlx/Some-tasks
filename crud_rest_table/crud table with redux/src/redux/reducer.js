import { crudTypes } from "./types";
import {
  setUsersAction,
  updateUserAction,
  addUserAction,
  deleteUserAction,
  errorAction,
} from "./actionCreators";
import { getUsers, createNewUser, updateUser, deleteUser } from "../api/index";

const INITIAL_STATE = {
  users: [],
  error: null,
};

export const crudReducer = (state = INITIAL_STATE, action) => {
  let usersCopy;
  switch (action.type) {
    case crudTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case crudTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case crudTypes.UPDATE_USER:
      usersCopy = [...state.users];

      let userIndex = usersCopy.findIndex((u) => {
        return u.id === action.payload.id;
      });

      usersCopy[userIndex] = { ...action.payload };

      return {
        ...state,
        users: [...usersCopy],
      };
    case crudTypes.DELETE_USER:
      usersCopy = [...state.users];

      let filteredUsers = usersCopy.filter(
        (user) => user.id !== action.payload
      );

      return {
        ...state,
        users: [...filteredUsers],
      };
    default:
      return state;
  }
};

export const getUsersThunk = () => async (dispatch) => {
  let data = await getUsers();
  if (data) {
    dispatch(setUsersAction(data));
  }
};

export const updateUserThunk = (id, userData) => async (dispatch) => {
  let data = await updateUser(id, userData);
  if (data) {
    dispatch(updateUserAction(data));
  }
};

export const createUserThunk = (userData) => async (dispatch) => {
  let data = await createNewUser(userData);
  if (data) {
    dispatch(addUserAction(data));
  }
};

export const deleteUserThunk = (id) => async (dispatch) => {
  try {
    await deleteUser(id);
    dispatch(deleteUserAction(id));
  } catch (error) {
    console.log(error);
    // dispatch(errorAction("something goes wrong"));
  }
};
