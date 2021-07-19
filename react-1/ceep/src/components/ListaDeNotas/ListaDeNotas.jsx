import React, { Component } from "react";
import CardNota from "../CardNota";
import styled from "styled-components";

const ListaNotas = styled.ul`
  background-color: var(--fundo);
  flex-grow: 2;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  list-style-type: none;
  padding-left: 24px;
  padding-top: 24px;
`;

const ItemListaNotas = styled.li`
  margin: 12px;
  max-width: 240px;
  max-height: 400px;
  display: inline;
`

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
      <ListaNotas>
        {this.state.notas.map((nota, index) => {
          return (
            <ItemListaNotas key={index}>
              <CardNota 
                apagarNota={this.props.apagarNota} 
                titulo={nota.titulo} 
                texto = {nota.texto}
                categoria = {nota.categoria}
                indice={index}
              />
            </ItemListaNotas>
          );
        })}
        
      </ListaNotas>
    );}
}

export default ListaDeNotas;
