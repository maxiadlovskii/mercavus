import { UsersReducer } from '../../interfaces'
import {
    REQUEST, SUCCESS, FAILURE, GET_USERS, GET_HOBBIES
} from '../../constants/storeActions'

const initialState: UsersReducer = {
    collection: [
        {id: '1', name: 'Dexter'},
        {id: '2', name: 'Jessy'},
        {id: '3', name: 'Walter'}
    ],
    isFailed: false,
    isFetching: false
};

export function usersReducer(
    state = initialState,
    action: any
): UsersReducer{
    const { type } = action;
    switch (type) {
        case `${GET_USERS}${REQUEST}`:
            return state;
        case `${GET_USERS}${FAILURE}`:
            return state;
        case `${GET_USERS}${SUCCESS}`:
            return state;
        default:
            return state
    }
}