import { HobbiesReducer } from '../../interfaces'
import { HobbiesActionsInterface } from '../../interfaces/actionCreator'
import {
    REQUEST, SUCCESS, FAILURE, GET_USERS, GET_HOBBIES
} from '../../constants/storeActions'

/*
* In real app I would get data for each user
* separately using REQUEST, SUCCESS, FAILURE
* actions and switching isFailed, isFetching
*
* */

const initialState: HobbiesReducer = {
    collection: {
        '1': [{
            id: '1',
            passionLevel: 'Medium',
            name: 'Football',
            year: 2001,
            userId: '1'
        },
            {
                id: '2',
                passionLevel: 'Low',
                name: 'Work',
                year: 2001,
                userId: '1'
            }],
        '2': [{
            id: '1',
            passionLevel: 'High',
            name: 'School',
            year: 1992,
            userId: '2'
        },
            {
                id: '2',
                passionLevel: 'Low',
                name: 'Work',
                year: 2001,
                userId: '2'
            }],
        '3': [{
            id: '1',
            passionLevel: 'High',
            name: 'Family',
            year: 1992,
            userId: '3'
        },
            {
                id: '2',
                passionLevel: 'Low',
                name: 'Work',
                year: 2001,
                userId: '3'
            }]
    },
    isFailed: false,
    isFetching: false,
    currentUser: '1'
};

export function hobbiesReducer(
    state = initialState,
    action: HobbiesActionsInterface
): HobbiesReducer{
    const { type, payload } = action;
    switch (type) {
        case GET_HOBBIES:
            return {
                ...state,
                currentUser: payload
            };
        default:
            return state
    }
}