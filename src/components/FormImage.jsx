import React, { Component } from 'react';

export default class FormImage extends Component {
  render() {
    return (
      <fieldset>
        <legend>Imagem</legend>
        <input
          data-testid="image-input"
          type="text"
          name="image"
          id=""
        />
      </fieldset>
    );
  }
}
