import { Component } from 'react';
// import PropTypes from 'prop-types';
import './Form.css';

export default class Form extends Component {
  render() {
    return (
      <div>
        <h2>Adicione Nova Carta</h2>
        <form action="">
          <label htmlFor="name-input">
            <span>Nome</span>
            <input
              type="text"
              name="name-input"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description-input">
            <span>Descrição</span>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1-input">
            <span>Attr01</span>
            <input
              type="number"
              name="attr1-input"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2-input">
            <span>Attr02</span>
            <input
              type="number"
              name="attr2-input"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3-input">
            <span>Attr03</span>
            <input
              type="number"
              name="attr3-input"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image-input">
            <span>Imagem</span>
            <input
              type="text"
              name="image-input"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare-input">
            <span>Raridade</span>
            <select
              name="rare-input"
              id=""
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            <span>Super Trunfo</span>
            <input
              type="checkbox"
              name="trunfo-input"
              data-testid="trunfo-input"
            />
          </label>
          <button
            type="button"
            data-testid="save-button"
          >
            Salvar

          </button>
        </form>
      </div>
    );
  }
}

// Form.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   onInputChange: PropTypes.func.isRequired,
// };
