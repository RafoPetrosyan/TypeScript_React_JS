import { UserAction, UserActionTypes, UserState } from "../types/users";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

export const users = (state = initialState, action: UserAction): UserState => {

    switch (action.type) {
        case UserActionTypes.FETCH_USER_REQUEST: {
            return {
                ...state,
                error: null,
                loading: true,
            }
        }
        case UserActionTypes.FETCH_USER_SUCCESS: {
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        }
        case UserActionTypes.FETCH_USER_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        }

        default: {
            return state;
        }
    }
};