import React from 'react';
import styles  from './Hobbies.module.scss'
import { Hobbies as HobbiesInterface } from '../../../interfaces'
import Hobby from '../Hobby/Hobby'
import NoContent from "../../common/NoContent/NoContent";
import AddHobbyForm from "../AddHobbyForm/AddHobbyForm";

const Hobbies: React.FC<HobbiesInterface> = ({
                                                 hobbiesList,
                                                 onDelete,
                                                 currentUser,
                                                 onAddHobby,
                                                 errors
}) => {
    return (
        <>
            { currentUser && <AddHobbyForm onSubmit={onAddHobby} errors={errors}/>}
            {
                hobbiesList && !!hobbiesList.length
                        ? <div className={styles['wrapper']}>
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
                    : <NoContent/>
            }
     </>
    );
};

export default Hobbies;