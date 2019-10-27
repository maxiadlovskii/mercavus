import React from 'react';
import { SeparatedLayoutProps } from '../../../interfaces'
import styles  from './SeparatedLayout.module.scss'

const SeparatedLayoutView: React.FC<SeparatedLayoutProps> = ({
                                                             onMouseOnSeparator,
                                                             proportions,
                                                             wrapperRef,
                                                             separatorRef,
                                                             elements
}) => {
    return (
        <div ref={wrapperRef}
             className={styles['wrapper']}>
            <div
                className={styles['left']}
                style={{width: `${proportions.left*100}%`}}
            >
                {elements && elements[0]}
            </div>
            <div
                className={styles['separator']}
                onMouseDown={onMouseOnSeparator}
                ref={separatorRef}
            />
            <div
                style={{width: `${proportions.right*100}%`}}
                className={styles['right']}
            >
                {elements && elements[1]}
            </div>
        </div>
    );
}

export default SeparatedLayoutView;