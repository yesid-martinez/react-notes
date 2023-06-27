# Repositorio de apuntes de React

Este repositorio es una colección de apuntes de React, donde guardo mis notas sobre esta biblioteca y conceptos relacionados. Aquí encontrarás información útil y organizada para aprender y repasar TypeScript.

## Configuración inicial del proyecto

### Creación del proyecto usando Vite

`npm init vite@latest nombre-proyecto -- --template react`

### Instalación de dependecias

`cd nombre-proyecto`

`npm install`

Antes de ejecutar el proyecto, asegúrate de tener instalada la biblioteca `react-icons`.

- react-icons Brinda una colección de iconos para aplicaciones React.

Puedes instalarla ejecutando los siguiente comandos:

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

# Uso de variables de entorno en Vite

Las variables de entorno son valores que se pueden configurar y utilizar en tu aplicación durante el proceso de desarrollo o construcción. Estas variables permiten la configuración dinámica de tu aplicación en función del entorno en el que se está ejecutando.

Las variables de entorno en Vite se definen en archivos llamados ".env" y pueden tener diferentes archivos según el entorno. 

El archivo `.env` se utiliza para almacenar variables de entorno y configuraciones sensibles del proyecto, como claves de API, contraseñas o datos de conexión a bases de datos. En este repositorio, se subirá el archivo `.env` con fines de documentación y referencia.

**Importante**: Es crucial tener en cuenta que **NO se debe subir el archivo `.env` al repositorio principal**.

Los nombres comunes para los archivos de variables de entorno son:

`.env` Archivo que contiene las variables de entorno por defecto, aplicadas a todos los entornos.
`.env.local` Archivo que contiene las variables de entorno específicas de tu máquina local.
`.env[nombre_entorno]` Archivo que contiene las variables de entorno específicas de un entorno en particular, como `.env.development` o `.env.production`.

Estos archivos de variables de entorno se pueden colocar en el directorio raíz de tu proyecto Vite, y Vite los cargará automáticamente en función del entorno en el que se está ejecutando.