import React from 'react';
import { useEffect } from 'react';
// Hook useEffect => Ejecuta código en respuesta a cambios específicos en el componente
import Tarea from './Tarea';
import './Tareas/tareas.css';

const Tareas = ({listaTareas, onDelete, mostrarTodas, setMostrarTodas, onToggle}) => {

  // Controla los cambios en el componente para mostrar y ocultar el scrollbar
  useEffect(() => {
    if (listaTareas.length < 6 && mostrarTodas) {
      setMostrarTodas(false);
    }
  }, [listaTareas, mostrarTodas, setMostrarTodas]);

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
              />
            ))}
        </ul>
        <div className='degradado-tareas'></div>
       
        {listaTareas.length === 0 ? (
          <div className='titulo-tareas-empty'>There are no tasks available.</div> 
        ): null}
        
        <div className='card-footer'>    
          {listaTareas.length !== 0 ? (
            listaTareas.length === 1 ? (
               <h3>You have 1 task available </h3>
            ) : <h3>You have {listaTareas.length} tasks available</h3>
          ) : null}
          
          {listaTareas.length > 5 ? (
            <button onClick={() => {
              setMostrarTodas(true);
            }}>See complete list</button>
            ) : null}
        </div>
    </div>
    </>
  )
}

export default Tareas