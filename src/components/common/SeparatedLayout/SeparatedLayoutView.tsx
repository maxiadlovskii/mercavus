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
                style={{flexGrow: proportions.left}}
            >
                {elements && elements[0]}
            </div>
            <div
                className={styles['separator']}
                onMouseDown={onMouseOnSeparator}
                ref={separatorRef}
            />
            <div
                style={{flexGrow: proportions.right}}
                className={styles['right']}
            >
                {elements && elements[1]}
            </div>
        </div>
    );
}

export default SeparatedLayoutView;