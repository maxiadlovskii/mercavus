import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { hobbiesReducer } from "./reducers/hobbyes";
import { usersReducer } from "./reducers/users"


const rootReducer = combineReducers({
    hobbies: hobbiesReducer,
    users: usersReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        middleWareEnhancer
    );

    return store;
}
