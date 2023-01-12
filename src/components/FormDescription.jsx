import React, { Component } from 'react';

export default class FormDescription extends Component {
  render() {
    return (
      <fieldset>
        <legend>Descrição</legend>
        <textarea
          name="description"
          data-testid="description-input"
          cols="30"
          rows="10"
        />
      </fieldset>
    );
  }
}
