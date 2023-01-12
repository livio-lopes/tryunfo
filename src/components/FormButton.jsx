import React, { Component } from 'react';

export default class FormButton extends Component {
  render() {
    return (
      <button
        data-testid="save-button"
        type="button"
      >
        Salvar

      </button>
    );
  }
}
