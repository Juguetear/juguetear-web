# Contribuciones a Juguetear Web

En este documento encontrarás información sobre las diferentes maneras de realizar contribuciones a este proyecto.

Utilizamos [GitHub Issues](gh-issues) para llevar el seguimiento de reportes de bugs (_bug reports_) y mejoras propuestas (_features requests_).

> [!warning]
> Recordá antes de contribuir, es **requerido** que seas parte del [servidor de FrontendCafé][dc-fec] en Discord.

Para aportar a este repositorio, podés contribuir en algún _issue_ que esté abierto, crear nuevos issues, sugiriendo _feature request_ o _bug report_, o dar _code review_ a otres contribuidores. Los _Pull Requests_ de **minima** complejidad son bienvenidos.

> [!note]
> Si en algún momento necesitas hacer una consulta, podés hacerla en nuestro canal [#juguetear][dc-channel] en Discord.

## Tabla de contenido

- [Contribuciones a Juguetear Web](#contribuciones-a-juguetear-web)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Clonar en repositorio](#clonar-en-repositorio)
  - [Git Flow utilizado](#git-flow-utilizado)
  - [Issues](#issues)
    - [Contribuir en un Issue](#contribuir-en-un-issue)
    - [Crear un nuevo issue](#crear-un-nuevo-issue)
  - [Pull Requests](#pull-requests)
    - [Contribuir con un Pull Request](#contribuir-con-un-pull-request)
    - [Como contribuir con un Pull Request](#como-contribuir-con-un-pull-request)
    - [Code Review](#code-review)
  - [Licencias](#licencias)

---

## Clonar en repositorio

Para empezar a contribuir tenés dos opciones:

1. Podés hacer [fork][url-gb-fork] del repositorio y luego [clonarlo][url-gb-clone] para trabajar en tus cambios.
2. Podés [clonarlo][url-gb-clone] directamente y trabajar en tus cambios, pero **necesitaras** permisos para hacer `push`, los puedes solicitar a @nykka en el canal [#juguetear][dc-channel] en Discord.

Una vez elijas, desde tu terminal ejecuta uno de estos comandos:

```bash
# SSH
git clone git@github.com:Juguetear/juguetear-web.git

# HTTPS
git clone https://github.com/Juguetear/juguetear-web.git
```

---

## Git Flow utilizado

Si es primera vez y aun no tienes permisos de escritura al repositorio puedes:

1. En tu repositorio local, crea una rama (_branch_) desde `development`.  
   El nombre del branch debe tener un nombre descriptivo o va a ser tomado del número y título del _issue_ (ej. `1-crear-archivo-readme`).

   <details>
      <summary>Si ya tenés permisos de escritura a la repo, Podés seguir estos pasos (click para ver más)</summary><br>

   > [!important]
   > Pueden ver la secuencia completa en el siguiente [video](https://user-images.githubusercontent.com/78808163/198988746-3a7a20c4-be96-4cfd-a958-b2834ceac234.webm)

   ![alt text](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgh6AupvHRtFhlU2QpOY1vu5UXk_ktTkKQmdEqE8786msHnWiM3ov5GqpoOkS0-peaVAPULvlpFmj8-bhAsQ31nAIjBUJl4ptD-wnPO3dDVgFkOR-OuJaO_8wUTKYX-66KsaBQEEMWRHBUMKSwaqOUgq2WBC7s0JRKqqmbpoaZciKZrVH45GjSVrJxzQ/s16000/issue1.png)

   ![alt text](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj13TFVKzPNH9ZacndkHlw4_19aMt6E0RuFUVy6r-osxthMomDli3zJl2WM3W2ykMfAwVfklq1Atdbz8PUQORBJV1uPk-udlfQkEDJXm44qIvKYS5MWyXdEzWm4MVGwNaHgmwGykpaMuEfSwCf90rnQUSfbV_yZUTRXSAfcFFuqH2i8rLgsPEr1zYmRMw/s16000/issue3.png)

   </details>

   > [!important]
   > Recordá ejecutar `git pull` desde la consola de comandos antes de crear un nuevo branch, así tu rama `development` está actualizada con los últimos cambios.

2. Trabajá en tus cambios. Hacé commits por cada bloque de cambios y escribí un mensaje descriptivo en cada _commit_. Recordá que es obligatorio que los cambios propuestos cumplan con los **requisitos WCAG 2.1 de nivel AA**

   > [!note]
   > Tené en cuenta que el código que escribas debe estar en inglés junto con sus comentarios, en caso de que sean necesarios.

3. Hacé `push` de tu _branch_ al repositorio remoto ejecutando:

   ```bash
   git push -u origin <nombre-de-tu-rama>
   ```

4. Luego, con tus cambios en la rama remota [crea un Pull Request](#como-contribuir-con-un-pull-request)

5. Fase final de [Code Review](#code-review)

---

## Issues

### Contribuir en un Issue

Podés encontrar issues de poca complejidad etiquetados como "Good first issue" o visitando la pagina [contribuir][gh-contribute], recomendados para quienes contribuyen por primera vez.

Si deseas contribuir en alguno de los issues abiertos, primero es necesario que elijas un issue en el que quieras trabajar (previamente comprobando que nadie esté trabajando en el issue), que leas muy bien la descripción y realices todas las preguntas necesarias en los comentarios del issue o en el canal [#juguetear][dc-channel] para evacuar tus dudas.

> [!importante]
> Es muy importante que las contribuciones que realices cumplan mínimamente con los **estándares de WCAG 2.1 de nivel AA**.

Si estas seguro que deseas trabajar en el issue, puedes dejar un comentario en el issue que desees y te lo asignaremos lo mas pronto posible, también es bueno que nos avises en [#juguetear][dc-channel].

### Crear un nuevo issue

> [!important]
> Antes de crear un issue, por favor, verifica que actualmente no exista uno relevante dirigiéndote a la [página de issues][gh-issues].  
> Podés buscar en la lista aplicando palabras claves en el buscador o utilizando filtros.

Para crear un issue, lo podés hacer desde a la [página de issues][gh-issues] en GitHub, presionando el botón "New issue", o accediendo a mediante [este enlace][gh-new-issue].  
Allí aparecerán las plantillas para crear nuevos issues, elige la apropiada para el caso.

Una vez que hayas ingresado a la página con el formulario para crear el issue, es necesario que completes información requerida. Tené en cuenta que esto lo va a leer otra persona, y mientras más detallado sea, mejor.

<details>
   <summary>Reportar un bug (Bug Report)</summary><br>

Para que sea más fácil para otras personas entender el problema, es necesario que brindes la mayor cantidad de información de manera clara y detallada. Y sinceramente estaríamos encantados de que **trabajes en propio tu issue generado!**

Puedes reportar un bug mediante el siguiente [este enlace][gh-bug-form].

</details>

<details>
   <summary>Cómo sugerir una feature (Feature Request)</summary><br>

Necesitamos la mayor cantidad de información de manera clara y concisa. También tené en cuenta que la **feature propuesta por vos va a ser evaluada** por las personas que administran el repositorio y aprobada en caso de estar alineada con el proyecto, o declinada en caso contrario.

> [!note]
> Si necesitas realizar consultas podes hacerlas en el canal [#juguetear][dc-channel] en Discord.

Puedes reportar un bug mediante el siguiente [este enlace][gh-feat-form].

</details>

---

## Pull Requests

### Contribuir con un Pull Request

Podés contribuir con Pull Requests directamente, siempre que este no sea muy complejo.

> [!warning]
> Para evitar conflictos, asegúrate que tus cambios no tengan un issue abierto y escribe un mensaje por el canal [#juguetear][dc-channel] para que los demás sepan en que cambios estas por trabajar.

**Unos ejemplos para PRs pequeños son:**

- Agregar _unit tests_ individuales.
- Cambiar nombres de variables, etc.
- Corregir palabras en la documentación, typos, etc.
- No mas de 5 lineas de código.
- Todo lo que se pueda categorizar como un _Good first issue_.

### Como contribuir con un Pull Request

Si acabas de hacer `push` de cambios locales a una rama (_branch_) remota, podés visitar el repositorio en GitHub y seguramente te aparecerá un mensaje para crear una solicitud de incorporación de cambios (_Pull Request_), luego, al iniciar el PR debes completar el formulario describiendo en detalle los cambios que hiciste. Si estabas trabajando en un issue, asegurate de asociarlo al numero del issue, ej: #01.

> [!note] > **Si no podés ver el mensaje, están estas alternativas:**
>
> - Si hiciste fork y luego clone, tenés [esta guía][url-gb-fork_pr]
> - Si hiciste clone directo, tenés [esta guía][url-gb-pr]

> [!note]
> Si en algún momento necesitas hacer una consulta, podés hacerla en nuestro canal [#juguetear][dc-channel] en Discord.

Ahora es tiempo de esperar que les administradores y/o contribuidores hagan [_code review_](#code-review).

> [!note]
> Mientras esperás _feedback_ de tus cambios, aprovechá y hacé [_code review_](#code-review) de otros _Pull Request_.

Si recibiste _feedback_ solicitando cambios, tenés que seguir trabajando en tu _branch_ y haciendo `push` de esos cambios al repositorio remoto. Una vez que termines, tu _PR_ va a estar de nuevo listo para revisión. Estos pasos lo tenés que repetir hasta que sea aprobado. Si tenés dudas o querés discutir los cambios que te solicitaron, lo podés hacer en el mismo _PR_ o en nuestro canal [#juguetear][dc-channel].

Si tu _Pull Request_ es aprobado, felicitaciones! Ya está listo para ser mergeado a `development`. Luego las personas que administran el repositorio harán un _release_ con todos los cambios que hay en `development` para ponerlos online.

### Code Review

Podés sugerir o aprobar cambios en Pull Requests de otros contribuidores.

Esta es una excelente oportunidad para aprender y compartir conocimiento, puedes [mirar esta guía][url-gb-review] para saber más.

---

## Licencias

Todas las contribuciones que se realicen serán bajo las licencias [Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)][doc-lic-2] y [GNU General Public License v3.0][doc-lic-1].

Si contribuyes a este repositorio, aceptas de que tus contribuciones sean licenciadas bajo las licencias utilizadas en este proyecto.

<!-- Listado de enlaces de referencia, mantenerlos actualizados en cada archivo -->
<!-- Enlaces a archivos de documentación (propios al repositorio)  -->

[doc-lic-1]: LICENSE
[doc-lic-2]: LICENSE-CC-BY-NC-SA

<!-- Enlaces a Discord -->

[dc-channel]: https://discord.com/channels/594363964499165194/1035685740409012244
[dc-fec]: https://discord.com/invite/frontendcafe

<!-- Enlaces al repositorio en Github -->

[gh-contribute]: https://github.com/Juguetear/juguetear-web/contribute
[gh-issues]: https://github.com/Juguetear/juguetear-web/issues
[gh-new-issue]: https://github.com/Juguetear/juguetear-web/issues/new/choose
[gh-feat-form]: https://github.com/Juguetear/juguetear-web/issues/new?template=FEATURE_FORM.yml
[gh-bug-form]: https://github.com/Juguetear/juguetear-web/issues/new?template=BUG_FORM.yml

<!-- Documentación externa -->

[url-gb-review]: https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests
[url-gb-clone]: https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository#clonar-un-repositorio
[url-gb-fork]: https://docs.github.com/es/get-started/quickstart/fork-a-repo
[url-gb-pr]: https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
[url-gb-fork_pr]: https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
