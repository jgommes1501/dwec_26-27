let articulos = [
    { codigo: 123, nombre: "Articulo1", precio: 10, cantidad: 3 },
    { codigo: 124, nombre: "Articulo2", precio: 5, cantidad: 3 }
];

function verCesta() {
    let mensaje = "CESTA DE LA COMPRA\n\n";
    let total = 0;

    for (let i = 0; i < articulos.length; i++) {
        let articulo = articulos[i];
        let subtotal = articulo.precio * articulo.cantidad;

        mensaje += "Código: " + articulo.codigo + "\n";
        mensaje += "Nombre: " + articulo.nombre + "\n";
        mensaje += "Precio: " + articulo.precio + "\n";
        mensaje += "Cantidad: " + articulo.cantidad + "\n";
        mensaje += "Subtotal: " + subtotal + "\n\n";

        total += subtotal;
    }

    mensaje += "Total: " + total;
    alert(mensaje);
}

function insertarArticulo() {
    let codigo = parseInt(prompt("Introduce el código:"));
    let nombre = prompt("Introduce el nombre:");
    let precio = parseFloat(prompt("Introduce el precio:"));
    let cantidad = parseInt(prompt("Introduce la cantidad:"));

    let articulo = {
        codigo: codigo,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    articulos.push(articulo);
}

function borrarArticulo() {
    let codigo = parseInt(prompt("Introduce el código del artículo que deseas borrar:"));

    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].codigo === codigo) {
            articulos.splice(i, 1);
            alert("Artículo borrado.");
            return;
        }
    }

    alert("Artículo no encontrado.");
}

function vaciarCesta() {
    articulos = [];
    alert("Cesta vaciada.");
}

let opcion;

do {
    opcion = prompt(
        "CESTA DE LA COMPRA\n\n" +
        "1. Ver cesta\n" +
        "2. Insertar un artículo\n" +
        "3. Borrar un artículo\n" +
        "4. Vaciar cesta\n" +
        "5. Salir"
    );

    switch (opcion) {
        case "1":
            verCesta();
            break;
        case "2":
            insertarArticulo();
            break;
        case "3":
            borrarArticulo();
            break;
        case "4":
            vaciarCesta();
            break;
        case "5":
            break;
        case null:
            break;
        default:
            alert("Opción incorrecta.");
    }

} while (opcion !== "5" && opcion !== null);