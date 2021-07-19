import React, { Component } from 'react';
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";
import styled from "styled-components";

const SectionCardNota = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--fundo-detalhes);
  border-radius: 4px;
  flex-wrap: wrap;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  padding: 16px;
`;

const CabecalhoNota = styled.header`
  font-size: 1.1rem;
  display: flex;
  justify-content:  space-between;
  align-items: center;
`;

const TituloNota = styled.h3`
  font-size: 1.5em;
  margin-right: 12px;
`
const TextoNota = styled.p`
  margin-top: 8px;
  font-size: 1em;
  margin: 0.75rem 0.4rem 0 0;
`

class CardNota extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice)
  }
  render() { 
    return (  
      <SectionCardNota>
        <CabecalhoNota>
          <TituloNota>{this.props.titulo}</TituloNota>
          <DeleteSVG onClick={this.apagar.bind(this)} />
          <h6>{this.props.categoria}</h6>
        </CabecalhoNota>
        <TextoNota>{this.props.texto}</TextoNota>
      </SectionCardNota>
    );
  }
}
 
export default CardNota;