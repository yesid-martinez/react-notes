import { FaTrashAlt } from "react-icons/fa";
import '../components/Tareas/tareas.css'

const Tarea = ({task, onDeleteClick}) => {
    return (
      <li>
        {task.titulo}     
        <FaTrashAlt
        onClick={() => onDeleteClick(task.id)}
        className="icon"
        />
      </li>
    );
  };
  
  export default Tarea;