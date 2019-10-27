import { PUT_USER } from "../../constants/storeActions";
import {User} from "../../interfaces";

export const putUser = (user: User) => ({
    type: PUT_USER,
    payload: user
});