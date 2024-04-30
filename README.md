## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [FAQs](#faqs)

### General Info
***
Este proyecto tiene como objetivo automatizar pruebas para la aplicación web de Spotify. Proporciona una suite de pruebas diseñada para cubrir diversas funcionalidades de la aplicación, como inicio de sesión, búsqueda, reproducción de música, gestión de listas de reproducción, seguimiento de artistas y gestión de la biblioteca personal.

La estructura del proyecto se organiza de la siguiente manera:
- Una clase llamada `musicPageSpotifyFlow` que gestiona la apertura y cierre del navegador para todas las pruebas.
- Clases individuales para diferentes funcionalidades, como inicio de sesión, búsqueda, reproducción de música, gestión de listas de reproducción, seguimiento de artistas y gestión de la biblioteca personal.

### Technologies
***
Lista de tecnologías utilizadas en el proyecto:
* [Cypress](https://www.cypress.io/): Version 13.8.1
* [Aqua](https://aguas.com/): Version 17.0.10+1-b1207.14 amd64
* [Java](https://www.java.com/): Version 17.0.10

### Installation
***
A continuación, se detallan los pasos para instalar el proyecto y configurar el entorno de prueba:

1. Clonar el repositorio del proyecto:
$ git clone https://github.com/PilarGra/musicAutomationCypress
2. Navegar al directorio del proyecto: $ cd musicAutomationCypress
3. Configurar el entorno de desarrollo: $ npm install

### Usage
***
Aquí se describe cómo usar el proyecto para ejecutar pruebas en la aplicación web de Spotify:

1. Ejecutar las pruebas de inicio de sesión:
$ npx cypress run --spec "cypress/integration/login.spec.js"

2. Ejecutar pruebas de búsqueda de canciones:
$ npx cypress run --spec "cypress/integration/search.spec.js"

3. Verificar los informes de prueba generados en la carpeta `cypress/reports`.

### Contributing
***
Si desea contribuir al proyecto, siga estos pasos:

1. Forkea el repositorio.
2. Cree una nueva rama (`git checkout -b feature/awesome-feature`).
3. Realice los cambios deseados y confirme (`git commit -am 'Agrega una función increíble'`).
4. Empuje a la rama (`git push origin feature/awesome-feature`).
5. Abra una solicitud de extracción.

### FAQs
***
Preguntas frecuentes sobre el proyecto:

1. **¿Cómo puedo ejecutar pruebas en diferentes navegadores?**
Puede configurar el navegador deseado en el archivo `cypress.json`.

2. **¿Cómo puedo contribuir al proyecto?**
Consulte la sección de Contribuciones anteriormente mencionada para obtener instrucciones detalladas.
