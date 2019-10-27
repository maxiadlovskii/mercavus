import React from 'react';
import styles  from './User.module.scss'
import { UserItem } from "../../../interfaces";
import classNames from 'classnames'

const User: React.FC<UserItem> = ({
                                        user: { id, name },
                                        onUserSelect,
                                        isActive
                                      }) => {
    return (
        <div className={classNames(styles['wrapper'], { [styles['active']]: isActive})}>
            <div className={styles['item']} onClick={() => onUserSelect(id)}>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default User;