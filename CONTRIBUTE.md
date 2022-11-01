# Contribuciones a Juguetear Web

En este archivo, encontrarás información sobre las diferentes maneras de realizar contribuciones a este proyecto. El código se encuentra almacenado en GitHub, utilizamos el mismo para llevar el seguimiento de reportes de errores (bugs) y proponer mejoras (features).

Si en algún momento necesitas hacer una consulta respecto al proyecto o el código del mismo, podés ingresar a nuestro [servidor en Discord](https://discord.com/invite/frontendcafe) de FrontendCafé, buscar el canal **#juguetear** y realizar todas las consultas que sean necesarias.

En esta página encontrarás las siguientes secciones:

1. [Cómo contribuir](#cómo-contribuir)
   1.1 [Verificar que no se haya reportado el mismo bug/feature](#verificar-que-no-se-haya-reportado-el-mismo-bug-o-feature)
   1.2 [Cómo reportar un bug](#cómo-reportar-un-bug)
   1.3 [Cómo sugerir una feature](#cómo-sugerir-una-feature)
   1.4 [Contribuir con cambios](#contribuir-con-cambios)
2. [Licencia](#licencia)

## Cómo contribuir

### Verificar que no se haya reportado el mismo bug o feature

Para evitar confusiones y/o trabajo extra, es necesario que antes de reportar un bug o proponer una feature revises que no exista actualmente.

Esto lo podés hacer dirigiéndote a la [página de issues](https://github.com/Juguetear/juguetear-web/issues), por defecto vas a ver los issues/features que se encuentren abiertos (esto significa que no han sido solucionados al momento). Podés revisar la lista aplicando palabras claves en el buscador o filtros. Para encontrar issues disponibles para trabajar, podes seleccionar "Asignado a" (Assignee) y filtrar por lo que no se encuentran asignados a nadie para tomarlos.

Si te gustaría tomar algún issue para trabajar pero tenés dudas, recordá que siempre es posible realizar consultas en el [servidor en Discord](https://discord.com/invite/frontendcafe) de FrontendCafé!

### Cómo reportar un bug

Para que sea más facil para otras personas entender el problema, es necesario que brindes la mayor cantidad de información de manera clara y detallada. Y sinceramente estaríamos encantados de que **trabajes en propio tu issue generado!**

Al momento de generar un nuevo issue (te recomendámos leer la sección anterior) es necesario que te dirijas a la [página de issues](https://github.com/Juguetear/juguetear-web/issues) y clickees el botón "New issue", o bien [acceder a este link](https://github.com/Juguetear/juguetear-web/issues/new).

<!-- TODO Change hyperlink -->
<!-- TODO Create Issue template and describe it here -->

### Cómo sugerir una feature

Así mismo como al reportar un bug, necesitamos la mayor cantidad de información de manera clara y concisa. También tené en cuenta que la **feature propuesta por vos va a ser evaluada** por las personas que administran el repositorio y aprobada en caso de estar alineada con el proyecto, o declinada en caso contrario. Si necesitas realizar consultas podes hacerlas en el [servidor en Discord](https://discord.com/invite/frontendcafe) de FrontendCafé.

Para proponer una feature, es necesario que te dirjas a la [página de issues](https://github.com/Juguetear/juguetear-web/issues) y clickees el botón "New issue", o bien [acceder a este link](https://github.com/Juguetear/juguetear-web/issues/new).

<!-- TODO Create Feat template and describe it here -->
<!-- TODO Change hyperlink -->

### Contribuir con cambios

Para contribuir con cambios primero es necesario que elijas un issue/feature en la que quieras trabajar (previamente comprobando que nadie esté trabajando en ella), que leas muy bien la descripción y realices todas las preguntas necesarias para evacuar tus dudas. Recordá que podés hacerlo en los comentarios del issue/request o en el [servidor en Discord](https://discord.com/invite/frontendcafe).

> ⚠️ Es muy importante que las contribuciones de código que realices tanto de issues como de features cumplan mínimamente con los **estándares de WCAG 2.1 de nivel AA**.

El git flow que utilizamos en este proyecto es el siguiente:

1. En tu repositorio local, crea un _branch_ desde `development`

   > ⚠️ Recordá ejecutar `git pull` desde la consola de comandos antes, así tu rama `development` está actualizada con los últimos cambios.

   El nombre del branch va a ser tomado del número y título del _issue_ (ej. 1-crear-archivo-readme)

   (agregar imagen)

2. Trabajá en tus cambios. Hacé commits por cada bloque de cambios y escribí un mensaje descriptivo en cada _commit_. Recordá que es obligatorio que los cambios propuestos cumplan con los **requisitos WCAG 2.1 de nivel AA**

   > 💡 Tené en cuenta que el código que escribas debe estar en inglés junto con sus comentarios, en caso de que sean necesarios.

3. Hacé `push` de tu _branch_ al repositorio remoto ejecutando `git push -u origin <nombre-de-tu-rama>`

4. Entrá a **GitHub** y abrí un _Pull Request_ (PR) de tu _branch_ a `development`. Podés seguir la siguiente guía: [https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

5. Completá la información que se te pide para crear el _PR_. Y listo!

Ahora es tiempo de esperar que les administradores y/o contribuidores hagan un _code review._ Esta es una excelente oportunidad para aprender y compartir conocimiento. Podés mirar esta guía para saber más [https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)

> 💡 Mientras esperás _feedback_ de tus cambios, aprovechá y hacé _code review_ de otros _Pull Request_

Si tu _Pull Request_ es aprobado, felicitaciones! Ya está listo para ser mergeado a `development`. Luego las personas que administran el repositorio harán un _release_ con todos los cambios que hay en `development` para ponerlos online.

Si recibiste _feedback_ solicitando cambios, tenés que seguir trabajando en tu _branch_ y haciendo `push` de esos cambios al repositorio online. Una vez que termines tu _PR_ va a estar de nuevo listo para revisión. Estos pasos lo tenés que repetir hasta que sea aprobado. Si tenés dudas o querés discutir los cambios que te solicitaron, lo podés hacer en el mismo _PR_ o en nuestro [canal de Discord](https://discord.com/invite/frontendcafe).

## Licencia

Todas las contribuciones que se realicen serán bajo la licencia [Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://github.com/Juguetear/juguetear-web/blob/development/LICENSE-CC-BY-NC-SA).
Si contribuyes a este repositorio, aceptas de que tus contribuciones sean licenciadas bajo Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
