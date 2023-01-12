import React, { Component } from 'react';

export default class FormRarity extends Component {
  render() {
    return (
      <fieldset>
        <legend>Raridade</legend>
        <select
          data-testid="rare-input"
          name="rarity"
          id=""
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </fieldset>
    );
  }
}
