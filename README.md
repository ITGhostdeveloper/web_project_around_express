# Tripleten web_project_around_express

## Descripción
Este proyecto es una aplicación web construida con Express.js.La aplicación proporciona rutas para manejar datos de usuarios y de tarjetas, almacenados en archivos JSON. 

## Funcionalidades
- **Rutas de usuarios**: Información de los usuarios o de un usuario específico por su ID.
- **Rutas de tarjetas**: Información de las tarjetas disponibles.
- **Configuración de servidor**: Servidor Express configurado para manejar rutas y adquirir datos.
- **Estructura modular**: Código organizado en rutas y controladores para facilitar el mantenimiento.

## Rutas ( Endpoints)

- Obtener todos los usuarios: GET /users
- Obtener usuario por ID: GET /users/:id
- Obtener todas las tarjetas: GET /cards

## Tecnologías utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **ESLint**: Herramienta para mantener un código limpio y consistente.
- **Nodemon**: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.
- **Visual Studio Code version 1.92** : Editor de código fuente utilizado para escribir y organizar el proyecto, con soporte para HTML, CSS y JavaScript.
- **GitHub**: Plataforma de control de versiones utilizada para alojar el código, colaborar en equipo y llevar un historial del proyecto.
- **JavaScript (ES6+)**: Lenguaje de programación principal del proyecto

## Cómo ejecutar el proyecto
1. Clonar el repositorio
   **git clone** https://github.com/ITGhostdeveloper/web_project_around_express.git
   **cd** web_project_around_express.
2. Instalar las dependencias:
   **npm install**
3. Iniciar el servidor:
   **npm run start**
4. Iniciar el servidor con Hot Reload:
   **npm run dev** 

## Estructura del proyecto
WEB_PROJECT_AROUND_EXPRESS/
├── data/
│   ├── cards.json
│   └── users.json
├── routes/
│   ├── cards.js
│   └── users.js
├── app.js
├── package.json
└── README.md

## Autor

Desarrollado por Andres Hurtado.
(https://itghostdeveloper.github.io/web_project_around_express/)