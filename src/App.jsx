import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Search from './components/Search';

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
    preview: true,
    search: '',
    searchRare: '',
  };

  onSearchName = ({ target }) => {
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
    const { deck } = this.state;
    this.setState(() => {
      const filtredDeck = deck.filter((e) => (e.cardName.includes(value) && e));
      console.log(filtredDeck);
    });
  };

  onSearchRare = ({ target }) => {
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
    const { deck } = this.state;
    if (value !== 'todas') {
      this.setState({
        deck: deck.map((e) => (e.cardRare === value ? e : '')),
      });
    }
  };

  deleteCard = ({ target }) => {
    const { deck } = this.state;
    const theF = false;
    this.setState({
      hasTrunfo: deck.filter((e) => e.cardName === target.id).hasTrunfo ? theF : theF,
      deck: deck.filter((e) => e.cardName !== target.id),
    });
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
      preview: true,
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
        return {
          deck: [...prevState.deck, novoDeck],
          hasTrunfo: cardTrunfo,
          preview: false,
        };
      }
      return {
        deck: [novoDeck],
        hasTrunfo: cardTrunfo,
        preview: false,
      };
    });
    this.clearInputs();
  };

  render() {
    const { deck } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Search
          { ...this.state }
          onSearchName={ this.onSearchName }
          onSearchRare={ this.onSearchRare }
        />
        <section className="container-app">
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
            <Card className="container-preview" { ...this.state } />
          </div>
          <div>
            <h1>Lista de Cartas</h1>
            {deck.map((card, index) => (<Card
              key={ index }
              { ...card }
              deleteCard={ this.deleteCard }
            />))}
          </div>
        </section>

      </div>
    );
  }
}

export default App;
