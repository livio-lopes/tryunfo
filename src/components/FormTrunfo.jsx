import React, { Component } from 'react';

export default class FormTrunfo extends Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="trunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            id=""
          />
          Super Trunfo
        </label>
      </fieldset>
    );
  }
}
