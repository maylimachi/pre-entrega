export async function obtenerProductos() {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "GET"
        });
        const data = await response.json();
        data.forEach(producto => {
            console.log(producto);
        });
        console.log("Productos obtenidos exitosamente.");
        
    } catch (error) {
        console.error("Error:", error);
    }
}
export async function obtenerProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "GET"
        });
        const data = await response.json();
        console.log(data);
        console.log("Producto obtenido exitosamente.");

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function agregarProducto(producto) {
    try {
        const nuevoProducto = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        const data = await nuevoProducto.json();
        console.log(data);
        console.log("Producto agregado exitosamente.");

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function eliminarProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        console.log(data);
        console.log("Producto eliminado exitosamente.");

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function actualizarProducto() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${producto.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        const data = await response.json();
        console.log(data);
        console.log("Producto actualizado exitosamente.");

    } catch (error) {
        console.error("Error:", error);
    }
}