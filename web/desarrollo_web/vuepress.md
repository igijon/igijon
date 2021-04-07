---
icon: vue
title: Páginas web estáticas con Vuepress
author: Inma Gijón
time: 2021-04-04
category: Desarrollo Web
tag:
  - Desarrollo Web 
  - DWEC
  - Vuepress
  - JavaScript
  - Vue
footer: Vuepress
star: true
article: true
comment: false
---

## Vuepress

Esta página web está desarrollada utilizando [Vuepress](https://vuepress.vuejs.org/) y aquí veremos cómo comenzar con ello :sparkles:.

<p style="text-align:center;">
  <img src="/assets/img/desarrollo/vuepress.png" width=40%/>
</p>

<!-- more -->

[Vuepress](https://vuepress.vuejs.org/) es un generador de sitios web estáticos que está basado en [Vue](https://vuejs.org/) y por tanto desarrollado por **Evan You**. Al final, una web creada con [Vuepress](https://vuepress.vuejs.org/) es una **SPA** (Single Page Application) que tiene como base [Vue](https://vuejs.org/), [Vue Router](https://router.vuejs.org/) y [Webpack](https://webpack.js.org/).

Inicialmente, fue pensado para generar documentación de los propios proyectos de [Vue](https://vuejs.org/). La generación de contenido se realiza principalmente utilizando **markdown**, por lo que incorporar contenido nuevo es muy cómodo.

Además, existen numerosos plugins y temas que podemos utilizar, por ejemplo [awesome-vuepress](https://github.com/vuepress/awesome-vuepress#plugins). Además, como es [Vue](https://vuejs.org/), nada nos impide desarrollar o utilizar cualquier componente en [Vue](https://vuejs.org/) e integrarlo en nuestro sitio.

## :computer: Creación de un proyecto

Para crear un proyecto en [Vuepress](https://vuepress.vuejs.org/) debemos seguir los siguientes pasos: 

- En primer lugar crearemos el directorio del proyecto, por ejemplo, _web_ y doy los permisos correspondientes al directorio
- Dentro del directorio, crearemos un proyecto _npm_ 

```
npm init -y
```

Esto genera un fichero _package.json_ dentro del directorio del proyecto similar a este:

```json
{
  "name": "web",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
- El siguiente paso es añadir [Vuepress](https://vuepress.vuejs.org/) a nuestro proyecto.

```
yarn add vuepress --dev
```

- Ya tenemos nuestro proyecto creado :raised_hands:, para ejecutarlo haremos:

```
vuepress dev
```

Esto levanta webpack y podemos acceder a nuestro proyecto por defecto en _http://localhost:8080/_. Inicialmente no tiene contenido por lo que aparecerá una págna _404_.

- Para añadir contenido inicial, simplemente añadimos un fichero _readme.md_ en el raíz de nuestro proyecto. Cuando accedamos aparecerá el contenido de dicho fichero **markdown**.

- Ya tenemos nuestro proyecto creado. Con la documentación de [Vuepress](https://vuepress.vuejs.org/) podemos ir configurando nuestro sitio con la apariencia que nos ofrece por defecto y que podemos modificar.

- En el caso de esta web, para poder simular la utilización de un blog, he utilizado un tema. Concretamente [Vuepress-theme-hope](https://vuepress-theme-hope.github.io/). Este tema ha sido modificado adaptándolo a mis necesidades.

::: tip Nota
Puedes acceder a los fuentes de este sitio en este repositorio <a href="https://github.com/igijon/igijon" target="_blank"><img src="/assets/icon/github-logo.png" width="50px"/></a>
:::

## Despliegue

Por último, indicar que esta web está desplegada en [Netlify](https://www.netlify.com/) que es un servicio de hosting para sitios web estáticos que permite desplegar de forma gratuita y sin publicidad con su plan **starter**. 

<p style="text-align:center;">
  <img src="/assets/img/desarrollo/netlify.svg" width=40%/>
</p>

En este servicio, nosotros no subimos nada, todos los fuentes están alojados en un servicio **Git**:
  - [Github](https://github.com/)
  - [Bitbucket](https://bitbucket.org)
  - [Gitlab](https://gitlab.com/users/sign_in)
