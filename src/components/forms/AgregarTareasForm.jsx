import { useContext } from 'react';
import { FaTasks } from 'react-icons/fa';

import './agregarTareas.css';

// Importar custom hook
import useInput from "../../hooks/useInput";

import LocalizationContext from '../../context/LocalizationContext';

// eslint-disable-next-line react/prop-types
const AgregarTareasForm = ({onAddTask}) => {
    
    const { language } = useContext(LocalizationContext);

    // Estado del formulario con custom hook
    const [titulo, blindTitulo, resetTitulo] = useInput("");
    const [description, blindDescription, resetDescription] = useInput("");

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
            description,
            terminada: false,
            showDescription: false
        };

        // Invoca la función agregarTarea del componente padre mediante onAddTask
        // y pasa el objeto newTask como valor a agregarTarea
        onAddTask(newTask);

        resetTitulo("");
        resetDescription("");
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
            {...blindTitulo}
            />
        </fieldset>

        <fieldset>
            <input
            type="text"
            placeholder={language.description}
            maxLength={650}
            id='description'
            {...blindDescription} 
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