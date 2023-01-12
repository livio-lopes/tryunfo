import React, { Component } from 'react';

export default class FormAttr1 extends Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="attr1">
          <span> Attr01</span>
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
            id=""
          />
        </label>
      </fieldset>
    );
  }
}
