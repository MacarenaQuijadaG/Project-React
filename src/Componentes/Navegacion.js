import React from 'react';
import { Navbar, NavbarBrand, NavLink, Nav, NavItem, } from "reactstrap";
import Carro from './Carro'


class Navegacion extends React.Component {

        render(){
            return(
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                    <Nav className="ml-auto"navbar>
                        <NavItem>
                            <NavLink href="/">Acerca de</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Nosotros</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contactanos</NavLink>
                        </NavItem>
                        <NavItem>
                            <Carro/>
                        </NavItem>
                    </Nav>
                </Navbar>
            );
        }
}
export default Navegacion;