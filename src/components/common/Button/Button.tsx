import React from 'react';
import {Button as ButtonInterface} from "../../../interfaces";
import styles from './Button.module.scss';
import classNames from 'classnames'
import {additionsClasses} from "../../../utils";

const Button: React.FC<ButtonInterface> =  ({
                                                text,
                                                additions = [],
                                                onClick,
                                                children
}) => {
    return <button
        className={classNames('Button', additionsClasses(additions, styles))}
        onClick={onClick}>{text || children}
    </button>
}

export default Button