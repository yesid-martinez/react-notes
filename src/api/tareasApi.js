import axios from "axios";

const getTasks = async () => {
    try {
        const response = await axios.get("http://localhost:3000/tareas/")
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        console.log("Error en la petición");
        return null;
    }
};

const addTask = async (tarea) => {
    try {
        const response = await axios.post("http://localhost:3000/tareas/", tarea)
        if (response.status === 201) {
            return response.data
        }
    } catch (error) {
        console.log("Hubo un error agregando la nueva tarea");
        return null;
    }
};

export {getTasks, addTask};