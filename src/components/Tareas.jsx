import React from 'react';
import { useEffect, useContext } from 'react';

import Tarea from './Tarea';
import './Tareas/tareas.css';

import LocalizationContext from '../context/LocalizationContext';

const Tareas = ({listaTareas, onDelete, mostrarTodas, setMostrarTodas, onToggle, onCheckTask}) => {

  // Controla los cambios en el componente para mostrar y ocultar el scrollbar
  useEffect(() => {
      if (listaTareas.length <= 6 && mostrarTodas) {
      setMostrarTodas(false);
    }
  }, [listaTareas, mostrarTodas, setMostrarTodas]);

  // Accede al contexto de Localization
  const local = useContext(LocalizationContext);

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
              />
            ))}
        </ul>
        <div className='degradado-tareas'></div>
      
        {listaTareas.length === 0 ? (
          // Uso del valor del contexto, accede al objeto
          <div className='titulo-tareas-empty'>{local.unavailable}</div> 
        ): null}
        
        <div className='card-footer'>    
          {listaTareas.length !== 0 ? (
            listaTareas.length === 1 ? (
              <h3>You have 1 task available </h3>
            ) : <h3>You have {listaTareas.length} tasks available</h3>
          ) : null}
          
          {listaTareas.length > 6 ? (
            <button onClick={() => {
              setMostrarTodas(true);
            }}>{local.show}</button>
            ) : null}
        </div>
    </div>
    </>
  )
}

export default Tareas