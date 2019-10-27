import {DELETE_HOBBY, GET_HOBBIES, PUT_HOBBY} from "../../constants/storeActions";
import {Hobby} from "../../interfaces";

export const getUserHobbies = (userId: string) => ({
    type: GET_HOBBIES,
    payload: { userId, id: '' }
});

export const putHobbies = (userId: string, data: Hobby) => ({
    type: PUT_HOBBY,
    payload: data
});

export const deleteHobbies = (userId: string, id: string) => ({
    type: DELETE_HOBBY,
    payload: {userId, id}
});