# modulo-3-evaluacion-final-luciaenriquezbos

Listado de Personajes de
RICK & MORTY

---

Proyecto relizado en Ract.

Página web que nos va a mostrar:

1. Listado de personajes y un campo para poder filtrarlo por nombre.
2. Cuando pinchamos en cada uno de los personajes, en una nueva página, nos va a mostrar al detalle la información del mismo.

Recursos:

- El listado que vamos a pintar en nuestra página y con el que vamos a trabajar corresponde a este enlace de un API:
  fetch("https://rickandmortyapi.com/api/character").
- Imágenes: en la carpeta Images o enlaces externos.

Estructura: creada toda con componentes funcionales de React

1. App.js: componente principal que maneja el estado de la aplicación.
2. Filter: dónde filtramos la información que nos llega desde nuestra búsqueda en el fetch.
3. CharacterList: creamos el listado que nos va a mostrar nuestra página, con respecto a nuestra búsqueda.
4. CharacterCar: comonente para la info que va a mostrar ese listado de nuestro personaja.
5. CharactersDetal: componente que nos muestra el detalle de nuestro personaje.

Estructura navegación del Site:

Home (listado inicial sin filtrar y campo para introducir el criterio de búsqueda)
Si la búsqueda es posible, te la muestra en la misma página.
Si no es posible, te muestra un mensaje de error.
Cuando pinchamos en cada uno de los personajes nos lleva a su detalle, en una nueva ruta.
Si la ruta que ponemos no es válida, nos mostrará un mensaje de error.
