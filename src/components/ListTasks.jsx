import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTasks = () => {


    const taches = useSelector(state =>state.tasks);

    return (
        <div className='list'>
            {taches.map(item => <Task tache={item}/>)}
        </div>
    );
}

export default ListTasks;
