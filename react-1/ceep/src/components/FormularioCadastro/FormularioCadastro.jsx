import React, { Component } from "react";
import "./estilo.css"
import toast, { Toaster } from 'react-hot-toast';

class FormularioCadastro extends Component{

  constructor(){
    super();
    this.titulo = "";
    this.texto = "";
  }
  _handleMudancaTitulo(evento){
    this.titulo = evento.target.value; 
    evento.stopPropagation();
    console.log(this.titulo);
  }
  _handleMudancaTexto(evento){
    this.texto = evento.target.value;
    evento.stopPropagation();
    console.log(this.mensagem);
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
    toast.success("Nota adicionada!",{
      duration: 3000
    })
  }

  render(){
    return(
      <>
        <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <Toaster position="top-center" reverseOrder={false} duration />

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
