import React from 'react';
import { Button, CardText, CardSubtitle, CardTitle, CardImg, Card, Col, CardBody } from 'reactstrap';
import './Producto.css';

function Producto(props) {
    return (
        <Col sm="4">
            <Card className="Card" body outline color="primary">
                <CardImg src={props.imagen} alt="Producto" />
                <CardBody>
                    <CardTitle>{props.titulo}</CardTitle>
                    <CardSubtitle>
                        <b>Valor:</b>{props.precio}
                    </CardSubtitle>
                    <CardText>
                        {props.descripcion}
                    </CardText>
                    <Button className="button">Comprar</Button>
                    <Button className="button">Ver Ficha</Button>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Producto;
