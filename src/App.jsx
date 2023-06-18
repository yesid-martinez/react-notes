// Importar componentes de React
import { useState } from 'react';

// Importar componentes propios
import Nav from './components/Nav';
import AgregarTareasForm from './components/forms/agregarTareasForm';

// Importar CSS Global
import './App.css';

function App() {

  // ` tareas` => Valor inicial -> useState( valorInicial )
  // `setTareas`: función que actualiza el estado de `tareas`
  const [tareas, setTareas] = useState([
    // Ejemplo de tareas
    { id: 1, titulo: "Running" },
    { id: 2, titulo: "Programming" },
    { id: 3, titulo: "Reading" } 
  ]);
  // Estado del componente: inmutable

  // Recibe como parámetro el objeto `New Task` del componente `AgregarTareasForm`
  const agregarTarea = (nuevaTarea) => {
    // Actualiza el estado de las tareas
    setTareas( [... tareas, nuevaTarea] ); 
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

        <div id="content-layout">
          {/* Componente con props(atributos) */}
          <AgregarTareasForm
          // Prop `onAddTask` se envía al componente hijo para comunicarse con el componente padre
          // La función `agregarTarea` se pasa como valor de la prop `onAddTask`
          onAddTask={agregarTarea}/>
          <div id="layout-tareas"></div>
        </div>
      </>
  )
}

export default App
