import React from 'react';
import styles  from './AddHobbyForm.module.scss'
import { AddUserForm as Interface } from '../../../interfaces'
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import ErrorList from "../../common/ErrorList/ErrorList";

const AddHobbyForm: React.FC<Interface> = ({ onSubmit, errors }) => {
    return (
        <div className={styles['wrapper']}>
            <form onSubmit={onSubmit} name={'AddHobbyForm'}>
                <Input name={'passionLevel'} placeholder={'Enter passion level'}/>
                <Input name={'name'} placeholder={'Enter user hobby'}/>
                <Input name={'year'} type={'number'} placeholder={'Enter year'}/>
                <Button type={'submit'} text={'Add'} />
            </form>
            { !!errors.length && <ErrorList list={errors}/> }
        </div>
    );
};

export default AddHobbyForm;