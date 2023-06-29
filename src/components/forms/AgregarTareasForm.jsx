import React from 'react'
import { useState, useContext } from 'react';
import { FaTasks } from 'react-icons/fa';

import './agregarTareas.css';

import LocalizationContext from '../../context/LocalizationContext';

// ({onAddTask}) => Destructuración de objetos en los props
const AgregarTareasForm = ({onAddTask}) => {
    
    // Modifica el texto mediante el estado del formulario     
    const [titulo, setTitulo] = useState("");

    const { language } = useContext(LocalizationContext);

    // Crea la nueva tarea {}, se ejecuta cuando se envia el formulario
    const saveTask = (event) => {
        event.preventDefault();

        if (!titulo) {
            alert("Ingrese un texto válido");
            return;
        }

        // Estructura de la nueva tarea
        const newTask = {
            titulo,
            terminada: false,
            // El backend proporciona el id
        };

        // Invoca la función agregarTarea del componente padre mediante onAddTask
        // y pasa el objeto newTask como valor a agregarTarea
        onAddTask(newTask); 
        setTitulo("");
    };

    return (
    <>
    <form>
        <h2>{language.title} <FaTasks size={40} style={{ margin: ' 10 0 0 10' }}/></h2>
        <fieldset>
            <label htmlFor=""></label>
            <input
            type="text" 
            placeholder={language.input}
            maxLength={40}  
            value={titulo}
            // El input tiene un valor vinculado al estado titulo.
            // Se actualiza mediante la función setTitulo cuando su valor cambia.
            onChange={event => setTitulo(event.target.value)}
            />
        </fieldset>
        <fieldset>
            <input type="submit"
            value={language.save}
            onClick={saveTask}
            />
        </fieldset>
    </form>
    </>
)
}

export default AgregarTareasForm;