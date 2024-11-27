import React from "react";
import { Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from 'reactstrap';

class Carro extends React.Component {
    constructor() {
        super();
        this.state = {
            popoverOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    render() {
        return (
            <div>
                <Button id="Popover1" color="info" onClick={this.toggle}>
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="secondary">0</Badge>
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
                                <tr>
                                    <td>1</td>
                                    <td>Producto1</td>
                                    <td>Precio1</td>
                                </tr>
                            </tbody>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;
