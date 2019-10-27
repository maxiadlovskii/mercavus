import React from 'react';
import Hobbies from '../presentational/Hobbies/Hobbies'
import { AppState } from '../../store'
import { connect } from "react-redux";
import { HobbiesContainer as  HobbiesContainerInterface } from '../../interfaces/containers'

const HobbiesContainer: React.FC<HobbiesContainerInterface> = ({ hobbies: { collection, currentUser } }) => {
    const onDelete = (id: string) => {
        console.log(id)
    };
    return <Hobbies hobbiesList={collection[currentUser]} onDelete={onDelete}/>
};
const mapStateToProps = (state: AppState) => ({
    hobbies: state.hobbies
});

export default connect(
    mapStateToProps,
    {}
)(HobbiesContainer)