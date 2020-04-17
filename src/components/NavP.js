import React, { Component } from 'react';
// reactstrap components
import {
  NavItem,Label,
  NavLink,
  Nav,
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane, Input
} from "reactstrap";
import axios from 'axios';
// core componentsc
class NavP extends Component {
  state = { nombre: '',
  monto: 0,
  descripcion: "",
 }
  
  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case 'nombre':
        this.setState({ nombre: e.target.value })
        break;

      case 'monto':
        this.setState({ monto: e.target.value })
        break;

      case 'descripcion':
        this.setState({ descripcion: e.target.value })
        break;
    
      default:
        break;
    }
  }
  
  manejarSubmit = () => {
    const jsonSend = this.state;
    const URL = 'http://localhost:4000/api/v1/gastos';
    axios.post(URL, jsonSend)
      .then(res => alert('¡Artículo creado!'))
      .catch(err => alert('Error al crear artículo'))
  };
  
  render() { 
    const [plainTabs, setPlainTabs] = React.useState("1");
    return (
      
<React.Fragment>
<Card className="card-nav-tabs card-plain">
        <CardHeader className="card-header-danger">
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav data-tabs="tabs" tabs>
                <NavItem>
                  <NavLink
                    className={plainTabs === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("1");
                    }}
                  >
                    Gasto
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={plainTabs === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("2");
                    }}
                  >
                    Ingresos
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent
            className="text-center"
            activeTab={"plainTabs" + plainTabs}
          >
            <TabPane tabId="plainTabs1">
            
            <Input placeholder="Ingrese su gasto" value={this.state.precio}
              onChange={this.cambiarInput}
              type="number"
              name="precio"></Input>
            <Label>Nombre</Label>
            <Input
              value={this.state.nombre}
              onChange={this.cambiarInput}
              type="text" 
              name="nombre"/>
            <Input type="select">
        <option>Seleccione Moneda</option>
        <option>MXN</option>
        <option>COP</option>
        <option>USD</option>
      </Input>
      <Input type="select" 
      value={this.state.descripcion}
      onChange={this.cambiarInput}
      name="descripcion"
      >
        <option>Categoria </option>
        <option>Comida</option>
        <option>Recibos Del Hogar</option>
        <option>Otros</option>
      </Input>
      <button onClick={this.manejarSubmit}> Guardar </button>
            </TabPane>
            <TabPane tabId="plainTabs2">
            <Input placeholder="Ingrese su Ingreso" type="text"></Input>
            <Input type="select">
        <option>Seleccione Moneda</option>
        <option>MXN</option>
        <option>COP</option>
        <option>USD</option>
      </Input>
      <button onClick={this.manejarSubmit}> Guardar </button>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>


</React.Fragment>

      );
  }
}
export default NavP;