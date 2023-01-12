import React, { Component } from 'react';
import FormButton from './FormButton';

export default class FormTrunfo extends Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="trunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            className='trunfo'
          />
          <span>Super Trunfo</span>
        </label>
        <FormButton />
      </fieldset>
    );
  }
}
