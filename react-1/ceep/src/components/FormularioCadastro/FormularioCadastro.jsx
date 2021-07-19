import React, { Component } from "react";
import styled from "styled-components";

//#region Estilo Formulário
const FormCadastro = styled.form`
  flex-grow:1;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 12px 40px;
  max-width: 700px;
`;

const FormSelect = styled.select`
  margin-top: 8px
  margin-bottom: 4px;
  padding: 4px;
  border: none;
  background-color: var(--fundo-detalhes);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  min-width: 100px;
  max-width:650px;
`;

const FormInput = styled.input`
  margin-top: 8px;
  padding: 4px;
  border: none;
  background-color: var(--fundo-detalhes);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  min-width: 100px;
  max-width:650px;
`;

const FormTextarea = styled.textarea`
  margin-top: 4px;
  padding: 4px;
  border: none;
  background-color: var(--fundo-detalhes);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  min-width: 200px;
  max-width:650px; 
  min-height: 50px 
`

const Botao = styled.button`
  margin-top: 8px;
  padding: 4px;
  border: none;
  background-color: var(--fundo-detalhes);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  min-width: 100px;
  max-width:650px;

  align-self: flex-end;
  width: 30%;
  background-color: var(--secundaria);
  color: white;
  font-weight: 400;

  :active{
    background-color: var(--secundaria-ativa);
  }
  :hover{
    cursor: pointer;
  }
`;

//#endregion

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
        <FormCadastro onSubmit={this._criarNota.bind(this)}>
          <FormSelect className="form-cadastro-input" onChange={this._handleMudancaCategoria.bind(this)}>
            <option>Sem categoria</option>
            {this.state.categorias.map((categoria, index)=>{
              return <option key={index}>{categoria}</option>
            })}
          </FormSelect>
          <FormInput
            type="text" 
            placeholder="Título" 
            onChange={this._handleMudancaTitulo.bind(this)} 
          />
          
          <FormTextarea 
            rows="6" 
            placeholder="Escreva sua nota" 
            className="form-cadastro-input"
            onChange={this._handleMudancaTexto.bind(this)}
          />
          <Botao>Criar Nota</Botao>
        </FormCadastro>
      </>
    );
  }
}

export default FormularioCadastro;
