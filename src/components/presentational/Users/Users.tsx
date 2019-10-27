import React from 'react';
import styles  from './Users.module.scss'
import { Users as Interface } from '../../../interfaces'
import User from "../User/User";
import AddUserForm from "../AddUserForm/AddUserForm";

const Users: React.FC<Interface> = ({
                                             usersList,
                                             onUserSelect,
                                             currentUser,
                                             onAddUser,
                                             errors
}) => {
    return (
        <div className={styles['wrapper']}>
            <AddUserForm onSubmit={onAddUser} errors={errors}/>
            <div className={styles['list']}>
                {
                    usersList.map(user =>
                        <User
                            key={`user_${user.id}`}
                            user={user} onUserSelect={onUserSelect}
                            isActive={currentUser === user.id}
                        /> )
                }
            </div>
        </div>
    );
};

export default Users;