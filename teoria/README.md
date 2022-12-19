# :book: Teoría

---

## Temas

```
1 - ¿Qué es React?
2 - ¿Qué se ve en el curso?
3 - Extensiones para VSC
4 - Estructura
```

---

## :star: 1 - ¿ Qué es React/ ReactJS?

- Es una **librería** (**no es un FrameWork**) de **JavaScript** para crear **Intefaces de Usuario (UI)** para aplicaciones Web (como los sitios web).

- Desarrollada por **Facebook**(**Meta**)

- Corre en el Cliente (no necesita una respuesta de un servidor)

- Proyecto ordenado por **componentes**, un ejemplo:

![image](https://user-images.githubusercontent.com/72580574/208317524-533dee54-d20d-47ac-b031-3fee90d08fec.png)

- Gran cantidad de herramientas, librerías y soporte

- ¿Quiénes lo usan ? Udemy, Airbnb, Facebook, Twitter, Microsoft, Spotify, Asana, Dropbox, etc.

- ¿ Qué conocimientos previos hay que tener ?

-HTML5

-CSS3

-JavaScript: ES6+ (clases, pemplate string, modules, funciones, objetos)

---

## :star: 2 - ¿Qué se ve en el curso?

- Crear componentes funcionales y entender los hooks.

- Arquitectura y cómo estructurar aplicaciones son React y escribir código que siga las buenas prácticas de React y de JavaScript.

- Temas: state, props, hooks, crear tus propios hooks, redux, propTypes, leer y validar formularios, animaciones, style components, consumir API´s, MERN (MongoDB, Node, Express, React), NextJS, Gastby, GraphQL y mucho más.

- 15 aplicaciones en React para aprender a solucionar problemas

- Mejorar como desarrollador JavaEscript con ES6+

---

## :star: 3 - Extensiones para VSC

- Bracket Pair Colorizer

- Reactjs code snippets (con los shortcuts para React)

- generate-react-component ( como complemento de Reactjs code snippets)

- Prettier (para ordenar el codigo) 

---


## :star: 4 - Estructura

Los proyectos creados con **create-react-app** traen esta estructura:


```
> node_modules
> public
> src
   App.css
   App.js
   App.test.js
   index.css
   index.js
   logo.svg
   serviceWorker.js
.gitignore
package-lock.json
package.json
README.md
```

- **node_modules** tendrá todas las dependencias

- **public** tiene los archivos estáticos, el **index.html** que va a renderizar toda la aplicación (en el **id** = **root**) y donde se pueden cargar las hojas de estilo.

- **src**, tiene...

...el **index.js** que es el archivo de entrada el que va arenderizar al componente ```<App/>``` gracias a **react** y a **react-dom**

... a **App.js** que es el componente principal que se renderiza en el div con id **root**.


... **serviceWorker** para que la aplicación fucnione inclusive sin internet (con algunas limitaciones).

- **package.json**, como cuando creamos un proyecto en Node, que tenemos en nombre, la versión, si es privado, las dependencias, los scripts, la configuración para esLint, la lista de browsers.

-> hacemos limpieza en la carpeta **src** y eliminamos lo que por ahora no usamos (App.css, App.test.js, logo.svg, index.css)

- **package-lock.json** donde se manejan las dependencias de las dependencias.

![image](https://user-images.githubusercontent.com/72580574/208505928-9d2e6ec0-8d7f-451b-9394-a93e30c9084b.png)

---
