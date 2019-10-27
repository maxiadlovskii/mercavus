import {HobbiesReducer, UsersReducer} from "./index";
import * as  hobbies from '../store/actions/hobbies'
import * as  users from '../store/actions/users'

export interface HobbiesContainer {
    hobbies: HobbiesReducer
}

export interface UsersContainer {
    users: UsersReducer,
    hobbies: HobbiesReducer,
    getUserHobbies: typeof hobbies.getUserHobbies
}