# Repositorio de apuntes de React

Este repositorio es una colección de apuntes de React, donde guardo mis notas sobre esta biblioteca y conceptos relacionados. Aquí encontrarás información útil y organizada para aprender y repasar TypeScript.

## Configuración inicial del proyecto

### Creación del proyecto usando Vite

`npm init vite@latest nombre-proyecto -- --template react`

### Instalación de dependecias

`cd nombre-proyecto`

`npm install`

Antes de ejecutar el proyecto, asegúrate de tener instalada la biblioteca `uuid` y `react-icons`.

- uuid Permite generar identificadores únicos.

- react-icons Brinda una colección de iconos para aplicaciones React.

Puedes instalarlas ejecutando los siguiente comandos:

- `npm install uuid`

- `npm install react-icons`

### Ejecución del proyecto

`npm run dev`

## Visualización del comportamiento de los Hooks con la extensión de React Developer Tools

Este repositorio incluye ejemplos de uso de Hooks en React. Para ver cómo funcionan los Hooks en tiempo real, puedes utilizar la extensión de React Developer Tools para Google Chrome.

# Task Manager (Gestor de tareas)
Para facilitar el entendimiento de los apuntes, se implementó un task manager sencillo en el proyecto. Este task manager permite agregar, eliminar y marcar tareas como terminadas. Además, utiliza un estilo CSS simple.

# Backend testing

 Realizaremos una prueba de backend utilizando la librería json-server y peticiones REST API con axios.

## Prueba de backend con json-server

La librería json-server nos permite simular un servidor backend utilizando un archivo JSON (db.json) como base de datos.

Se genera el archivo package.json ejecutando el comando:

`npm init -y`

Para instalar json-server, ejecuta el comando:

`npm install -g json-server`

Para iniciar el servidor json-server y utilizar el archivo db.json como base de datos, ejecuta el comando:

`json-server --watch db.json`

También podemos definir un script de inicio:

`"scripts": {
    "start": "json-server --watch db.json"
}`

Puedes ejecutar ese script utilizando el comando:

`npm start`

## Peticiones REST API con axios
Para realizar peticiones REST API desde nuestro frontend, utilizaremos la librería axios.

Para instalar axios ejecutamos el comando:

`npm install axios`

Una vez instalado, puedes utilizar axios para realizar peticiones GET, POST, PUT, DELETE, entre otras.