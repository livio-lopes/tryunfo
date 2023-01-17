import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const {
      search,
      onSearchTrunfo,
      searchRare,
      searchTrunfo,
      onSearchName,
      onSearchRare } = this.props;
    return (
      <div>
        <h2>Filtro de busca</h2>
        <input
          disabled={ searchTrunfo }
          data-testid="name-filter"
          name="search"
          value={ search }
          onChange={ onSearchName }
          type="text"
          placeholder="Nome da Carta"
        />
        <select
          disabled={ searchTrunfo }
          data-testid="rare-filter"
          name="searchRare"
          value={ searchRare }
          onChange={ onSearchRare }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input
          data-testid="trunfo-filter"
          type="checkbox"
          name="searchTrunfo"
          checked={ searchTrunfo }
          onChange={ onSearchTrunfo }
        />
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string,
  searchRare: PropTypes.string,
  onSearchName: PropTypes.func,
  onSearchRare: PropTypes.func,
}.isRequerid;
