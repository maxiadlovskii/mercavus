import {HobbiesReducer, Hobby} from '../../interfaces'
import { HobbiesActionsInterface } from '../../interfaces/actionCreator'
import {
    PUT_HOBBY, GET_HOBBIES, DELETE_HOBBY
} from '../../constants/storeActions'
import { cloneDeep, set, get } from 'lodash'
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
                year: 2002,
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
                year: 2003,
                userId: '3'
            }]
    },
    isFailed: false,
    isFetching: false,
    currentUser: ''
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
                currentUser: payload.userId
            };
        case PUT_HOBBY:
            const pathToAdd = ['collection', payload.userId];
            return set(cloneDeep(state), pathToAdd, [...get(state, pathToAdd), payload]);
        case DELETE_HOBBY:
            const pathToDel = ['collection', payload.userId];
            const update = get(state, pathToDel)
                .filter( (item: Hobby)=> item.id !== payload.id);
            return set(
                cloneDeep(state),
                pathToDel,
                update
            );
        default:
            return state
    }
}