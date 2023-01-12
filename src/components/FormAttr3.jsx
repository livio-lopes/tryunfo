import React, { Component } from 'react';

export default class FormAttr3 extends Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="attr3">
          <span> Attr03</span>
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
            id=""
          />
        </label>
      </fieldset>
    );
  }
}
