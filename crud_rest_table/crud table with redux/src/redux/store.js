import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { crudReducer } from "./reducer";

const middlewares = [thunk, logger];

export const store = createStore(crudReducer, applyMiddleware(...middlewares));
