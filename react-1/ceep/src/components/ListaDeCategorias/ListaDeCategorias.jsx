import React, { Component } from 'react';
import styled from "styled-components";

const SectionListaCategorias = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 0.75rem;
`;

const ListaCategorias = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ItensCategorias = styled.li`
  background-color: var(--secundaria);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.7rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const InputCategorias = styled.input`
  margin-right: 1.25rem;
`;

class ListaDeCategorias extends Component {

  constructor(){
    super();
    this.state =  {categorias: []}
    this._referenciaNovasCategorias = this._novasCategorias.bind(this)
  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this._referenciaNovasCategorias);

  }
  componentDidMount(){
    this.props.categorias.inscrever(this._referenciaNovasCategorias);
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }
  _handlerEventoInput(evento){
    if(evento.key === "Enter"){
        let valorCategoria = evento.target.value;
      this.props.adicionarCategoria(valorCategoria);

    }
  }

  render() { 
    return ( 
      <SectionListaCategorias>
        <ListaCategorias>
          {this.state.categorias.map((categoria, index)=>{
              return <ItensCategorias key={index} className="lista-categorias-li">{categoria}</ItensCategorias> 
            })
          }

        </ListaCategorias>
        <InputCategorias 
          type="text" 
          placeholder="Adicione a categoria"
          onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </SectionListaCategorias>
     );
  }
}
 
export default ListaDeCategorias;