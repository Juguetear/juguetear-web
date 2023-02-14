<h1 align="center" width="100%">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/78808163/209231596-ec2fb100-2564-4694-94aa-1ce2e1a1199a.svg">
    <img width="33%" alt="Juguetear" src="https://user-images.githubusercontent.com/78808163/198991646-4ec0f08d-b9f5-4e42-89d1-ceb786c1f215.svg"> 
  </picture>
</h1>

Juguetear es un proyecto solidario, sin fines de lucro, que tiene como objetivo adaptar juguetes para niñes con discapacidades motrices complejas y ofrecerlos en calidad de préstamo, sin costo para las familias.

En el Taller de ayudas técnicas de APRILP se adaptan juguetes a pilas que se consiguen a través de donaciones, para luego prestarlos a las familias de niñes con discapacidades motrices complejas para que puedan jugar con pulsadores o switches de distintos tipos.

La web de **Juguetear** surge como respuesta a la necesitad de modernizar y mejorar el sistema de préstamos de los juguetes, hacer visible la obra de quienes trabajan en el taller e incentivar la replicación del proyecto.

## Indice de contenidos

- [Cómo contribuir](#cómo-contribuir)
  - [Con materiales](#con-materiales)
  - [Aportando a este repositorio](#aportando-a-este-repositorio)
  - [Replicando el proyecto en tu ciudad](#replicando-el-proyecto-en-tu-ciudad)
- [Comunidad](#comunidad)
- [Requerimientos](#requerimientos)
- [Despliegues](#despliegues)
- [Diseño de interfaz (UI/UX)](#diseño-de-interfaz-uiux)
- [Accesibilidad](#accesibilidad)
- [Tech Stack](#tech-stack)
- [Instalación del proyecto](#instalación-del-proyecto)
- [Storybook](#storybook)
- [Sanity](#sanity)
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

Si tenés interés en colaborar con el repositorio, consultá [`contributing.md`][doc-contributing] para conocer las formas de comenzar a contribuir, tené en cuenta que tenemos ciertos lineamientos.

> ⚠️ Por favor, leer y adherir al [**código de conducta**][doc-code_of_conduct] de este proyecto.

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

## Despliegues

- **Web:** [https://juguetear-web.vercel.app/](https://juguetear-web.vercel.app/)
- **Storybook:** [https://storybook-juguetear-web.vercel.app/](https://storybook-juguetear-web.vercel.app/)
- **Sanity Studio:** [https://juguetear-web.vercel.app/studio](https://juguetear-web.vercel.app/studio)

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

Por favor, si encontrás barreras de accesibilidad en la web de Juguetear enviando un email a [juguetear2021@gmail.com][email] o abrí un issue. Para hacerlo, necesitás leer la documentación sobre [cómo contribuir][doc-contributing].

---

## Tech Stack

Nuestro tech stack consiste en las siguientes tecnologías:

> 💡 No hace falta tener mucho conocimiento en el tech stack para poder contribuir.

- **<a href="https://nextjs.org/docs">NextJS</a>** o ReactJS
- **<a href="https://www.typescriptlang.org/docs/">TypeScript</a>** o JavaScript
- **<a href="https://tailwindcss.com/docs/installation">Tailwind CSS</a>**
- **<a href="https://storybook.js.org/docs/react/get-started/introduction">Storybook</a>**
- **<a href="https://www.sanity.io/docs">Sanity</a>**
- **<a href="https://jestjs.io/docs/getting-started">Jest</a>**

<details>
<summary>Has click aquí, para ver extensiones recomendadas para VSCode</summary><br>

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss),
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

</details>

---

## Instalación del proyecto

> ⚠️ Asegúrate de haber leido [**como contribuir**][doc-contributing], y recuerda que si tenés dudas puedes preguntarnos en el canal [#juguetear][dc-channel] en Discord.

Luego haber leido [**como contribuir**][doc-contributing] y haber clonado el repositorio, debes accedé al directorio del proyecto

Luego instala las dependencias usando tu terminal de preferencia ejecutando:

```bash
yarn install
```

Esto va a instalar todas las dependencias listadas en el archivo [`package.json`](package.json).

  <details>
  <summary> 💡 Hacé click aquí si te aparece un error que dice <code>yarn: command not found</code></summary><br>

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

### Sanity Studio

> ⚠️ Asegúrate de haber realizado primero los pasos de [Instalación del proyecto](#instalación-del-proyecto).

Este proyecto utiliza [Sanity](https://www.sanity.io/) para la gestión de contenido.

**Sanity** es un _headless CMS_ que nos permite crear, organizar, publicar y eliminar contenido dentro de la web de **Juguetear**.

**Sanity Studio** Se ejecuto junto al mismo servidor al ejecutar `yarn run dev` o `yarn dev`, una vez iniciado el servidor de desarrollo visitá [http://localhost:3000/studio](http://localhost:3000/studio) en tu navegador para ver el dashboad.

Para tener accesso al dashboard de **Sanity**, dejá un mensaje en el canal #Juguetear de Discord avisando a quienes administran los accesos: **@nykka**, **@TonyMckes** o **@LPRegen**.

### Storybook

> ⚠️ Asegúrate de haber realizado primero los pasos de [Instalación del proyecto](#instalación-del-proyecto).

Este proyecto utiliza [Storybook](https://storybook.js.org/) para el desarrollo, testeo y documentación de los componentes de la interfaz.

Para iniciar **Storybook** en tu entorno local, desde la consola de comandos tenés que ejecutar:

```
yarn storybook
```

Se iniciará el servidor de **Storybook**. Visitá [http://localhost:6006](http://localhost:6006) en tu navegador para ver los componentes.

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
**Verónica García ([@nykka](https://github.com/nykka))**

**Manuel Escribano ([@LPRegen](https://github.com/LPRegen))**

**Anthony Mackensen ([@TonyMckes](https://github.com/TonyMckes))**

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
