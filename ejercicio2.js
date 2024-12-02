//1. Un título con tu nombre.
let body = document.body;
let script = body.querySelector('script');

//Añadimos un titulo
let titulo = document.createElement('h1');
titulo.classList.add('titulo');
titulo.innerText = "Ejercicio Mario Casado Berenguer";
body.insertBefore(titulo, script);

//ALTERNATIVA body.insertAdjacentElement("afterbegin",'<h1 class="titulo" id="titulo">Ejercicio Mario Casado Berenguer</h1>');

//body.insertBefore(nuevoElemento, script);

//2. Un elemento contenedor, que contendrá los artículos de la tienda.
let main = document.createElement("main");
body.insertBefore(main, script);

//3. Cada artículo contiene un nombre, una descripción, un precio y una imagen. Estos datos los leemos 
//del array datos, que tenemos disponible en el archivo datos.js y ya se encuentra cargado en la web
for (let i = 0; i < datos.length; i++) {
    //Creamos los distintos elementos
    let articulo = document.createElement('div');
    let nombre = document.createElement('h2');
    let descripcion = document.createElement('p');
    let precio = document.createElement('p');
    let imagen = document.createElement('img');

    //Asignamos cada elementos siguiendo una jerarquía: main>articulo>(nombre, descripcion,precio,imagen)
    main.appendChild(articulo);
    articulo.appendChild(nombre);
    articulo.appendChild(descripcion);
    articulo.appendChild(precio);
    articulo.appendChild(imagen);

    //Asignamos el valor a cada elemento
    nombre.textContent = datos[i].nombre;
    descripcion.textContent = datos[i].descripcion;
    precio.textContent = datos[i].precio;
    imagen.src = datos[i].imagen;

    //Asignar clases a cada elemento que se cree
    articulo.classList.add("articulo");
}
//4. Añade las clases necesarias a los elementos y completa el archivo estilos.css para conseguir un aspecto similar al del enunciado.
    //Se añade la clase en el punto anterior a la hora de crear cada bloque "articulo"
    //Cada estilo se define en la hoja de estilos.css

//NOTA: El ejemplo contiene 8 artículos, pero el código generado debería funcionar con cualquier número de artículos.

