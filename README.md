# Inversiones Frontend

Aplicacion web para administrar usuarios y fondos de inversion. Este frontend consume una API REST y permite consultar informacion de usuarios, fondos y fondos asociados a cada usuario.

## Que hace el proyecto

- Muestra una vista principal con navegacion lateral entre secciones.
- Seccion de usuarios con tabla de datos basicos.
- Seccion de fondos con tabla de fondos disponibles.
- Modal de detalle por usuario para ver sus fondos asociados.
- Accion para simular meses sobre un fondo del usuario desde el modal de detalle.

## Que funciona actualmente

- Consulta de usuarios desde la API.
- Consulta de fondos desde la API.
- Consulta de fondos por usuario.
- Simulacion de meses en un fondo-usuario (refrescando los datos al finalizar).
- Estados de carga, error y listas vacias en las vistas principales.

## Alcance actual

Hay botones visibles de agregar, editar y eliminar (usuarios/fondos), pero varias de esas acciones aun no estan conectadas a formularios o endpoints en la UI actual.

## Stack tecnico

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Componentes UI tipo shadcn

## Requisitos

- Node.js 18+
- npm
- Backend/API en ejecucion

## Configuracion

Este proyecto usa la variable de entorno `VITE_API_URL` para apuntar al backend.

1. Crea un archivo `.env` en la raiz del proyecto.
2. Define la URL base de tu API:

```env
VITE_API_URL=http://localhost:3000
```

Si no defines `VITE_API_URL`, el frontend intentara consumir rutas relativas (por ejemplo `/usuarios`, `/fondos`, etc.) en el mismo host donde se sirva la app.

## Como ejecutar el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Levantar en modo desarrollo:

```bash
npm run dev
```

3. Abrir en el navegador la URL que muestra Vite (normalmente `http://localhost:5173`).

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: compila TypeScript y genera build de produccion.
- `npm run preview`: sirve localmente el build generado.
- `npm run lint`: ejecuta ESLint.

## Estructura general

- `src/pages`: vistas principales.
- `src/components`: componentes de UI y secciones de negocio.
- `src/hooks`: hooks para carga de datos y estado.
- `src/api`: funciones para consumir endpoints REST.
- `src/types`: tipados TypeScript del dominio.
