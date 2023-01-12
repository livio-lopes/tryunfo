import { Component } from 'react';
import FormName from './FormName';
import FormDescription from './FormDescription';
import FormAttr1 from './FormAttr1';
import FormAttr2 from './FormAttr2';
import FormAttr3 from './FormAttr3';
import FormImage from './FormImage';
import FormRarity from './FormRarity';
import FormTrunfo from './FormTrunfo';
import FormButton from './FormButton';

export default class Form extends Component {
  render() {
    return (
      <div>
        <h2>Adicione Nova Carta</h2>
        <form action="">
          <FormName />
          <FormDescription />
          <FormAttr1 />
          <FormAttr2 />
          <FormAttr3 />
          <FormImage />
          <FormRarity />
          <FormTrunfo />
          <FormButton />
        </form>
      </div>
    );
  }
}
