import React, { Component } from 'react';

export default class FormAttr2 extends Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="attr1">
          <span> Attr02</span>
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
            id=""
          />
        </label>
      </fieldset>
    );
  }
}
