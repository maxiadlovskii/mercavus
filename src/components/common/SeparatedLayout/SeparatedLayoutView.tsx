import React from 'react';
import { SeparatedLayoutProps } from '../../../interfaces'
import styles  from './SeparatedLayout.module.scss'

const SeparatedLayoutView: React.FC<SeparatedLayoutProps> = ({
                                                             onMouseOnSeparator,
                                                             widths,
                                                             wrapperRef,
                                                             separatorRef,
                                                             elements,
                                                             separatorWidth
}) => {
    return (
        <div ref={wrapperRef}
             className={styles['wrapper']}>
            <div
                className={styles['left']}
                style={{width: widths.left}}
            >
                {elements && elements[0]}
            </div>
            <div
                className={styles['separator']}
                onMouseDown={onMouseOnSeparator}
                ref={separatorRef}
                style={{
                    width: separatorWidth
                }}
            />
            <div
                style={{width: widths.right}}
                className={styles['right']}
            >
                {elements && elements[1]}
            </div>
        </div>
    );
}

export default SeparatedLayoutView;