import React from 'react';
import { ErrorList as Interface } from '../../../interfaces'
import styles from './ErrorList.module.scss'

const ErrorList: React.FC<Interface> = ({ list }) => {
    return <ul className={styles['list']}>
        {list.map((error: string, i: number) => <li key={`error_${i}_${error}`}>{error}</li>)}
    </ul>
};

export default ErrorList