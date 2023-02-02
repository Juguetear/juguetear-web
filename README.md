<h1 align="center" width="100%">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/78808163/209231596-ec2fb100-2564-4694-94aa-1ce2e1a1199a.svg">
    <img width="33%" alt="Juguetear" src="https://user-images.githubusercontent.com/78808163/198991646-4ec0f08d-b9f5-4e42-89d1-ceb786c1f215.svg"> 
  </picture>
</h1>

Juguetear es un proyecto solidario, sin fines de lucro, que tiene como objetivo adaptar juguetes para niñes con discapacidades motrices complejas y ofrecerlos en calidad de préstamo, sin costo para las familias

En el Taller de ayudas técnicas de APRILP se adaptan juguetes a pilas que se consiguen a través de donaciones, para luego prestarlos a las familias de niñes con discapacidades motrices complejas para que puedan jugar con pulsadores o switches de distintos tipos.

La web de **Juguetear** surge como respuesta a la necesitad de modernizar y mejorar el sistema de préstamos de los juguetes, hacer visible la obra de quienes trabajan en el taller e incentivar la replicación del proyecto.

## Indice de contenidos

- [Cómo contribuir](#cómo-contribuir)
  - [Con materiales](#con-materiales)
  - [Aportando a este repositorio](#aportando-a-este-repositorio)
  - [Replicando el proyecto en tu ciudad](#replicando-el-proyecto-en-tu-ciudad)
- [Comunidad](#comunidad)
- [Requerimientos](#requerimientos)
- [Diseño de interfaz (UI/UX)](#diseño-de-interfaz-uiux)
- [Accesibilidad](#accesibilidad)
- [Tech Stack](#tech-stack)
  - [Sanity](#sanity)
  - [Storybook](#storybook)
- [Instalación del proyecto](#instalación-del-proyecto)
- [Contribuidores](#contribuidores)
- [Staff](#staff)
- [Licencias](#licencias)
- [Links de interés](#links-de-interés)

---

## Cómo contribuir

Actualmente hay varias formas de contribuir al proyecto Juguetear:

- [Con materiales](#con-materiales)
- [Aportando a este repositorio](#aportando-a-este-repositorio)
- [Replicando el proyecto en tu ciudad](#replicando-el-proyecto-en-tu-ciudad)

### Con materiales

Si querés donar juguetes a pilas y/o diversos materiales contactarse a través del email [juguetear2021@gmail.com][email]

### Aportando a este repositorio

Aca puedes ver el [Tech Stack](#tech-stack) usado en este repositorio.

Si tienes interés en colaborar con el repositorio, consulte [`contributing.md`][doc-contributing] para conocer las formas de comenzar a contribuir, tené en cuenta que tenemos ciertos lineamientos.

> ⚠️ Por favor, leer y adhiérase al [**código de conducta**][doc-code_of_conduct] de este proyecto.

### Replicando el proyecto en tu ciudad

La naturaleza libre y solidaria de esta idea no se refiere solo a la posibilidad de que las familias de niñes con discapacidades motrices complejas puedan acceder a los juguetes sin ningún costo sino que, además, queremos que se pueda replicar en todos los lugares donde haya instituciones y personas con voluntad para llevarlo adelante. Para saber como replicar el proyecto, por favor lee nuestra [documentación][doc-replicate].

---

## Comunidad

<!-- TODO: El texto del logo es difícil de leer en temas claros (light themes)  -->

[![logo-frontendcafe](https://user-images.githubusercontent.com/78808163/198993731-299e973d-8f3b-4a6c-a445-b2b77e0b3286.svg)][dc-fec]

Este proyecto se desarrolla con la participación y el apoyo de FrontendCafé. Es requerido unirte a nuestro [server][dc-fec] y buscar el canal [#juguetear][dc-channel]. Ahí vas a poder compartir dudas e ideas del proyecto. El código de conducta de este proyecto es extensible también a tu participación en el server de FrontendCafé en Discord.

---

## Requerimientos

- Tener instalada una versión de [Node](https://nodejs.org/es/) superior a `v16.16.0` (incluye `npm`)
- Tener un editor de texto ([Visual Studio Code](https://code.visualstudio.com/), [Vim](https://www.vim.org/), etc)
- Tener una cuenta en [GitHub](https://docs.github.com/es/get-started/signing-up-for-github/signing-up-for-a-new-github-account)
- Leer y seguir [Código de Conducta][doc-code_of_conduct]
- Unirte a [FrontendCafé][dc-fec] en Discord

---

## Diseño de interfaz (UI/UX)

La interfaz del proyecto fue completamente desarrollada por [Mariana Lessi](https://www.behance.net/marualessi).  
Puedes acceder a [**este enlace**][figma] para ver los diseño de la web.

> 💡 Cualquier duda, feedback o sugerencia podés compartirla en el canal [#juguetear][dc-channel] del server de [FrontendCafé][dc-fec] en Discord.

---

## Accesibilidad

Quienes administramos este repositorio nos comprometemos a hacer todo lo posible por garantizar la accesibilidad digital para personas con discapacidades. Estamos continuamente mejorando la experiencia del usuario y aplicando los estándares de accesibilidad pertinentes.

Las Pautas de Accesibilidad para el Contenido Web (WCAG) definen los requisitos para que les diseñadores y desarrolladores mejoren la accesibilidad para las personas con discapacidades. Éste define tres niveles de conformidad: Nivel A, Nivel AA y Nivel AAA.

**Parte importante de los requerimientos a la hora de contribuir con este proyecto es cumplir al menos con los requisitos WCAG 2.1 nivel AA.**

Por favor, hacenos saber si encontrás barreras de accesibilidad en la web de Juguetear enviando un mail a [juguetear2021@gmail.com][email] o abriendo un issue. Para hacerlo, necesitás leer la documentación sobre [cómo contribuir][doc-contributing].

---

## Tech Stack

Nuestro tech stack consiste en las siguientes tecnologías:

> 💡 No hace falta tener mucho conocimiento en el tech stack para poder contribuir.

- **NextJS** _o ReactJS_
- **TypeScript** _o JavaScript_
- **Tailwind CSS**
- **Storybook**
- **Sanity**
- **Jest**

<details>
<summary>Has click aquí, para ver extensiones recomendadas para VSCode</summary><br>

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss),
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

</details>

### Sanity

Todo el contenido se va a administrar usando Sanity como [Headless CMS](https://www.sanity.io/headless-cms).

<!-- TODO: Update after [#126](https://github.com/Juguetear/juguetear-web/issues/126) -->

Dentro del directorio [`/studio/schemas`](studio/schemas/) podes encontrar los _schemas_ disponibles. Los _schemas_ describen los tipos de documentos y sus campos (_fields_).

<details>
<summary>Ver mas información sobre Sanity haciendo click aca.</summary><br>

En los archivos JSON en los que Sanity Studio escribe los datos el tipo de documento aparecen como la propiedad `_type`.

Ahora, para obtener la información de Sanity, vas a tener que hacer _fetch_ utilizando el método `client()` inicializado en `lib/client.ts`. Por ejemplo, para traer todos los miembros del proyecto, podés hacer:

```js
const member = await client.fetch(`*[_type == "member"]`);
```

En el ejemplo de arriba `*[_type == "member"]` es el _query_ con el cual filtramos que información queremos traer. Este _query_ esta escrito en [GROQ](https://www.sanity.io/docs/groq). Sanity nos facilita una [cheat sheet](https://www.sanity.io/docs/query-cheat-sheet) con algunos de los _queries_ más comunes.

Si querés saber más sobre el cliente JavaScript de Sanity, podés leer más en la [documentación](https://www.sanity.io/docs/js-client) de Sanity. Para hacer las cosas más sencillas, utilizamos el [toolkit](https://github.com/sanity-io/next-sanity) de Sanity para NextJS en este proyecto.

Es muy común usar esta propiedad como _query_ para obtener su contenido (por ejemplo `*[_type == "animal"]`). Si querés saber más sobre los _schemas_, podés leer la [documentación](https://www.sanity.io/docs/schema-types) de Sanity al respecto.

</details>

---

### Storybook

Storybook es una librería de código abierto que permite desarrollar y documentar tus componentes en un entorno aislado. Vamos a usarla para crear y testear todos los componentes del proyecto Juguetear.

Para poder ver los componentes listos para usar, podes entrar a [este enlace][web-storybook] (_provisoria_).

---

## Instalación del proyecto

> ⚠️ Asegúrate de haber leido [**como contribuir**][doc-contributing], y recuerda que si tienes dudas puedes preguntarnos en el canal [#juguetear][dc-channel] en Discord.

Luego haber leido [**como contribuir**][doc-contributing] y haber clonado el repositorio, debes accedé al directorio del proyecto

Luego instala las dependencias usando tu terminal de preferencia ejecutando:

```bash
yarn install
```

Esto va a instalar todas las dependencias listadas en el archivo [`package.json`](package.json).

  <details>
  <summary> 💡 Has click aquí, si te aparece un error que dice <code>yarn: command not found</code></summary><br>

Quiere decir que no tenés instalado `yarn`. Para instalarlo, primero asegurate de tener instalada una versión [Node](https://nodejs.org/es/) superior a `v16.16.0` y luego instalar `yarn` via `npm` (_node package manager_) ejecutando:

```bash
npm install --global yarn
```

> 💡 Podés leer más en este [artículo](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

  </details>

Después ejecutá:

```bash
yarn run dev
# o solo
yarn dev
```

Se iniciara el servidor de desarrollo. Visitá [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

> 💡 Podés realizar preguntas en el canal [#juguetear][dc-channel] dentro del servidor de [FrontendCafé][dc-fec] en Discord.

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

---

## Licencias

Este repositorio se publica con licencia [GNU General Public License v3.0][doc-lic-1].

El contenido de la web de Juguetear se publica con licencia [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International][doc-lic-2].

## Links de interés

- [Colegio Lincoln](https://colegiolincoln.edu.ar/juguetear/)
- [Antonio Sacco](http://antoniosacco.com.ar/)
- [FronendCafé](https://frontend.cafe/)

<!-- Listado de enlaces de referencia, mantenerlos actualizados en cada archivo -->
<!-- Enlaces a las paginas web del proyecto -->

[web-storybook]: https://storybook-juguetear-web.vercel.app

<!-- Enlaces a archivos de documentación (propios al repositorio)  -->

[doc-code_of_conduct]: CODE_OF_CONDUCT.md
[doc-contributing]: CONTRIBUTING.md
[doc-lic-1]: LICENSE
[doc-lic-2]: LICENSE-CC-BY-NC-SA
[doc-replicate]: REPLICATE.md

<!-- Enlaces a Discord -->

[dc-channel]: https://discord.com/channels/594363964499165194/1035685740409012244
[dc-fec]: https://discord.com/invite/frontendcafe

<!-- Enlaces al repositorio en Github -->

[gh-issues]: https://github.com/Juguetear/juguetear-web/issues

<!-- Misc? -->

[email]: mailto:juguetear2021@gmail.com
[figma]: https://www.figma.com/file/FS9WsAYrmkESsmUAGzYdNo/Juguetear?node-id=0%3A1
