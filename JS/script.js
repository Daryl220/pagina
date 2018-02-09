function add() {

    //Captura de informacion
    let id = document.getElementById("id");
    let nombre = document.getElementById("nombre");

    //validacion de informacion
    if (id.value == "") {
        id = "No se ha introducido un id para la pelicula";

    }else{
        id = id.value;
    }
    if (nombre.value == "") {
        nombre = "No se ha introducido un nombre para la pelicula";
    }else{
        nombre = nombre.value;
    }

    //mensaje mostrando la informacion agregada
    alert("ID: " + id + "\nNombre: " + nombre);
}

function eliminar() {

    //creacion de variables
    let div = document.getElementById("delete");
    let txt;

    //validacion del DOM
    if (div == null) {
        //No existe la caja de texto #idEliminar --> se procede a crearla y a crear el div #delete
        div = document.createElement("div");
        txt = document.createElement("input");

        div.className = "formulario";
        div.id = "delete";
        txt.className = "txt";
        txt.type = "text";
        txt.placeholder = "id de la pelicula";
        txt.id = "idEliminar";

        div.appendChild(txt);
        document.getElementById("container").appendChild(div);

        alert("Ingrese el id de la pelicula que desea eliminar, luego vuelva a presionar el boton eliminar");
    } else {

        /*Si existe la caja de texto #idEliminar --> se procede a enviar 
                la respuesta segun la informacion introducida luego a eliminar el div #delete*/

        txt = document.getElementById("idEliminar");
        if (txt.value == "") {
            txt = "No se ha eliminado nada";
        } else {
            txt = "Se elimino la pelicula con el id = " + txt.value;
        }
        alert(txt);
        document.getElementById("container").removeChild(div);
    }
}

function editar() {

    //Creacion de variables
    let div = document.getElementById("modificar");

    //validacion del DOM
    if (div == null) {
        div = document.createElement("div");
        btnA = document.createElement("input");
        btnB = document.createElement("input");

        btnA.type = "button";
        btnB.type = "button";
        btnA.id = "btnA";
        btnB.id = "btnB";
        btnA.className = "btn btnAzul";
        btnB.className = "btn btnNaranja";
        div.className = "titulo";
        div.id = "modificar";

        btnA.value = "A";
        btnB.value = "B";

        div.appendChild(btnA);
        div.appendChild(btnB);
        document.getElementById("container").appendChild(div);
    } else {
        document.getElementById("container").removeChild(div);
    }
}