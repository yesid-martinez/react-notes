// Importar componentes propios
import Nav from './components/Nav';

// Importar CSS Global
import './App.css';

function App() {
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

      {/* Uso de componentes */}
      {/* Componente simple */}
      <Nav/>
    </>
  )
}

export default App
