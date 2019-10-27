import {GET_HOBBIES, DELETE_HOBBY,  PUT_HOBBY, PUT_USER} from '../constants/storeActions'
import {Hobby, User} from './index'

interface GetUserHobbies {
    type: typeof GET_HOBBIES;
    payload: {
        userId: string,
        id: string
    };
}

interface PutUser {
    type: typeof PUT_USER;
    payload: User;
}

interface PutUser {
    type: typeof PUT_USER;
    payload: User;
}
interface PutHobby {
    type: typeof PUT_HOBBY,
    payload: Hobby
}

interface DeleteHobby {
    type: typeof DELETE_HOBBY,
    payload: Hobby
}
export type HobbiesActionsInterface = GetUserHobbies | PutHobby | DeleteHobby;
export type UserActionsInterface = PutUser