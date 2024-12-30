# 🛒 Carro de Compras en React con Reactstrap

Este proyecto es un componente de un carro de compras creado en **React** utilizando **Reactstrap** para los estilos y componentes UI. El objetivo es mostrar una lista de productos seleccionados y calcular el total dinámicamente.

---

## 🚀 **Características**

- **Visualización del Carro:** Lista los productos añadidos con sus respectivos precios.
- **Cálculo del Total:** Muestra el total calculado de todos los productos.
- **Interfaz Elegante:** Utiliza Reactstrap para un diseño moderno y responsivo.
- **Modularidad:** Componentes reutilizables y fáciles de mantener.

---

## 🛠️ **Requisitos Previos**

Asegúrate de tener instalado lo siguiente:

- Node.js (v16 o superior recomendado) 🌳
- npm o yarn 📦
- React (v18 o superior recomendado)

---

## 📥 **Instalación**

Sigue los pasos a continuación para ejecutar el proyecto localmente:

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/MacarenaQuijadaG/Project-React.git
   cd PROJECT-REACT
   ```

2. **Instalar Dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el Proyecto:**

   ```bash
   npm start
   ```

   Esto abrirá la aplicación en `http://localhost:3000`.

---

## 📂 **Estructura del Proyecto**

```plaintext
├── src
│   ├── Componentes
│   │   ├── Carro.js   # Componente principal del carro de compras
│   │   ├── Navegación.js   # Contiene el navbar con el carrito de compras
│   │   ├── Producto.js   # Componente que visualiza cada producto
|   |   ├── Producto.css  # Contiene el estido y diseño de Producto.js
│   │   ├── FichaProducto.js  # Muestra la información de un producto
|   |   ├── FichaProducto.css  # Contiene el diseño y estilos de FichaProducto.js
│   ├── listaCarrito.json # Lista de productos seleccionados
|       listaProductos.json #Lista Productos
│   └── App.js        # Componente principal de la aplicación
├── public
│   ├── index.html    # Archivo HTML principal
├── package.json      # Dependencias y scripts del proyecto
```

---

## ✨ **Uso**

1. **Agregar Productos al Carro:**
   - Los productos se encuentran en el archivo `listaCarrito.json`.
   - Puedes agregar más productos modificando este archivo:

     ```json
     [
       {
            "titulo": "Hadphones Black and Blue",
            "imagen": "https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/10/09/6523b2eef0b00.jpeg",
            "descripcion": "Audífonos Bluetooth duración máxima 20 horas",
            "precio": "29000",
            "stock": 4
        },
        {
            "titulo": "Hadphones Blue",
            "imagen": "https://fotosol.cl/cdn/shop/products/027242868656-001-820Wx820H_5000x.jpg?v=1601497330",
            "descripcion": "Audífonos con clave",
            "precio": 18000,
            "stock": 10
        },
     ]
     ```

2. **Interacción con el Carro:**
   - Haz clic en el ícono de carrito 🛒 para desplegar el listado.
   - El total se calcula automáticamente en el pie de la tabla.

---

## 📄 **Código Destacado**

### Método para Calcular el Total

```javascript
sumaProductos() {
    return this.state.listaCarrito.reduce((total, producto) => {
        const precio = parseFloat(producto.precio) || 0; // Aseguramos que sea un número
        return total + precio;
    }, 0); // Inicializamos el total en 0
}
```

### Renderizado del Componente

```javascript
render() {
    const arregloCarrito = this.state.listaCarrito.map((producto, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{producto.titulo}</td>
            <td>${Intl.NumberFormat("de-DE").format(producto.precio)}</td>
        </tr>
    ));

    return (
        <div>
            <Button id="Popover1" color="info" onClick={this.toggle}>
                <span className="material-icons">shopping_cart</span>
                <Badge color="secondary">{this.state.listaCarrito.length}</Badge>
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                <PopoverHeader>Listado de Compras</PopoverHeader>
                <PopoverBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arregloCarrito}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total:</th>
                                <th></th>
                                <th>$ {Intl.NumberFormat("de-DE").format(this.sumaProductos())}</th>
                            </tr>
                        </tfoot>
                    </Table>
                </PopoverBody>
            </Popover>
        </div>
    );
}
```

---

## 💡 **Notas Adicionales**

- Si encuentras problemas con Reactstrap, asegúrate de haber instalado las dependencias necesarias:

  ```bash
  npm install reactstrap bootstrap
  ```

- Agrega Bootstrap en tu proyecto, por ejemplo, en `index.html`:

  ```html
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-pzjw8f+ua7Kw1TIqjQjQjHqek+JYyFtrmWexWeYY1bCZyTtj4F9DixKe+20zE65B"
    crossorigin="anonymous"
  />
  ```

---

## 🖼️ **Vista Previa**

![Captura de pantalla (26)](https://github.com/user-attachments/assets/b2fb5b86-a4ad-41fe-90bd-5f4fcda2ca4c)

![Captura de pantalla (27)](https://github.com/user-attachments/assets/a4ff1d9a-063f-4847-aed7-a9b8b80905b6)

