import React, { Component } from 'react';
// reactstrap components
import {
  Label,Input
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
    const URL = 'https://devf-finanzas.herokuapp.com/api/v1/gastos';
    axios.post(URL, jsonSend)
      .then(res => alert('¡Artículo creado!'))
      .catch(err => alert('Error al crear artículo'))
  };
  
  render() { 
    //const [plainTabs, setPlainTabs] = React.useState("1");
    return (
      
<React.Fragment>
            <Input placeholder="Ingrese su gasto" value={this.state.monto}
              onChange={this.cambiarInput}
              type="number"
              name="monto"></Input>
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
        
</React.Fragment>

      );
  }
}
export default NavP;