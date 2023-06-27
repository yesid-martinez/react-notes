import axios from "axios";

const getTasks = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL);
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        console.error("Error en la petición", error);
        return null;
    }
};

const addTask = async (tarea) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL, tarea);
        if (response.status === 201) {
            return response.data
        }
    } catch (error) {
        console.error("Hubo un error agregando la nueva tarea");
        return null;
    }
};

const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}${id}`);
        if (response.status === 200) {
            return response.data;
        } 
    } catch (error) {
        console.error("Hubo un error eliminado la tarea");
        return null;
    }
};   

const doneTask = async (id) => {
    try {
        let tareas = await getTasks();
        const tarea = tareas.find(tarea => tarea.id === id);
        const tareaNueva = { terminada: !tarea.terminada};
        const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}${id}/`, tareaNueva);
        if (response.status === 200 || response.status === 204){
            return response.data;    
        }      
    } catch (error) {
        console.error("Error al modificar el estado de la tarea");
        return null;
    }
};


export {getTasks, addTask, deleteTask, doneTask};