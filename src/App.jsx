// Importar componentes de React
import { useState, useEffect } from 'react';
// Hook useState => Agrega estado a un componente funcional.

// Importar componentes propios
import Nav from './components/Nav';
import AgregarTareasForm from './components/forms/agregarTareasForm';
import Tareas from './components/Tareas';

import { getTasks, addTask, deleteTask } from './api/tareasApi';

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
      }
    };

    // Obtiene las tareas del backend
    obtenerTareas();
  }, []);

  // Recibe como parámetro el objeto `New Task` desde el componente `AgregarTareasForm`
  const agregarTarea = async (tarea) => {

    const newTask = await addTask(tarea);

      if (newTask){
        setTareas([...tareas, newTask])
      }else{
        console.error("Hubo un error agregando la tarea");
      }
  };

  // Recibe como parámetro el valor id de la tarea desde el componente `Tarea`
  const eliminarTarea = async (id) => {
    
    const response = await deleteTask(id);

    if(response){
      setTareas( (currentState) => { 
        // Devuelve el nuevo estado actualizado => Devuelve todas las tareas a excepción de la tarea indicada(id) 
        return currentState.filter((tarea) => tarea.id !== id );  
      });
      }else{
        console.error("Hubo un error eliminando la tarea");
      }
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
          onDelete={eliminarTarea}
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
