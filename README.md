
# Formulario Reactivo Moderno en Angular

Este proyecto demuestra el desarrollo de un formulario reactivo avanzado utilizando la nueva sintaxis de Angular (v17+), con validaciones legibles y centralizadas, y la integración de MCP Servers para potenciar la automatización y la colaboración.

## ¿Por qué es relevante para empresas?

- **Código moderno y mantenible:** Uso de la nueva sintaxis de control de flujo (`@if`, `@for`) y componentes standalone para mayor claridad y escalabilidad.
- **Validaciones centralizadas y UX mejorada:** Mensajes de error claros y lógica de validación reutilizable, facilitando la extensión y el mantenimiento.
- **Automatización y colaboración:** Integración con MCP Servers para acelerar el desarrollo, la revisión y la integración continua.
- **Ejemplo real de buenas prácticas:** El código y la estructura del proyecto siguen estándares actuales recomendados para equipos profesionales.

## Tecnologías y herramientas utilizadas

- **Angular 17+** (standalone components, nueva sintaxis)
- **Reactive Forms** (validaciones avanzadas)
- **MCP Servers** (automatización y colaboración)
- **TypeScript** (estricto y moderno)

## Ejemplo de formulario

El formulario permite gestionar datos personales y pasatiempos, con validaciones en tiempo real y mensajes de error personalizados:

![Demo del formulario](./screenshot-formulario.png)

```html
@if (getErrorMsg('nombre')) {
  <small class="text-danger">{{ getErrorMsg('nombre') }}</small>
}
```

## ¿Cómo se desarrolló?

El desarrollo se realizó con ayuda de los MCP Servers, que permitieron automatizar tareas, validar código y mantener un flujo de trabajo eficiente y colaborativo.

## Instrucciones rápidas

## Conceptos clave utilizados en este proyecto

- **Formularios reactivos**: Implementación de formularios utilizando el enfoque reactivo de Angular para un mayor control y validación dinámica.
- **Formularios basados en plantillas (template-driven)**: Uso de formularios declarativos aprovechando las directivas de Angular en las plantillas HTML.
- **Servicios**: Uso de servicios como `pais.service.ts` para la gestión de datos y lógica de negocio, promoviendo la reutilización y separación de responsabilidades.
- **Componentes de Angular**: Estructuración de la aplicación en componentes reutilizables y modulares.
- **Uso de Angular CLI**: Herramientas para desarrollo, pruebas y construcción del proyecto.
- **Tecnología MCP Servers**: Integración y uso de servidores MCP para automatización, consultas y servicios avanzados dentro del flujo de trabajo del proyecto.

## Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Luego abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar los archivos fuente.

## Generación de código

Angular CLI incluye herramientas para generar código. Para crear un nuevo componente, ejecuta:

```bash
ng generate component nombre-del-componente
```


