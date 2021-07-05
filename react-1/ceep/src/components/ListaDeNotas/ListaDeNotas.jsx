import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css"

class ListaDeNotas extends Component{

  constructor(){
    super();
    this.state = {notas : []}
    this._referenciaNovasNotas = this._novasNotas.bind(this)
  }
  componentWillUnmount(){
    this.props.notas.desinscrever(this._referenciaNovasNotas)
  }
  componentDidMount(){
    this.props.notas.inscrever(this._referenciaNovasNotas);
  }
  _novasNotas(notas){
    this.setState({...this.state, notas})
  }

  render(){
    return(
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas-item">
              <CardNota 
                apagarNota={this.props.apagarNota} 
                titulo={nota.titulo} 
                texto = {nota.texto}
                categoria = {nota.categoria}
                indice={index}
              />
            </li>
          );
        })}
        
      </ul>
    );}
}

export default ListaDeNotas;
