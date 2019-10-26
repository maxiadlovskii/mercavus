import React from 'react';
import Hobbies from '../presentational/Hobbies/Hobbies'
import { AppState } from '../../store'

const HobbiesContainer: React.FC = () => {
    console.log('HOBBIES');
    return <Hobbies />
}
const mapStateToProps = (state: AppState) => ({
    users: state.users,
    hobbies: state.hobbies
})

export default HobbiesContainer