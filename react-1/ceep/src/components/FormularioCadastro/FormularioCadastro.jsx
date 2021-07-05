import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component{

  constructor(){
    super();
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    this.state = {categorias : []};
    this._referenciaNovasCategorias = this._novasCategorias.bind(this)
  }
  componentWillUnmount(){
    this.props.notas.desinscrever(this._referenciaNovasCategorias)
  }
  componentDidMount(){
    this.props.categorias.inscrever(this._referenciaNovasCategorias);
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value; 
  }
  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  _handleMudancaCategoria(evento){
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
    
  }
  render(){
    return(
      <>
        <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
          <select className="form-cadastro-input" onChange={this._handleMudancaCategoria.bind(this)}>
            <option>Sem categoria</option>
            {this.state.categorias.map((categoria, index)=>{
              return <option key={index}>{categoria}</option>
            })}
          </select>
          <input 
            type="text" 
            placeholder="Título" 
            className="form-cadastro-input" 
            onChange={this._handleMudancaTitulo.bind(this)} 
          />
          
          <textarea 
            rows="6" 
            placeholder="Escreva sua nota" 
            className="form-cadastro-input"
            onChange={this._handleMudancaTexto.bind(this)}
          />
          <button className="form-cadastro-input form-cadastro-submit">Criar Nota</button>
        </form>
      </>
    );
  }
}

export default FormularioCadastro;
