import React from 'react';
import {Button as Interface} from "../../../interfaces";
import styles from './Button.module.scss';
import classNames from 'classnames'
import {additionsClasses} from "../../../utils";

const Button: React.FC<Interface> =  ({
                                                text,
                                                additions = [],
                                                onClick,
                                                children,
                                                type = undefined
}) => {
    return <button
        className={classNames(styles['Button'], additionsClasses(additions, styles))}
        onClick={onClick}
        type={type}
    >{text || children}
    </button>
}

export default Button