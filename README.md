# Formularios en Angular

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 19.0.2.

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

Para ver todos los esquemas disponibles (componentes, directivas, pipes, etc.):

```bash
ng generate --help
```

## Construcción

Para compilar el proyecto:

```bash
ng build
```

Los archivos resultantes estarán en la carpeta `dist/`.

## Pruebas unitarias

Para ejecutar pruebas unitarias con [Karma](https://karma-runner.github.io):

```bash
ng test
```

## Pruebas end-to-end

Para pruebas end-to-end (e2e):

```bash
ng e2e
```

Angular CLI no incluye un framework e2e por defecto, puedes elegir el que prefieras.

## Recursos adicionales

Para más información sobre Angular CLI, visita la [documentación oficial](https://angular.dev/tools/cli).
