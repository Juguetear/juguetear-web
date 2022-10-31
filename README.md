<h1 align="center" width="100%">
  <img width="33%" src="https://user-images.githubusercontent.com/78808163/198991646-4ec0f08d-b9f5-4e42-89d1-ceb786c1f215.svg" alt="Juguetear">
</h1>

### Juguetear es un proyecto solidario, sin fines de lucro, que tiene como objetivo adaptar juguetes para niñes con discapacidades motrices complejas y ofrecerlos en calidad de préstamo, sin costo para las familias..

En el Taller de ayudas técnicas de APRILP se adaptan juguetes a pilas que se consiguen a través de donaciones, para luego prestarlos a las familias de niñes con discapacidades motrices complejas para que puedan jugar con pulsadores o switches de distintos tipos.

La web de **Juguetear** surge como respuesta a la necesitad de modernizar y mejorar el sistema de préstamos de los jueguetes, hacer visible la obra de quienes trabajan en el taller e incentivar la replicación del proyecto.

### Indice de contenidos

[Stack](#stack)  
[Requerimientos](#requerimientos)  
[Instalación del proyecto](#instalación-del-proyecto)  
[API y Endopints](#api-y-endpoints-wip)  
[Accesibilidad](#accesibilidad)  
[Licencias](#licencias)  
[Alcances](#alcances)  
[UI/UX](#uiux)  
[Código de Conducta](#código-de-conducta)  
[Comunidad](#comunidad)  
[Cómo contribuir](#cómo-contribuir)  
[Contribuidores](#contribuidores)  
[Staff](#staff)  
[Links de interés](#links-de-interés)

---

## Stack

- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Tailwind](https://tailwindcss.com/)
- [Sanity](https://www.sanity.io/)

## Requerimientos

- Tener instalada la última versión de [node](https://nodejs.org/es/) (incluye `npm`)
- Tener un editor de código ([Visual Code](https://code.visualstudio.com/), [Vim](https://www.vim.org/), etc)
- Tener una cuenta en [GitHub](https://docs.github.com/es/get-started/signing-up-for-github/signing-up-for-a-new-github-account)
- Leer y seguir [Código de Conducta](#código-de-conducta)
- Unirte a [FrontendCafé](https://discord.com/invite/frontendcafe) en Discord

## Instalación del proyecto

1. Lo primero es clonar el repositorio en tu disco local. Podés mirar la siguiente [documentación](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository).
2. Usando la consola de comandos, accedé a la carpeta del proyecto y ejecutá `yarn install` (esto va a instalar todas las dependencias listadas en el archivo `package.json`). Si te aparece un error que dice `yarn: command not found` quiere decir que no tenés instalado `yarn` en tu computadora. Para hacerlo, primero tenés que instalar la última versión de [node](https://nodejs.org/es/) y luego instalar `yarn` via `npm` (_node package manager_) ejecutando `npm install --global yarn`. Podés leer más en este [artículo](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
3. Ejecutá `yarn run dev` en la consola de comandos para iniciar el servidor de desarrollo
4. Visitá [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación

> ⚠️ Si tenés algun error, podés preguntar en el canal #juguetear dentro del servidor de FrontendCafé en Discord

---

## API y endpoints (WIP)

A medida que se vaya desarrollado el Back End, vamos a poder listar los diferentes _endpoints_ y agregar la documentación necesaria.

---

## Accesibilidad

Quienes administramos este repositorio nos comprometemos a hacer todo lo posible por garantizar la accesibilidad digital para personas con discapacidades. Estamos continuamente mejorando la experiencia del usuario y aplicando los estándares de accesibilidad pertinentes.

Las Pautas de Accesibilidad para el Contenido Web (WCAG) definen los requisitos para que les diseñadores y desarrolladores mejoren la accesibilidad para las personas con discapacidades. Éste define tres niveles de conformidad: Nivel A, Nivel AA y Nivel AAA.

### Parte importante de los requerimientos a la hora de contribuir con este proyecto es cumplir al menos con los requisitos WCAG 2.1 nivel AA.

Por favor, hacenos saber si encontrás barreras de accesibilidad en la web de Juguetear enviando un mail a [juguetear2021@gmail.com](mailto:juguetear2021@gmail.com) o abriendo un issue. Para hacerlo, necesitás leer la documentación sobre [cómo contribuir](./CONTRIBUTE.md).

---

## Licencias

Este repositorio se publica con licencia [GNU General Public License v3.0](./LICENSE).

El contenido de la web de Juguetear se publica con licencia [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](./LICENSE-CC-BY-NC-SA).

---

## Alcances

El alcance de este proyecto será desarrollar el Front End de la web de juguetear en base a los diseños de Mariana Lessi y el Back End donde las personas que coordinan el taller podrán administrar el contenido usando el [stack](#stack) definido.

---

## UI/UX

La [interfaz](https://www.figma.com/file/FS9WsAYrmkESsmUAGzYdNo/Juguetear?node-id=0%3A1) del proyecto fue completamente desarrollada por [Mariana Lessi](https://www.behance.net/marualessi). Cualquier duda, feedback o sugerencia podés compartirla en el canal #juguetear del server de [FrontendCafé](https://discord.com/invite/frontendcafe) en Discord.

---

## Código de Conducta

### **Creemos que una comunidad es sana cuando quienes participan y contribuyen respetan a las demás personas y sus derechos.**

Quienes administramos este repositorio nos comprometemos a mantener un ambiente confortable y seguro para todas las personas, independientemente de su identidad y expresión de género, orientación sexual, etnia, nacionalidad, religión, posición socioeconómica o cualquier otra característica personal.

Ayudanos a crear ambientes positivos, respetando distintos puntos de vista y experiencias, aceptando las críticas constructivas y mostrando empatía hacia quienes participan.

Para poder contribuir a este proyecto se espera que se respeten los pronombres de las personas que participan y a quienes utilizan lenguaje inclusivo.

### Está terminantemente prohibido el acoso.

Por acoso entendemos la comunicación ofensiva, las imágenes sexuales, el uso de lenguaje sexualizado, la intimidación deliberada, acecho, acoso fotográfico, interrupción sostenida de conversaciones, insultos, comentarios degradantes, ataques personales, chistes discriminatorios y atención sexual no deseada.

### No toleramos bajo ningun concepto el comportamiento abusivo.

Otras acciones a evitar:

**DISCRIMINACIÓN E INTOLERANCIA**

- Promocionar el odio, insultos o símbolos nacionalistas o contenido que represente dicho odio.
- Xenofobia, racismo, sexismo o discriminación por género, intolerancia religiosa.

**AMENAZAS**

- Participar, diseñar o enviar amenazas de violencia para otro usuario. TROLEO
- Publicar spam, ridiculizar o crear incomodidad. Usar frases, imágenes o frases sin sentido de forma excesiva para causar confusión.

**VIOLENCIA Y SEXUALIDAD**

- Hacer referencia a actos sexuales extremos o violentos.
- Hacer referencia a eventos o acciones violentas.
- Divulgar o hacer referencia a pornografía.

**DUPLICACIÓN DE CUENTA, SUPLANTACIÓN DE IDENTIDAD Y/O DISTRIBUCIÓN DE INFORMACIÓN PERSONAL, ATAQUES INFORMÁTICOS, CONTENIDO MALICIOSO O VIRUS.**

Ante cualquier inconveniente, quienes administramos este repositorio estamos disponibles para intermediar y resolver conflictos.

## Comunidad

[![logo-frontendcafe](https://user-images.githubusercontent.com/78808163/198993731-299e973d-8f3b-4a6c-a445-b2b77e0b3286.svg)](https://discord.com/invite/frontendcafe)

Este proyecto se desarrolla con la participación y el apoyo de FrontendCafé. Es requerido unirte a nuestro [server](https://discord.com/invite/frontendcafe) y buscar el canal #juguetear. Ahí vas a poder compartir dudas e ideas del proyecto. El código de conducta de este proyecto es extensible también a tu participación en el server de FrontendCafé en Discord.

---

## Cómo contribuir

Actualmente hay varias formas de contribuir al proyecto Juguetear:

- Con materiales
- Replicando el proyecto en tu ciudad
- Aportando a este repositorio

### Con materiales:

Si querés donar juguetes a pilas y/o diversos materiales contactarse a través del mail [juguetear2021@gmail.com](mailto:juguetear2021@gmail.com)

### Replicando el proyecto en tu ciudad:

La naturaleza libre y solidaria de esta idea no se refiere solo a la posibilidad de que las familias de niñes con discapacidades motrices complejas puedan acceder a los juguetes sin ningún costo sino que, además, queremos que se pueda replicar en todos los lugares donde haya instituciones y personas con voluntad para llevarlo adelante. Para saber como replicar el proyecto, por favor lee nuestra [documentación](./REPLICATE.md).

### Aportando a este repositorio:

Usamos [github Issues](https://github.com/Juguetear/juguetear-web/issues) para trackear _requests_, _bugs_ y _features_. Para aportar a este repositorio, podés trabajar en algún _issue_ que esté abierto, crear uno con un _request_ o _bug_ o dar _code review_ a otres contribuidores.

Si querés contribuir, tené en cuenta que tenemos ciertos lineamientos. Para conocerlos en detalle, leé la documentación sobre [cómo contribuir](CONTRIBUTE.md).

---

## Contribuidores

<a href="https://github.com/juguetear/juguetear-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=juguetear/juguetear-web" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## Staff

_Coordinador del taller de ayudas técnicas_  
**Sergio Ruau**

_Consultor / Asesor_  
**Antonio Sacco**

_Diseño UX/UI_  
**Mariana Lessi**

_Desarrollo y administración del repositorio_  
**Verónica García (nykka)**

## Links de interés

[Colegio Lincoln](https://colegiolincoln.edu.ar/juguetear/)  
[Antonio Sacco](http://antoniosacco.com.ar/)  
[FronendCafé](https://frontend.cafe/)
