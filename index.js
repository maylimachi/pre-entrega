import { obtenerProductos } from "./fakestoreAPI.js";
import { obtenerProducto } from "./fakestoreAPI.js";
import { agregarProducto } from "./fakestoreAPI.js";
import { eliminarProducto } from "./fakestoreAPI.js";
const argumentos = process.argv.slice(2);
console.log(argumentos);

if (argumentos[0] == "GET" && argumentos[1] == "products") {
    obtenerProductos();

}else if (argumentos[0] == "GET" && argumentos[1].startsWith("products/")) {
    obtenerProducto(argumentos[1]);

}else if (argumentos[0] == "POST" && argumentos[1] == "products" && argumentos.length == 5) {
    const nuevoProducto = {
        title: argumentos[2],
        price: parseFloat(argumentos[3]),
        category: argumentos[4]
    };
    agregarProducto(nuevoProducto);

}else if (argumentos[0] == "DELETE" && argumentos[1].startsWith("products/")) {
    eliminarProducto(argumentos[1]);

}else {
    console.log("Comando no reconocido. Usa los siguientes formatos:");
    console.log("Para obtener todos los productos: npm start GET products");
    console.log("Para obtener un producto por ID: npm start GET products/{id}");
    console.log("Para agregar un producto: npm start POST products {title} {price} {category}");
    console.log("Para eliminar un producto por ID: npm start DELETE products/{id}");
}