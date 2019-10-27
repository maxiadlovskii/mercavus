import { GET_HOBBIES } from '../constants/storeActions'

interface GetUserHobbies {
    type: typeof GET_HOBBIES;
    payload: string;
}

export type HobbiesActionsInterface = GetUserHobbies;