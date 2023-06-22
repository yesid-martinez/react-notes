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

export {getTasks};