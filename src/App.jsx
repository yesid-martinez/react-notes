// Importar componentes de React
import { useState, useEffect } from 'react';
// Hook useState => Agrega estado a un componente funcional.

// Importar componentes propios
import Nav from './components/Nav';
import AgregarTareasForm from './components/forms/agregarTareasForm';
import Tareas from './components/Tareas';
import Error from './components/Error';
import SelectLenguage from './components/SelectLanguage';

// Funciones API
import { getTasks, addTask, deleteTask, doneTask } from './api/tareasApi';

// Contextos
import LocalizationContext from './context/LocalizationContext';

// Importar CSS Global
import './App.css';

// Localization
const local = {
  es: {
    title: "Administrador de tareas",
    input: "Ingresa una nueva tarea",
    save: "Guardar tarea",
    show: "Ver la lista completa",
    unavailable: "No hay tareas disponibles",
    error: "Hubo un error, intente de nuevo."
  },
  en: {
    title: "Tasks manager",
    input: "Enter new task",
    save: "Save task",
    show: "See complete list",
    unavailable: "There are no tasks available",
    error: "There was an error. Try again."
  },
};

function App() {

  // ` tareas` => Valor inicial -> useState( valorInicial )
  // `setTareas`: función que actualiza el estado de `tareas`
  const [tareas, setTareas] = useState([]);
  // Estado del componente: inmutable

  const [mostrarTodas, setMostrarTodas] = useState(false);

  const [error, setError] = useState(false);

  const [language, setLanguage] = useState(local.en)

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
  const agregarTarea = async (tarea) => {

    const newTask = await addTask(tarea);

      if (newTask){
        setTareas([...tareas, newTask])
      }else{
        setError(true);
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
        setError(true);
        console.error("Hubo un error eliminando la tarea");
      }
  };

  const markAsCompleted = async (id) => {
    const response = await doneTask(id);
    if (response) {
      setTareas( (currentState) => {
        const nuevasTareas = currentState.map( tarea =>
          tarea.id === response.id ? {...tarea, terminada: response.terminada} : tarea);
        return nuevasTareas;
      });
    }else{
      setError(true);
      console.error("Hubo un error al modificar el estado de la tarea");
    }
  };

  const handlerLanguageChange = (language) => {
    if(language === "es"){
      setLanguage(local.es)
    }else{
      setLanguage(local.en)
    }
  }

  return (
    <>
      {/* Definición de proveedor */}
      {/* Provider: Envuelve los componentes que deseen acceder al contexto y proporciona el valor inicial. */}
      {/* Se debe aplicar a toda la aplicación */}
      <LocalizationContext.Provider value ={language}>
      
      <header>
        <h1 style={{ color: "#c1c1c1" }}>React notes</h1>
        <div className='header-elements'>
          <li>Link</li>
          <li>Link</li>
          <SelectLenguage onLanguageChange={handlerLanguageChange}/>
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
          />
        </div>

        {/* Renderizado condicional */}
        {error && <Error setError={setError}/>}
        
      </LocalizationContext.Provider>
      </>
  )
}

export default App
