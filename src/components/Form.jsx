import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Adicione uma carta</h1>
        <form>
          <label htmlFor="nameCard">
            Nome da Carta
            <input
              type="text"
              value={ this.props.cardName }
              onChange={ this.props.onInputChange }
              name="nameCard"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="describe">
            Descrição
            <input
              type="textarea"
              value={ this.props.cardDescription }
              onChange={ this.props.onInputChange }
              name="describe"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1">
            Atributo 1
            <input
              type="number"
              value={ this.props.cardAttr1 }
              onChange={ this.props.onInputChange }
              name="attr1"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2">
            Atributo 2
            <input
              type="number"
              value={ this.props.cardAttr2 }
              onChange={ this.props.onInputChange }
              name="attr2"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3">
            Atributo 3
            <input
              type="number"
              value={ this.props.cardAttr3 }
              onChange={ this.props.onInputChange }
              name="attr3"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="imgCard">
            Imagem
            <input
              type="text"
              value={ this.props.cardImage }
              onChange={ this.props.onInputChange }
              name="imgCard"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select
              name="rarity"
              value={ this.props.cardRare }
              onChange={ this.props.onInputChange }
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
              checked={ this.props.cardTrunfo }
              onChange={ this.props.onInputChange }
              data-testid="trunfo-input"
            />
          </label>
          <button
            type="submit"
            disabled={ this.props.isSaveButtonDisabled }
            onClick={ this.props.onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
