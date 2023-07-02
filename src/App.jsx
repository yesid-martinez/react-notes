// Importar componentes de React
import { useState, useEffect, useReducer } from 'react';

// Importar componentes propios
import Nav from './components/Nav';
import AgregarTareasForm from './components/forms/agregarTareasForm';
import Tareas from './components/Tareas';
import Error from './components/Error';
import SelectLenguage from './components/SelectLanguage';

// Contextos
import LocalizationContext from './context/LocalizationContext';
import local from './context/ContextData';

// Reducers
import tareasReducer from './reducers/TareasReducer';

// Funciones API
import { getTasks, addTask, deleteTask, doneTask, modifyDescription } from './api/tareasApi';


// Importar CSS Global
import './App.css';

function App() {

  // ` tareas`: Estado => useReducer( reducer, valorInicial )
  // `dispatch`: Función que permite ejecutar acciones en el reducer
  const [tareas, dispatch] = useReducer( tareasReducer, []);

  const [mostrarTodas, setMostrarTodas] = useState(false);

  const [error, setError] = useState(false);

  const [language, setLanguage] = useState(local.en)

  // Ejecuta al crear el componente
  useEffect(() => {
    const obtenerTareas = async () => {

      const tasks = await getTasks();
  
      if (tasks) {
        // dipatch({ action })
        dispatch({type: "CARGAR", tasks})
      }else{
        dispatch({type: "CARGAR"})
        setError(true);
      }
    };

    // Obtiene las tareas del backend
    obtenerTareas();
  }, []);

  // Recibe como parámetro el objeto `New Task` desde el componente `AgregarTareasForm`
  const agregarTarea = async (tarea) => {

    const newTask = await addTask(tarea);

      if (newTask){
        dispatch({type: "AGREGAR", newTask})
      }else{
        setError(true); 
        console.error("Hubo un error agregando la tarea");
      }
  };

  // Recibe como parámetro el valor id de la tarea desde el componente `Tarea`
  const eliminarTarea = async (id) => {

    const response = await deleteTask(id);

    if(response){
      dispatch({type: "ELIMINAR", id})
      }else{
        setError(true);
        console.error("Hubo un error eliminando la tarea");
      }
  };

  const markAsCompleted = async (id) => {
    const response = await doneTask(id);
    if (response) {
      dispatch({type: "MODIFICAR", id})
    }else{
      setError(true);
      console.error("Hubo un error al modificar el estado de la tarea");
    }
  };
  
  const showDescription = async (id) =>{
    const response = await modifyDescription(id);
    if(response){
      dispatch({type: "DESCRIPTION", id})
    }else{
      setError(true);
      console.error("Hubo un error al modificar el estado de la descripción");
    }
  };
  
  return (
    <>
      {/* Definición de proveedor */}
      {/* Provider: Envuelve los componentes que deseen acceder al contexto y proporciona el valor inicial. */}
      {/* Se debe aplicar a toda la aplicación */}
      <LocalizationContext.Provider value ={{language, setLanguage}}>
      
      <header>
        <h1 style={{ color: "#c1c1c1" }}>React notes</h1>
        <div className='header-elements'>
          <li>Link</li>
          <li>Link</li>
          <SelectLenguage/>
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
          onToggle={markAsCompleted}
          onCheckTask={markAsCompleted}
          mostrarTodas={mostrarTodas}
          setMostrarTodas={setMostrarTodas}
          onShowDescription={showDescription}
          />
        </div>

        {/* Renderizado condicional */}
        {error && <Error setError={setError}/>}
        
      </LocalizationContext.Provider>
      </>
  )
}

export default App
