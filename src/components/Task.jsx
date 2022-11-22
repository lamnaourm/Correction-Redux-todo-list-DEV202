import React from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { changetask, deletetask } from '../redux/ActionsCreators';


const Task = (props) => {

    const dispatch = useDispatch();

    return (
        <div className='tache'>
            <h2>{props.tache.completed ? <del>{props.tache.task}</del> : props.tache.task }</h2>
            <button onClick={() => dispatch(changetask(props.tache.id))}><FaExchangeAlt /></button>
            <button onClick={() => dispatch(deletetask(props.tache.id))}><AiFillDelete /></button>
        </div>
    );
}

export default Task;
