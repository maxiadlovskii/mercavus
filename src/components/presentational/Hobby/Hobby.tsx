import React from 'react';
import styles  from './Hobby.module.scss'
import { HobbyItem } from "../../../interfaces";
import Button from "../../common/Button/Button";

const Hobby: React.FC<HobbyItem> = ({
                                          hobby: { id, userId, passionLevel, name, year },
                                          onDelete
}) => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['item']}>
                <label>{'Passion: '}</label>
                <span>{passionLevel}</span>
            </div>
            <div className={styles['item']}>
                <span>{name}</span>
            </div>
            <div className={styles['item']}>
                <label>{'Since: '}</label>
                <span>{year}</span>
            </div>
            <div className={styles['item']}>
                <Button onClick={onDelete} text={' X '} additions={['delete']}/>
            </div>
        </div>
    );
};

export default Hobby;