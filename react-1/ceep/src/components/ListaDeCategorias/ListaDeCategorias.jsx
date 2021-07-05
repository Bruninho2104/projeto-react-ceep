import React, { Component } from 'react';
import "./estilo.css";

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
      <section className="lista-categorias">
        <ul className="lista-categorias-ul">
          {this.state.categorias.map((categoria, index)=>{
              return <li key={index} className="lista-categorias-li">{categoria}</li> 
            })
          }

        </ul>
        <input 
          type="text" 
          className="lista-categorias-input" 
          placeholder="Adicione a categoria"
          onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </section>
     );
  }
}
 
export default ListaDeCategorias;