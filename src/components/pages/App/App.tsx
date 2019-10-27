import React from 'react';
import styles from './App.module.scss';
import SeparatedLayout from "../../common/SeparatedLayout/SeparatedLayout";
import HobbiesContainer from "../../containers/Hobbies";
import UsersContainer from "../../containers/Users";

const App: React.FC = () => {
  return (
    <div className={styles['App']}>
        <SeparatedLayout>
            <UsersContainer/>
            <HobbiesContainer/>
        </SeparatedLayout>
    </div>
  );
}

export default App;
