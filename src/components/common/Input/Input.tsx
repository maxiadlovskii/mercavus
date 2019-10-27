import React from 'react';
import {Input as Interface} from "../../../interfaces";
import styles from './Input.module.scss';
import classNames from 'classnames'
import {additionsClasses} from "../../../utils";

const Input: React.FC<Interface> =  ({
                                            onChange,
                                            placeholder,
                                            additions = [],
                                            name,
                                            type = 'text'
                                            }) => {
    return <input
        className={classNames(styles['Input'], additionsClasses(additions, styles))}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        type={type}
    />
}

export default Input