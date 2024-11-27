import React from 'react';
import {CardText, CardSubtitle, CardTitle, CardImg, Card, Col, CardBody } from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto';

//function Producto(props) {
class Producto extends React.Component{
    render(){
    return (
        <Col sm="4">
            <Card className="Card" body outline color="primary">
                <CardImg src={this.props.imagen} alt="Producto" />
                <CardBody>
                    <CardTitle>{this.props.titulo}</CardTitle>
                    <CardSubtitle>
                        <b>Valor:</b>{this.props.precio}
                    </CardSubtitle>
                    <CardText>
                        {this.props.descripcion}
                    </CardText>
                  <FichaProducto props={this.props}/>
                </CardBody>
            </Card>
        </Col>
    );
}
}

export default Producto;
