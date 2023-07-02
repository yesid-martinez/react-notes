import '../components/Tareas/tareas.css';

import { FaTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

/* eslint-disable react/prop-types */
const Tarea = ({task, onDeleteClick, onToggle, onCheckTask, onShowDescription}) => {

    return (
      <>
      <li onDoubleClick={() => onToggle(task.id)}>

        <div className={task.terminada ? "tarea-terminada task-layout" : "task-layout"}>
          
          <div className="task-title">
            <VscDebugBreakpointLog className="icon"/>
            {task.titulo}
          </div>

          {task.terminada ?(
          <FaCheckCircle
          onClick={() => onCheckTask(task.id)}
          style={{cursor: "pointer"}}
          className="task-check-icon"
          /> 
          ) : (
          <FaRegCheckCircle
          onClick={() => onCheckTask(task.id)}
          style={{cursor: "pointer"}}
          className="task-check-icon"
          />)}

          {task.description === "" ? 
          <BsFillEyeSlashFill
          style={{cursor: "not-allowed"}} 
          /> :
          (
            task.showDescription === false ? 
            <BsFillEyeFill
            onClick={() => onShowDescription(task.id)}
            style={{cursor: "pointer"}}
            className="task-descr-icon"
            /> :
            <BsFillEyeSlashFill
            onClick={() => onShowDescription(task.id)}
            style={{cursor: "pointer"}}
            className="task-descr-icon"
            />
          )
          }

          <FaTrashAlt
          onClick={() => onDeleteClick(task.id)}
          style={{cursor: "pointer"}}
          className="task-delete-icon"
          />
        </div>
        
        {task.description === "" ? null :
        (
          task.terminada ?
          (
            task.showDescription ?
            <div className="task-description-done">
              {task.description}
            </div> : null
          ) :
            task.showDescription ?
            <div className="task-description">
              {task.description}
            </div> : null
        )
        }
      
      </li>
      </>
    );
  };
  
  export default Tarea;