import * as storeActions from '../../constants/storeActions'
import {GET_HOBBIES} from "../../constants/storeActions";

export const getUserHobbies = (userId: string) => ({
    type: GET_HOBBIES,
    payload: userId
});