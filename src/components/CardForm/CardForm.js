import React, { Component } from 'react';

import './CardForm.css';

class CardForm extends Component {
  static defaultProps = {
    cardNumber: undefined,
    onChangeForm: (name, value) => {
      console.error('Not implemented');
    }
  }

  constructor (props) {
    super(props);
    console.log('constructor');
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  handleChangeForm = (event) => {
    const { name, value } = event.target;

    this.props.onChangeForm(name, value);
  }

  render () {
    return (
      <div className="card-form">
        <input name="cardNumber"
          onChange={this.handleChangeForm}
          value={this.props.cardNumber}
          placeholder="0000000000000000"/>
      </div>
    );
  }
}

export default CardForm;