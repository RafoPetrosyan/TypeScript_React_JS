import { combineReducers } from 'redux';
import { users } from "./users";

export const rootReducer = combineReducers({
    user: users,
});

export type RootState = ReturnType<typeof rootReducer>