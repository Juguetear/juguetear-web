# Cómo contribuir

[Reportar un bug](#reportar-un-bug)  
[Porponer _features_ o mejoras](#proponer-features-o-mejoras)  
[Contribuir con cambios](#contribuir-con-cambios)

### Reportar un _bug_

Primero usar el buscador de _issues_ para verificar que ninguna otra persona reportó el mismo _bug_. Si el _bug_ no fue previamente reportado, creá un _issue_ por _bug_ teniendo en cuenta lo siguiente:

1. Especificar dónde y cómo te encontraste con el bug: en qué dispositivo, sistema operativo, browser y/o versión del browser

2. Detallá los pasos a seguir para reproducir el bug

3. inclué mensajes de error que puedan aparecer en la consola

4. Inclué videos o imagenes del error

5. Asigná algunos de los _labels_ disponibles para que sea más fácil organizar y encontrar los _issues_

### Proponer _features_ o mejoras

Primero usar el buscador de _issues_ para verificar que ninguna otra persona sugiere el mismo _feature_ o la misma mejora. Si el _feature_ o la mejora no fue previamente sugerida, creá un _issue_ por mejora teniendo en cuenta lo siguiente:

1. Describí de manera completa y técnica cuál es el alcance de la mejora, los requerimientos y como implementarla. Podés mirar otros _issues_ para tener un ejemplo de como hacerlo

2. Asigná algunos de los _labels_ disponibles para que sea más fácil organizar y encontrar los _issues_

Si tenés una idea más bien general de la mejora, en vez de abrir un _issue_, te invitamos a compartirla en nuestro [server](https://discord.com/invite/frontendcafe).

Te invitamos a que seas vos quien trabaje en esa mejora!

### Contribuir con cambios

Para contribuir primero tenés que elegir un _issue_ en el que quieras trabajar. Lee muy bien la descripción y hace todas las preguntas que necesites antes de ponerte a trabajar en la tarea. Podes hacer tus preguntas en nuestro canal en el [server](https://discord.com/invite/frontendcafe) de FrontendCafé.

El _git flow_ que vamos a utilizar es el siguiente:

1. En tu repositorio local, crea un _branch_ desde `development`

   > :warning: Acordate de ejecutar `git pull` desde la consola de comandos antes, así tu rama `development` está actualizada con los últimos cambios.

   El nombre del branch va a ser tomado del numero y titulo del _issue_ (ej. 1-crear-archivo-readme)

   (agregar imagen)

2. Trabajá en tus cambios. Hace commits por cada bloque de cambios y escribí un mensaje descriptivo en cada _commit_

   > 💡 Tene en cuenta que el código que escribas tiene que estar en inglés

3. Hace `push` de tu _branch_ al repositorio remoto ejecutando `git push -u origin <nombre-de-tu-rama>`

4. Entrá a **GitHub** y abrí un _Pull Request_ (PR) de tu _branch_ a `development` . Podes seguir la siguiente guia: [https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

5. Completa la información que se te pide para crear el _PR_. Y listo!

Ahora es tiempo de esperar que les administradores y/o contribuidores hagan un _code review._ Esta es una oportunidad para aprender y compartir conocimiento. Podés mirar esta guía para saber más [https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)

> 💡 Mientras esperas _feedback_ de tus cambios, aprovechá y hace _code review_ de otros _Pull Request_

Si tu _Pull Request_ es aprobado, felicitaciones! Ya está listo para ser mergeado a `development`. Luego las personas que administran el repositorio harán un _release_ con todos los cambios que hay en `development` para ponerlos online.

Si recibiste _feedback_ solicitando cambios, tenés que seguir trabajando en tu _branch_ y haciendo `push` de esos cambios al repositorio online. Una vez que termines tu _PR_ va a estar de nuevo listo para revisión. Estos pasos lo tenes que repetir hasta que sea aprobado. Si tenes dudas o queres discutir los cambios que te solicitaron, lo podes hacer en el mismo _PR_ o en nuestro [canal de Discord](https://discord.com/invite/frontendcafe).
