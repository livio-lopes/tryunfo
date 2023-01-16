import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const { search, onSearch } = this.props;
    return (
      <div>
        <h2>Filtro de busca</h2>
        <input
          data-testid="name-filter"
          name="search"
          value={ search }
          onChange={ onSearch }
          type="text"
          placeholder="Nome da Carta"
        />
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string,
  onSearch: PropTypes.func,
}.isRequerid;
