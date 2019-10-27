import React from 'react';
import styles  from './AddUserForm.module.scss'
import { AddUserForm as Interface } from '../../../interfaces'
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import ErrorList from "../../common/ErrorList/ErrorList";

const AddUserForm: React.FC<Interface> = ({ onSubmit, errors }) => {
    return (
        <>
            <form onSubmit={onSubmit} name={'AddUserForm'}>
                <Input name={'name'} />
                <Button type={'submit'} text={'Add'} />
            </form>
            { !!errors.length && <ErrorList list={errors}/> }
        </>
    );
};

export default AddUserForm;