Editor.md
Open source online Markdown editor.

# Proyecto WebApp con Server-Side Rendering
Este proyecto se basa en el ejercicio de Platzi donde aprendimos a crear una aplicación web con Server-Side Rendering (SSR) utilizando tecnologías como Webpack. El enfoque principal de este proyecto es mejorar la experiencia del usuario y optimizar el SEO de la página al generar la vista directamente desde el servidor.
​
Configuración del Proyecto
Requisitos Previos
Asegúrate de tener instalado Node.js y npm en tu sistema antes de comenzar.
​
## Captura de Pantalla
​
[Visita la Web](https://ssr-webapp.onrender.com/ "Visita la Web")
​
[![https://pbs.twimg.com/media/GDlITLGXoAATcGY?format=jpg&name=medium](https://pbs.twimg.com/media/GDlITLGXoAATcGY?format=jpg&name=medium "https://pbs.twimg.com/media/GDlITLGXoAATcGY?format=jpg&name=medium")](https://pbs.twimg.com/media/GDlITLGXoAATcGY?format=jpg&name=medium "https://pbs.twimg.com/media/GDlITLGXoAATcGY?format=jpg&name=medium")
​
​
## Características Principales
- Server-Side Rendering (SSR): La aplicación genera la vista directamente desde el servidor, mejorando la velocidad de carga inicial y la experiencia del usuario.
​
- Webpack: Utilizamos Webpack para la configuración y gestión de módulos, permitiendo una estructura de código modular y eficiente.
​
- SEO Optimizado: Al renderizar las páginas en el servidor, mejoramos la indexación de los motores de búsqueda, aumentando la visibilidad de la aplicación en los resultados de búsqueda.
​
### Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor, sigue las pautas de contribución y envía tus pull requests.
​
###Licencia
Este proyecto está bajo la licencia MIT.
Proyecto WebApp con Server-Side Rendering
Este proyecto se basa en el ejercicio de Platzi donde aprendimos a crear una aplicación web con Server-Side Rendering (SSR) utilizando tecnologías como Webpack. El enfoque principal de este proyecto es mejorar la experiencia del usuario y optimizar el SEO de la página al generar la vista directamente desde el servidor.

Configuración del Proyecto
Requisitos Previos
Asegúrate de tener instalado Node.js y npm en tu sistema antes de comenzar.

Captura de Pantalla
Visita la Web

https://pbs.twimg.com/media/GDlITLGXoAATcGY?format=jpg&name=medium

Características Principales
Server-Side Rendering (SSR): La aplicación genera la vista directamente desde el servidor, mejorando la velocidad de carga inicial y la experiencia del usuario.

Webpack: Utilizamos Webpack para la configuración y gestión de módulos, permitiendo una estructura de código modular y eficiente.

SEO Optimizado: Al renderizar las páginas en el servidor, mejoramos la indexación de los motores de búsqueda, aumentando la visibilidad de la aplicación en los resultados de búsqueda.

Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor, sigue las pautas de contribución y envía tus pull requests.

Licencia
Este proyecto está bajo la licencia MIT.

Example
<link rel="stylesheet" href="editormd/css/editormd.css" />
<div id="test-editor">
    <textarea style="display:none;">### Editor.md

**Editor.md**: The open source embeddable online markdown editor, based on CodeMirror & jQuery & Marked.
    </textarea>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="editormd/editormd.min.js"></script>
<script type="text/javascript">
    $(function() {
        var editor = editormd("test-editor", {
            // width  : "100%",
            // height : "100%",
            path   : "editormd/lib/"
        });
    });
</script>Copy
More Examples >>

Features
Support Standard Markdown / CommonMark and GFM(GitHub Flavored Markdown);
Full-featured: Real-time Preview, Image (cross-domain) upload, Preformatted text/Code blocks/Tables insert, Code fold, Search replace, Read only, Themes, Multi-languages, L18n, HTML entities, Code syntax highlighting...;
Markdown Extras : Support ToC (Table of Contents), Emoji, Task lists, @Links...;
Support TeX (LaTeX expressions, Based on KaTeX), Flowchart and Sequence Diagram of Markdown extended syntax;
Support identification, interpretation, fliter of the HTML tags;
Support AMD/CMD (Require.js & Sea.js) Module Loader, and Custom/define editor plugins;
Compatible with all major browsers (IE8+), compatible Zepto.js and iPad;
Support Custom theme styles;
Download & install
Latest version: v1.5.0，Update: 2015-06-09



 


Or NPM install:

npm install editor.md



Or Bower install:

bower install editor.md




Change logs:

CHANGES

Dependents
Projects :

CodeMirror
marked
jQuery
FontAwesome
github-markdown.css
KaTeX
Rephael.js
prettify.js
flowchart.js
sequence-diagram.js
Prefixes.scss

Development tools :

Visual Studio Code
Sass/Scss
Gulp.js
License
Editor.md follows the MIT License, Anyone can freely use.





Fork me on Github :







Users

 Contact Us: editor.md@ipandao.com


Editor.md
Copyright © 2015-2019 Editor.md, MIT license.

Design & Develop By: Pandao     