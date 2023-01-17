import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      preview,
      deleteCard,
    } = this.props;

    return (
      <div cardName="container-card">
        <h2 data-testid="name-card">{`${cardName}`}</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <span data-testid="attr1-card">
          Attr01_______
          {cardAttr1}
        </span>
        <span data-testid="attr2-card">
          Attr02_______
          {cardAttr2}
        </span>
        <span data-testid="attr3-card">
          Attr03_______
          {cardAttr3}
        </span>
        <span data-testid="rare-card">{cardRare}</span>
        {cardTrunfo && (<span data-testid="trunfo-card">Super Trunfo</span>)}
        {!preview && (
          <button
            type="button"
            id={ cardName }
            data-testid="delete-button"
            onClick={ deleteCard }
          >
            Excluir

          </button>)}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  preview: PropTypes.bool,
  deleteCard: PropTypes.func,
}.isRequired;
