import React from 'react';
import styles  from './Hobbies.module.scss'
import { Hobbies as HobbiesInterface } from '../../../interfaces'
import Hobby from '../Hobby/Hobby'

const Hobbies: React.FC<HobbiesInterface> = ({ hobbiesList, onDelete }) => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['list']}>
                {
                    hobbiesList.map(props => <Hobby
                        hobby={props}
                        onDelete={() => onDelete(props.id)}
                        key={`hobby_${props.id}`}
                    />)
                }
            </div>
        </div>
    );
};

export default Hobbies;