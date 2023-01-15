import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
    hasTrunfo: false,
  };

  validationInputs = () => {
    this.setState((prevState) => {
      const noVoid = (prevState.cardName.length > 0)
        && (prevState.cardDescription.length > 0)
        && (prevState.cardImage.length > 0)
        && (prevState.cardRare.length > 0);
      const maxAttr = 90;
      const maxTotal = 210;
      const negative = -1;
      const nAttr01 = parseInt(prevState.cardAttr1, 10);
      const nAttr02 = parseInt(prevState.cardAttr2, 10);
      const nAttr03 = parseInt(prevState.cardAttr3, 10);
      const attr01 = nAttr01 > negative && nAttr01 <= maxAttr;
      const attr02 = nAttr02 > negative && nAttr02 <= maxAttr;
      const attr03 = nAttr03 > negative && nAttr03 <= maxAttr;
      const totalMax = nAttr01 + nAttr02 + nAttr03 <= maxTotal;
      const validAttr = attr01 && attr02 && attr03 && totalMax;
      return { isSaveButtonDisabled: !(noVoid && validAttr) };
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.validationInputs();
  };

  clearInputs = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  onSaveButtonClick = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const novoDeck = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => {
      if (prevState.deck.length > 0) {
        return { deck: [...prevState.deck, novoDeck],
          hasTrunfo: cardTrunfo };
      }
      return { deck: [novoDeck],
        hasTrunfo: cardTrunfo };
    });
    this.clearInputs();
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="container-form">
          <h2>Adicione Nova Carta</h2>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <div className="container-preview">
          <h1>Pré-Visualização</h1>
          <Card { ...this.state } />
        </div>
      </div>
    );
  }
}

export default App;
