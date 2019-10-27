import React, {FormEvent, useState} from 'react';
import Users from '../presentational/Users/Users'
import {AppState} from "../../store";
import {connect} from "react-redux";
import {UsersContainer as UsersContainerInterface} from "../../interfaces/containers";
import { getUserHobbies } from '../../store/actions/hobbies'
import { getFormValues } from '../../utils'

const UsersContainer: React.FC<UsersContainerInterface> = ({
                                                      users: { collection },
                                                      hobbies: { currentUser },
                                                      getUserHobbies
}) => {
    const [errors, setErrors] = useState([]);
    const onUserSelect = (id: string) => {
        getUserHobbies(id)
    };
    const onAddUser = (e: any) => {
        e.preventDefault();
        console.log(e.target.elements, e.target.elements.length,  e.target.elements[0])
        const elements = e.target.elements;
        const res = getFormValues(elements);

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
        getUserHobbies
    }
)(UsersContainer)
