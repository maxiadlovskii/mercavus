import { HobbiesReducer } from '../../interfaces'
import {
    REQUEST, SUCCESS, FAILURE, GET_USERS, GET_HOBBIES
} from '../../constants/storeActions'

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
    currentUser: ''
};

export function hobbiesReducer(
    state = initialState,
    action: any
): HobbiesReducer{
    const { type } = action;
    switch (type) {
        case `${GET_HOBBIES}${REQUEST}`:
            return state;
        case `${GET_HOBBIES}${FAILURE}`:
            return state;
        case `${GET_HOBBIES}${SUCCESS}`:
            return state;
        default:
            return state
    }
}