import React from 'react';
import { FaExchangeAlt } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


const Task = (props) => {
    return (
        <div className='tache'>
            <h2>{props.tache.completed ? <del>{props.tache.task}</del> : props.tache.task }</h2>
            <button><FaExchangeAlt /></button>
            <button><AiFillDelete /></button>
        </div>
    );
}

export default Task;
