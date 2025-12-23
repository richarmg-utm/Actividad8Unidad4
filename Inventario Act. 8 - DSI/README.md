# Sistema de Gestión de Inventario - Actividad #8

Sistema completo de gestión de inventario desarrollado con el stack SERN (SQLite, Express, React, Node.js).

## Estructura del Proyecto

```
Inventario Act. 8 - DSI/
├── servidor/              # Backend (Node.js + Express + SQLite)
│   ├── config/           # Configuración de base de datos
│   ├── modelos/          # Modelos de datos
│   ├── controladores/    # Lógica de negocio
│   ├── rutas/            # Endpoints API
│   ├── middlewares/      # Middleware de autenticación
│   └── app.js            # Aplicación principal
└── cliente/              # Frontend (React + Vite)
    └── src/
        ├── componentes/  # Componentes reutilizables
        ├── contextos/    # Context API
        ├── paginas/      # Páginas de la aplicación
        └── servicios/    # Servicios API
```

## Características

### Backend
- ✅ Base de datos SQLite con tablas: Usuario, Producto, HistorialMovimiento
- ✅ Autenticación con JWT
- ✅ Encriptación de contraseñas con bcrypt
- ✅ API RESTful completa
- ✅ Registro automático de movimientos de inventario
- ✅ Relaciones de clave foránea entre tablas

### Frontend
- ✅ Interfaz moderna con React
- ✅ Gestión de estado con Context API
- ✅ Rutas protegidas con React Router
- ✅ Formularios controlados
- ✅ Diseño responsivo
- ✅ Animaciones y transiciones

## Instalación

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

### Paso 1: Instalar dependencias del servidor

```bash
cd servidor
npm install
```

### Paso 2: Instalar dependencias del cliente

```bash
cd cliente
npm install
```

## Ejecución

### Iniciar el servidor (Backend)

```bash
cd servidor
npm start
```

El servidor se ejecutará en `http://localhost:5000`

Para desarrollo con auto-reload:
```bash
npm run dev
```

### Iniciar el cliente (Frontend)

```bash
cd cliente
npm run dev
```

El cliente se ejecutará en `http://localhost:3000`

## Uso del Sistema

1. **Registro**: Crea una cuenta nueva en `/registro`
2. **Inicio de Sesión**: Accede con tus credenciales en `/`
3. **Panel de Control**: Gestiona productos (crear, editar, eliminar)
4. **Historial**: Los movimientos de inventario se registran automáticamente

## API Endpoints

### Autenticación
- `POST /api/usuarios/registro` - Registrar nuevo usuario
- `POST /api/usuarios/login` - Iniciar sesión

### Productos (requieren autenticación)
- `GET /api/productos` - Listar todos los productos
- `GET /api/productos/:id` - Obtener producto por ID
- `POST /api/productos` - Crear nuevo producto
- `PUT /api/productos/:id` - Actualizar producto
- `DELETE /api/productos/:id` - Eliminar producto

### Historial (requiere autenticación)
- `GET /api/historial` - Obtener historial completo
- `GET /api/historial/producto/:productoId` - Historial por producto

## Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- SQLite3
- bcryptjs
- jsonwebtoken

### Frontend
- React 18
- Vite
- React Router DOM
- Axios

## Autor
Richard Moreira Giler
Actividad #8 - Desarrollo de Sistemas Informáticos
Universidad Tecnica de Manabi - Ing. en Tecnologias de la Informacion
