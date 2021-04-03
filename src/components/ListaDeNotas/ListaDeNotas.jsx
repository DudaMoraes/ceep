import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  constructor(){
    super();
    this.state = {notas:[]}
    this._novasNotas = this._novasNota.bind(this);
  }

  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNota(notas){
    this.setState({...this.state,notas});
  }


  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
              index={index} 
              titulo={nota.titulo} 
              texto={nota.texto}
              apagarNota={this.props.apagarNota}
              categoria={nota.categoria}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;