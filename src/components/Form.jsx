import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1 } = this.props;
    const { cardAttr2, cardAttr3, cardImage, cardRare } = this.props;
    const { cardTrunfo, isSaveButtonDisabled } = this.props;
    const { onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <h1>Adicione uma carta</h1>
        <form>
          <label htmlFor="nameCard">
            Nome da Carta
            <input
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              name="nameCard"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="describe">
            Descrição
            <input
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
              name="describe"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1">
            Atributo 1
            <input
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="attr1"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2">
            Atributo 2
            <input
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="attr2"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3">
            Atributo 3
            <input
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="attr3"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="imgCard">
            Imagem
            <input
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              name="imgCard"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select
              name="rarity"
              value={ cardRare }
              onChange={ onInputChange }
              id="rarity"
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            />
          </label>
          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.string.isRequired,
  cardAttr2: Proptypes.string.isRequired,
  cardAttr3: Proptypes.string.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  isSaveButtonDisabled: Proptypes.bool.isRequired,
  onInputChange: Proptypes.func.isRequired,
  onSaveButtonClick: Proptypes.func.isRequired,
};

export default Form;
