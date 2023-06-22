import { FaTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import '../components/Tareas/tareas.css'

const Tarea = ({task, onDeleteClick, onToggle, onCheckTask}) => {

    return (
      <li
      className={task.terminada ? "tarea-terminada" : undefined}
      // Evento de doble click (Toogle)
      onDoubleClick={() => onToggle(task.id)}>

        {task.titulo}

        {task.terminada ?(
        <FaCheckCircle
        onClick={() => onCheckTask(task.id)}
        style={{cursor: "pointer"}}
        /> 
        ) : (
        <FaRegCheckCircle
        onClick={() => onCheckTask(task.id)}
        style={{cursor: "pointer"}}
        />)}

        <FaTrashAlt
        onClick={() => onDeleteClick(task.id)}
        style={{cursor: "pointer"}}
        />
      </li>
    );
  };
  
  export default Tarea;