import React from 'react';
import styles  from './Hobby.module.scss'
import { HobbyItem } from "../../../interfaces";
import Button from "../../common/Button/Button";

const Hobbies: React.FC<HobbyItem> = ({
                                          hobby: { id, userId, passionLevel, name, year },
                                          onClick
}) => {
    return (
        <div className={'wrapper'}>
            <div>
                <label>{'Passion: '}</label>
                <span>{passionLevel}</span>
            </div>
            <div>
                <span>{name}</span>
            </div>
            <div>
                <label>{'Since: '}</label>
                <span>{year}</span>
            </div>
            <div>
                <Button onClick={onClick} text={' X '} additions={['delete']}/>
            </div>
        </div>
    );
};

export default Hobbies;