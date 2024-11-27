import React from 'react';
import './App.css';
import Producto from './Componentes/Producto';
import {Container,Row} from'reactstrap';
import Navegacion from './Componentes/Navegacion';

class App extends React.Component {
  render(){
  return (
    <Container>
      <Navegacion titulo="Carro de compras"/>
      <Row>
          <Producto 
            titulo="Hadphones Black and Blue" 
            imagen="https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/10/09/6523b2eef0b00.jpeg" 
            descripcion="Audífonos Bluetooth duración máxima 20 horas" 
            precio="29.000"
          />
          <Producto
          titulo="Hadphones Blue" 
          imagen="https://fotosol.cl/cdn/shop/products/027242868656-001-820Wx820H_5000x.jpg?v=1601497330" 
          descripcion="Audífonos con clave" 
          precio="18.000"
          />
          <Producto
          titulo= "Speaker Red"
          imagen="https://casaroyal.vtexassets.com/arquivos/ids/157130-800-800?v=638271051110030000&width=800&height=800&aspect=true"
          descripcion= "Altavoz Bluetooth portátil."
          precio= "25.000"
          />
          <Producto
            titulo= "Mouse Wireless"
            imagen= "https://http2.mlstatic.com/D_NQ_NP_937033-MLU79393923119_092024-O.webp"
            descripcion= "Ratón inalámbrico ergonómico."
            precio="10.000"
          />
          <Producto
          titulo= "Keyboard RGB"
          imagen= "https://http2.mlstatic.com/D_NQ_NP_720501-MLU73023469117_112023-O.webp"
          descripcion= "Teclado mecánico con retroiluminación."
          precio= "40.000"
          />
          <Producto
            titulo= "Smart Watch"
            imagen= "https://img01.huaweifile.com/sg/ms/cl/pms/uomcdn/CL_HW_B2C/pms/202405/gbom/6942103118548/800_800_1F3941AB4C3E8FAC51CD11CF826C67BDmp.png"
            descripcion= "Reloj inteligente con múltiples funciones."
            precio= "35.000"
          />
          <Producto
            titulo= "Tablet Pro"
            imagen= "https://img01.huaweifile.com/sg/ms/cl/pms/uomcdn/CL_HW_B2C/pms/202409/gbom/6942103132452/800_800_0FC2E472D3464C68094D020B38EB0429mp.png"
            descripcion= "Tablet de última generación."
            precio= "120.000"
          />
      </Row>
    </Container>
  );
}
}

export default App;
