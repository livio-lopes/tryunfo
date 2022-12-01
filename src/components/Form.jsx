import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <h1>Adicione uma carta</h1>
        <label htmlFor="nameCard">
          Nome da Carta
          <input
            type="text"
            name="nameCard"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="describe">
          Descrição
          <input
            type="textarea"
            name="describe"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input
            type="number"
            name="attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="imgCard">
          Imagem
          <input
            type="number"
            name="imgCard"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select name="rarity" id="rarity" data-testid="rare-input">
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
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
