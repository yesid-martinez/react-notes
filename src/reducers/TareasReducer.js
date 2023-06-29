// `tareas` => Estado 
const tareasReducer = (tareas, action) =>{

    // Verifica el tipo  de acción a ejecutar
    switch (action.type) {
        case "CARGAR":
            // Modifica el estado de `tareas`
            return action.tasks ? [...action.tasks] : [];
    
        case "AGREGAR":            
            return [...tareas, action.newTask]

        case "MODIFICAR":
            return tareas.map( tarea => tarea.id === action.id ? {...tarea, terminada: !tarea.terminada} : tarea);

        case "ELIMINAR":
            return tareas.filter((tarea) => tarea.id !== action.id )

        default:
            throw Error(`Acción no soportada:  ${action.type}`)
    }
}

export default tareasReducer;