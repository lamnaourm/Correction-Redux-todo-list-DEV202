import React from 'react';
import { BsFillPlusSquareFill } from "react-icons/bs";

const AddTask = () => {
    return (
        <div className='add'>
            <input type="text" placeholder='Saisir une description...' />
            <button><BsFillPlusSquareFill /> Ajouter</button>
        </div>
    );
}

export default AddTask;
