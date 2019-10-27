import { UsersReducer } from '../../interfaces'
import { UserActionsInterface } from '../../interfaces/actionCreator'
import {
    PUT_USER
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
    action: UserActionsInterface
): UsersReducer{
    const { type, payload } = action;
    switch (type) {
        case PUT_USER:
            return {
                ...state,
                collection: [...state.collection, payload]
            };
        default:
            return state
    }
}