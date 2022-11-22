import React, { useState } from 'react';
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addtask } from '../redux/ActionsCreators';

const AddTask = () => {

    const [valeur, setValeur] = useState();
    const dispatch = useDispatch();

    const add = () => {
        if(valeur===''){
            alert('Description tache vide');
            return;
        }
        dispatch(addtask(valeur));
    }
    return (
        <div className='add'>
            <input type="text" placeholder='Saisir une description...' value={valeur} onChange={(e) => setValeur(e.target.value)} />
            <button onClick={add}><BsFillPlusSquareFill /> Ajouter</button>
        </div>
    );
}

export default AddTask;
