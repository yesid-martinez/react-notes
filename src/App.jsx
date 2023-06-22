// Importar componentes de React
import { useState, useEffect } from 'react';
// Hook useState => Agrega estado a un componente funcional.

// Importar componentes propios
import Nav from './components/Nav';
import AgregarTareasForm from './components/forms/agregarTareasForm';
import Tareas from './components/Tareas';

import { getTasks } from './api/tareasApi';

// Importar CSS Global
import './App.css';

function App() {

  // ` tareas` => Valor inicial -> useState( valorInicial )
  // `setTareas`: función que actualiza el estado de `tareas`
  const [tareas, setTareas] = useState([]);
  // Estado del componente: inmutable

  const [mostrarTodas, setMostrarTodas] = useState(false);
  
  // Ejecuta al crear el componente
  useEffect(() => {
    const obtenerTareas = async () => {

      const tasks = await getTasks(tareas);
  
      if (tasks) {
        setTareas(tasks);
      }else{
        setTareas([]);
        setError(true);
      }
    };

    // Obtiene las tareas del backend
    obtenerTareas();
  }, []);

  // Recibe como parámetro el objeto `New Task` desde el componente `AgregarTareasForm`
  const agregarTarea = (nuevaTarea) => {
    // Actualiza el estado de las tareas con `setTareas`
    setTareas( [... tareas, nuevaTarea] ); 
  };

  // Recibe como parámetro el valor id de la tarea desde el componente `Tarea`
  const deleteTask = (id) => {
    // Modifica el estado de `tareas`
    // La función dentro de setTareas recibe como parámetro el estado actual de las tareas (currentState)
    setTareas( (currentState) => {
      // Devuelve el nuevo estado actualizado => Devuelve todas las tareas a excepción de la tarea actual 
      return currentState.filter((tarea) => tarea.id !== id );  
    }); 

  };

  const checkTask = (id) => {
    setTareas( (currentState) => {
      // Si la condición se cumple, se devuelve la tarea creando el atributo `tarea-terminada` con valor: `undefined`,
      // `undefined` es un falsy value, por lo tanto, su opuesto será el valor`true`.
      // Si la condición es falsa, se devuelve la tarea original sin realizar cambios.
      return currentState.map( tarea => tarea.id === id ? {... tarea, terminada: !tarea.terminada } : tarea);
    });
  };

  const markAsCompleted = (id) => {
    setTareas((currentState) => {
      return currentState.map((tarea) => {
        // Si la tarea coincide con el ID proporcionado y no está marcada como terminada, la marca como terminada.
        if (tarea.id === id) {
          return { ...tarea, terminada: !tarea.terminada };
        }
        return tarea;
      });
    });
  };

  return (
    <>
      {/* HTML puro */}
      <header>
        {/* CSS Inline */}
        <h1 style={{ color: "#c1c1c1" }}>React notes</h1>
        <div>
          {/* CSS mediante clases */}
          <li className="link">Link</li>
          <li className="link">Link</li>
          <li className="link">Link</li>
        </div>
      </header>

        {/* Uso de componentes => PascalCase */}
        {/* Componente simple */}
        <Nav/>

        <div className="content-layout">
          {/* Componente con props(atributos) */}
          <AgregarTareasForm
          // Prop `onAddTask` se envía al componente hijo para comunicarse con el componente padre
          // La función `agregarTarea` se pasa como valor de la prop `onAddTask`
          onAddTask={agregarTarea}/>

          <Tareas
          listaTareas={tareas}
          onDelete={deleteTask}
          onToggle={checkTask}
          onCheckTask={markAsCompleted}
          mostrarTodas={mostrarTodas}
          setMostrarTodas={setMostrarTodas}
          />
        </div>
      </>
  )
}

export default App
