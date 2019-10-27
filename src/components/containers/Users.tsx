import React from 'react';
import Users from '../presentational/Users/Users'
import {AppState} from "../../store";
import {connect} from "react-redux";
import {UsersContainer as UsersContainerInterface} from "../../interfaces/containers";
import { getUserHobbies } from '../../store/actions/hobbies'
import { putUser } from '../../store/actions/users'
import {generateId, getFormValues, validator} from '../../utils'
import { useErrorList } from '../../hooks'

const UsersContainer: React.FC<UsersContainerInterface> = ({
                                                      users: { collection },
                                                      hobbies: { currentUser },
                                                      getUserHobbies,
                                                      putUser
}) => {
    const { errors, addErrors, clearErrors } = useErrorList();
    const onUserSelect = (id: string) => {
        getUserHobbies(id)
    };
    const onAddUser = (e: any) => {
        e.preventDefault();
        clearErrors();
        const elements = e.target.elements;
        const res = getFormValues(elements);
        const errors = validator(res);
        if(errors && Array.isArray(errors)){
            addErrors(errors)
        } else {
            const id = generateId();
            const name = res.name;
            putUser({
                id,
                name
            })
        }
    };
    return <Users
        onAddUser={onAddUser}
        usersList={collection}
        currentUser={currentUser}
        onUserSelect={onUserSelect}
        errors={errors}
    />
};
const mapStateToProps = (state: AppState) => ({
    users: state.users,
    hobbies: state.hobbies
});

export default connect(
    mapStateToProps,
    {
        getUserHobbies,
        putUser
    }
)(UsersContainer)
