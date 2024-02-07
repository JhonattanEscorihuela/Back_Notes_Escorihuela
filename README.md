# Backend de la Aplicación

Este es el backend de la aplicación que proporciona servicios RESTful para la aplicación frontend correspondiente. Utiliza Node.js con Express.js como servidor web, y Sequelize como ORM para interactuar con la base de datos PostgreSQL.

## Requerimientos

A continuación se detallan las herramientas y dependencias necesarias para ejecutar el backend de la aplicación:

- **Node.js**: Se requiere Node.js para ejecutar el servidor backend. Se recomienda la versión 14.x o superior.

- **npm**: npm es el administrador de paquetes de Node.js y se utiliza para instalar las dependencias del proyecto. Se recomienda la versión 6.x o superior.

- **PostgreSQL**: El backend utiliza una base de datos PostgreSQL para almacenar y gestionar los datos de la aplicación. Se recomienda PostgreSQL versión 12.x o superior.

## Instalación

1. Clona el repositorio desde [GitHub](https://github.com/ensolvers-github-challenges/Escorihuela-3cbbd3.git):

2. Accede al directorio del proyecto backend:


3. Instala las dependencias del proyecto utilizando npm:

`npm install`


## Configuración

El backend utiliza un archivo `.env` para configurar las variables de entorno necesarias. Asegúrate de crear un archivo `.env` en el directorio raíz del proyecto y configurar las siguientes variables:

- `DB_USER=postgres`
- `DB_PASSWORD=contraseña`
- `DB_HOST=localhost`
- `DB_NAME=notes`
- `PORT=3001`


## Ejecución

Una vez que hayas instalado las dependencias y configurado el archivo `.env`, puedes ejecutar el backend utilizando el siguiente comando:

`npm run dev`


Esto iniciará el servidor backend y estará listo para aceptar solicitudes desde el frontend de la aplicación.

## Endpoints de la API

La API proporciona los siguientes endpoints:

- `POST /api/notes/create`: Crea una nueva nota en la base de datos.
- `PUT /api/notes/edit/:id`: Actualiza una nota existente en la base de datos.
- `DELETE /api/notes/delete/:id`: Elimina una nota existente de la base de datos.
- `GET /api/notes/all`: Obtiene todas las notas almacenadas en la base de datos.
- `PUT /api/notes/archive/:id`: Archiva una nota existente.
- `PUT /api/notes/unarchive/:id`: Desarchiva una nota existente.
- `PUT /api/notes/active/:id`: Activa una nota existente.
- `PUT /api/notes/unactive/:id`: Desactiva una nota existente.
