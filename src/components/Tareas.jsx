import { useEffect, useContext } from 'react';

import Tarea from './Tarea';
import './Tareas/tareas.css';

import LocalizationContext from '../context/LocalizationContext';

/* eslint-disable react/prop-types */
const Tareas = ({listaTareas, onDelete, mostrarTodas, setMostrarTodas, onToggle, onCheckTask, onShowDescription}) => {

  // Controla los cambios en el componente para mostrar y ocultar el scrollbar
  useEffect(() => {
      if (listaTareas.length <= 6 && mostrarTodas) {
      setMostrarTodas(false);
    }
  }, [listaTareas, mostrarTodas, setMostrarTodas]);

  // Accede al contexto de Localization
  const {language} = useContext(LocalizationContext);

  return (
    <>
    <div className='layout-lista-tareas'>
        <ul className={`lista-tareas ${ mostrarTodas ? 'mostrar-todas' : '' }`}>
          
            {/* Genera una serie de componentes(tareas) con base en los elementos del array(Lista de tareas) */}
            {listaTareas.map((tarea) => (
              <Tarea
              key={tarea.id}
              task={tarea}
              onDeleteClick={onDelete}
              onToggle={onToggle}
              onCheckTask={onCheckTask}
              onShowDescription={onShowDescription}
              />
            ))}
        </ul>
        <div className='degradado-tareas'></div>
      
        {listaTareas.length === 0 ? (
          // Uso del valor del contexto, accede al objeto
          <div className='titulo-tareas-empty'>{language.unavailable}</div> 
        ): null}
        
        <div className='card-footer'>    
          <h3>{language.tasks + listaTareas.length}</h3>
        </div>
    </div>
    </>
  )
}

export default Tareas