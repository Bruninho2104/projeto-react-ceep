import React, { Component } from 'react';
import "./estilo.css";

class CardNota extends Component {
  render() { 
    return (  
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h3 className="card-nota-titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota-texto">{this.props.texto}</p>
      </section>
    );
  }
}
 
export default CardNota;