import React from 'react';
import {Input as Interface} from "../../../interfaces";
import styles from './Input.module.scss';
import classNames from 'classnames'
import {additionsClasses} from "../../../utils";

const Input: React.FC<Interface> =  ({
                                            onChange,
                                            placeholder,
                                            additions = [],
                                            name
                                            }) => {
    return <input
        className={classNames(styles['Button'], additionsClasses(additions, styles))}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
    />
}

export default Input