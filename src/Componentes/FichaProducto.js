import React from 'react';
import  {Button, CardImg, Container, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import './FichaProducto.css';

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state ={
            modal:false
        };

        this.toggle = this.toggle.bind(this);
        console.log(props);
    }

    toggle(){
        //console.log(this.props);
        this.setState(prevSatate => ({
            modal: !prevSatate.modal
        }));
    }

    render(){
        return(
           <Container>
                 <Button onClick={this.toggle}>Ver Ficha</Button>
                 <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src = {this.props.props.imagen}/>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un Valor de:$ <b>{this.props.props.precio}</b>. Pesos</p>
                        <p>Hay <b>{this.props.props.stock}</b>.Unidades de este producto disponibles.</p>
                    </ModalBody>
                    <ModalFooter className='modalFooter'>
                        <Button color="primary" onClick={this.toggle}>Agregar al Carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver Atrás</Button>
                    </ModalFooter>
                 </Modal>
           </Container>
        );
    }
}

export default FichaProducto;