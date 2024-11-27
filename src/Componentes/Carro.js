import React from "react";
import { Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from 'reactstrap';
import { listaCarrito } from '../listaCarrito';

class Carro extends React.Component {
    constructor() {
        super();
        this.state = {
            popoverOpen: false,
            listaCarrito
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    sumaProductos() {

        return this.state.listaCarrito.reduce((total, producto) => {
            const precio = parseFloat(producto.precio) || 0; 
            return total + precio;
        }, 0); 
    }


    render() {
        const arregloCarrito = this.state.listaCarrito.map(
            (producto, i) => {
                return (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{producto.titulo}</td>
                        <td>{producto.precio}</td>
                    </tr>
                );
            }
        );

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
}

export default Carro;
