export enum UserActionTypes {
    FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
};

export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER_REQUEST;
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: any[];
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;