# 🥖 Crustify – Backend API

Backend de **Crustify**, una aplicación web para la **administración de clientes, productos y ventas de una panadería**.

Este proyecto forma parte del **Trabajo Final de la Diplomatura Full Stack** del **Nodo Tecnológico de Catamarca (Argentina)**. El sistema está dividido en **dos repositorios independientes**: backend (API REST) y frontend.

---

## 📌 Descripción general

El backend de Crustify expone una **API RESTful** desarrollada con **Node.js, Express y MongoDB**, encargada de:

* Gestión de usuarios y autenticación
* Administración de clientes
* Administración de productos
* Registro de ventas
* Seguridad mediante JWT
* Validación de datos y control de errores

El frontend consume esta API para operar el sistema completo.

---

## 🛠️ Tecnologías utilizadas

* **Node.js**
* **Express 5**
* **MongoDB + Mongoose**
* **JWT (JSON Web Tokens)**
* **bcryptjs** (hash de contraseñas)
* **express-validator** (validaciones)
* **dotenv** (variables de entorno)
* **cors** (control de acceso)
* **morgan** (logging de requests)

---

## 📦 Dependencias principales

```json
"dependencies": {
  "bcryptjs": "^3.0.3",
  "cors": "^2.8.5",
  "dotenv": "^17.2.3",
  "express": "^5.1.0",
  "express-validator": "^7.3.0",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^8.19.3",
  "morgan": "^1.10.1"
}
```

---

## 🗂️ Estructura del proyecto

```
crustify-backend/
│
├── src/
│   ├── config/        # Configuración (DB, variables, etc.)
│   ├── controllers/   # Lógica de negocio
│   ├── models/        # Modelos de Mongoose
│   ├── routes/        # Rutas de la API
│   ├── middlewares/   # Middlewares (auth, validaciones)
│   └── app.js         # Configuración principal de Express
│
├── .env.example       # Variables de entorno de ejemplo
├── package.json
└── README.md
```

---

## 🔐 Autenticación y seguridad

* Autenticación basada en **JWT**
* Contraseñas encriptadas con **bcryptjs**
* Protección de rutas mediante middleware
* Validación de datos con **express-validator**

---

## 🌐 Endpoints principales (ejemplo)

> La API sigue principios REST

* **Auth**

  * `POST /api/auth/register`
  * `POST /api/auth/login`

* **Clientes**

  * `GET /api/clientes`
  * `POST /api/clientes`
  * `PUT /api/clientes/:id`
  * `DELETE /api/clientes/:id`

* **Productos**

  * `GET /api/productos`
  * `POST /api/productos`

* **Ventas**

  * `POST /api/ventas`
  * `GET /api/ventas`

*(Los endpoints pueden variar según la implementación final)*

---

## ⚙️ Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/crustify
JWT_SECRET=tu_secreto_super_seguro
```

---

## ▶️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/crustify-backend.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno (`.env`)

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

O en modo producción:

```bash
npm start
```

---

## 🧪 Testing

Actualmente el proyecto puede ser probado utilizando:

* **Postman** o **Insomnia**
* Colecciones de endpoints para verificar autenticación y CRUD

---

## 📬 Colección Postman

Para facilitar la evaluación y prueba de la API, se provee una **colección de Postman** con todos los endpoints del sistema.

🔗 **Enlace a la colección Postman:**
👉 * https://web.postman.co/workspace/f53e0c6d-a9d7-4c74-84c9-199d05ea41d7/collection/42563303-7a992e34-3282-44d3-9ee1-e37e2c4b979a?action=share&source=copy-link&creator=42563303

La colección incluye:

* Autenticación (register / login)
* Gestión de clientes
* Gestión de productos
* Registro y consulta de ventas
* Endpoints protegidos con JWT

> ⚠️ **Nota:** Para probar los endpoints protegidos es necesario:
>
> 1. Autenticarse mediante el endpoint de login
> 2. Copiar el token JWT recibido
> 3. Configurarlo en Postman como `Authorization → Bearer Token`

---

## 🎓 Contexto académico

Este backend fue desarrollado como **Trabajo Final Integrador** de la **Diplomatura Full Stack** dictada por el **Nodo Tecnológico de Catamarca**, aplicando buenas prácticas de desarrollo backend y arquitectura REST.

---

## 👨‍💻 Autor

**Braian**
Desarrollador Full Stack

---

## 📄 Licencia

Este proyecto se desarrolla con fines **educativos y académicos**.

---

> 🥐 *Crustify – Simplificando la gestión de tu panadería*
