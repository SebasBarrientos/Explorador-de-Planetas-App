# Explorador de Planetas App

Explorador de Planetas App es una aplicación full-stack desarrollada con Next.js, React, TypeScript y Prisma. La aplicación muestra una lista de planetas ficticios que se almacenan en una base de datos SQL (por defecto, PostgreSQL). Los datos se originan en un archivo CSV generado por un script en Python, el cual se encuentra en el repositorio [Script-Python-Planetas](https://github.com/SebasBarrientos/Script-Python-Planetas). Posteriormente, estos datos son parseados y enviados mediante un endpoint POST para cargarlos en la base de datos, mientras que la obtención de la lista de planetas se realiza a través de la conexión directa a la base de datos.

La lógica de conexión y manejo de la base de datos se encuentra encapsulada en el archivo `app/services/planetservices.ts` y en la carpeta `actions`, permitiendo separar de forma modular la lógica de negocio de la interfaz de usuario.

## Tabla de Contenidos

- [Características](#características)
- [Arquitectura y Flujo de Datos](#arquitectura-y-flujo-de-datos)
- [Instalación y Configuración](#instalación-y-configuración)
- [Desarrollo](#desarrollo)
- [Despliegue](#despliegue)
- [Interacción con el Script Python](#interacción-con-el-script-python)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- **Ingesta Dinámica de Datos:** Los datos de los planetas se generan mediante un script en Python que crea un archivo CSV con información aleatoria.
- **Carga en Base de Datos:** A través de un endpoint POST, la aplicación parsea el CSV y utiliza Prisma para insertar los registros en la base de datos SQL.
- **Obtención de Datos:** El frontend obtiene la lista de planetas directamente desde la base de datos mediante funciones del lado del servidor en Next.js.
- **Interfaz Moderna:** Construida con Next.js, React y TypeScript, ofreciendo una experiencia de usuario de última generación y utilizando la librería [HeroUI](https://heroui.com/).
- **Código Modular:** La lógica de conexión a la base de datos y operaciones CRUD se encuentra organizada en `app/services/planetservices.ts` y la carpeta `actions`, lo que facilita el mantenimiento y la escalabilidad del proyecto.

## Arquitectura y Flujo de Datos

La aplicación se divide en dos bloques principales:

1. **Generación e Ingesta de Datos**
   - **Script en Python:** El repositorio [Script-Python-Planetas](https://github.com/SebasBarrientos/Script-Python-Planetas) contiene scripts que generan un archivo CSV con datos de planetas (como temperatura, gravedad, composición, habitabilidad, etc.) y que pueden ser usados para actualizar la base de datos.
   - **Parseo e Inserción:** Una vez generado el CSV, la aplicación lo parsea y envía sus datos mediante un endpoint POST. Este endpoint utiliza Prisma para insertar la información en la base de datos SQL.

2. **Recuperación y Presentación de Datos**
   - **Conexión a la Base de Datos:** La aplicación se conecta a la base de datos (usando Prisma) para obtener la lista de planetas. La configuración de la conexión se realiza mediante variables de entorno definidas en el archivo `.env`.
   - **Interfaz de Usuario:** El frontend consulta y presenta los datos almacenados en una lista interactiva. Al seleccionar un planeta, se muestra un popup con información detallada sobre el mismo.

Este flujo garantiza que la fuente de datos (CSV generado por Python) se procese y almacene de forma centralizada, permitiendo que la interfaz de usuario siempre muestre información consistente y actualizada.

## Instalación y Configuración
Instala las dependencias mediante npm install

### Requisitos

- [Node.js](https://nodejs.org/) (se recomienda la versión LTS)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Prisma CLI](https://www.prisma.io/docs/getting-started) (se instala como dependencia)

### Pasos

### 1. **Clonar el Repositorio**

   
   **git clone https://github.com/SebasBarrientos/Explorador-de-Planetas-App.git**
   
   **cd Explorador-de-Planetas-App** 

### 2. **Instalar Dependencias**
- **npm install**
 
### 3. Configurar Variables de Entorno

- Cambia el nombre del archivo `env.example` a `.env`.
- Edita el archivo `.env` para configurar las variables necesarias. Por ejemplo, asegúrate de definir la variable `DATABASE_URL` con la cadena de conexión a tu base de datos PostgreSQL.

### 4. Configurar Prisma y la Base de Datos

- Ejecuta las migraciones de Prisma para configurar el esquema de la base de datos:

  **npx prisma migrate dev --name init**
  
- (Opcional) Si deseas generar el cliente de Prisma, ejecuta:
  
- **npx prisma generate**
## Uso

Una vez instalada y configurada la aplicación, puedes iniciar el servidor de desarrollo:

- **npm run dev**
 
- La aplicación estará disponible en http://localhost:3000.

**Funcionalidades Clave**
- Carga de Datos CSV: Accede al endpoint POST definido en la aplicación para subir el archivo CSV generado por el script en Python. Esto llenará la base de datos con la información de los planetas.
- Visualización de Planetas: Navega a la página principal para ver la lista de planetas. Al hacer clic sobre un planeta, se desplegará un popup con detalles adicionales.

## Para desarrollo y despliegue:
[Next.js](https://nextjs.org/). y [Vercel](https://vercel.com/) 

### Interacción con el Script Python

La integración con el script en Python se realiza de la siguiente forma:

- Generación del CSV: Utiliza el repositorio Script-Python-Planetas para generar un archivo CSV con datos de planetas.
- Subida de Datos: Una vez generado, utiliza el endpoint POST de esta aplicación para enviar el CSV. La lógica de parseo y la inserción de los datos en la base de datos se manejan en el backend (en app/services/planetservices.ts y en la carpeta actions). La interfaz de la página es bastante intuitiva para ello.

## Licencia
Distribuido bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
