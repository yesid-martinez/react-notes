import { FaTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import '../components/Tareas/tareas.css'

const Tarea = ({task, onDeleteClick, onToggle}) => {

    return (
      <li
      className={task.terminada ? "tarea-terminada" : undefined}
      // Evento de doble click (Toogle)
      onDoubleClick={() => onToggle(task.id)}>

        {task.titulo}

        {task.terminada ?(
        <FaCheckCircle/> 
        ) : (
        <FaRegCheckCircle 
        style={{cursor: "pointer"}}
          
        />)}

        <FaTrashAlt
        onClick={() => onDeleteClick(task.id)}
        className="icon"
        style={{cursor: "pointer"}}
        />
      </li>
    );
  };
  
  export default Tarea;