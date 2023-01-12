import React, { Component } from 'react';

export default class FormName extends Component {
  render() {
    return (
      <fieldset>
        <legend>Nome</legend>
        <input
          data-testid="name-input"
          type="text"
          name="nome"
          id=""
        />
      </fieldset>
    );
  }
}
