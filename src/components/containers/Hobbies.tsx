import React from 'react';
import Hobbies from '../presentational/Hobbies/Hobbies'
import { AppState } from '../../store'
import { connect } from "react-redux";
import { HobbiesContainer as  HobbiesContainerInterface } from '../../interfaces/containers'
import {useErrorList} from "../../hooks";
import {generateId, getFormValues, validator} from "../../utils";
import { putHobbies, deleteHobbies } from '../../store/actions/hobbies'

const HobbiesContainer: React.FC<HobbiesContainerInterface> = ({
                                                                   hobbies: { collection, currentUser },
                                                                   putHobbies,
                                                                   deleteHobbies
}) => {
    const { errors, addErrors, clearErrors } = useErrorList();
    const onDelete = (id: string) => {
        deleteHobbies(currentUser, id)
    };
    const onAddHobby = (e: any) => {
        e.preventDefault();
        clearErrors();
        const elements = e.target.elements;
        const res = getFormValues(elements);
        const errors = validator(res);
        if(errors && Array.isArray(errors)){
            addErrors(errors)
        } else {
            const id = generateId();
            const {year, name, passionLevel} = res;
            putHobbies(currentUser, {year, name, passionLevel, id, userId: currentUser})
        }
    };
    return <Hobbies
        hobbiesList={collection[currentUser]}
        onDelete={onDelete}
        errors={errors}
        onAddHobby={onAddHobby}
        currentUser={currentUser}
    />
};
const mapStateToProps = (state: AppState) => ({
    hobbies: state.hobbies
});

export default connect(
    mapStateToProps,
    {putHobbies, deleteHobbies}
)(HobbiesContainer)