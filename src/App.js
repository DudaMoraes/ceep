import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const nota = {
      titulo,
      texto
    };
    const novoArrayNotas = [...this.state.notas, nota];
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas})
    console.log("oi")
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas 
        notas={this.state.notas}
        apagarNota={this.deletarNota.bind(this)}/>
      </section>
    );
  }
}

export default App;