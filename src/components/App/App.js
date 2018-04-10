import React from 'react';

import PersonalForm from '../PersonalForm/PersonalForm';
import CardForm from '../CardForm/CardForm';
import Step from '../Step/Step';
import Title from '../Title/Title';


import './App.css';

class App extends React.Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  }

  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  }

  handleTabClick = (step) => {
    this.setState({ step: step });
  }

  handleChangeForm = (name, value) => {
    this.setState({ [name]: value });
  }

  isEmpty = (argument) => { return argument !== '' }

  checkStateFields = () => {
  	return (this.isEmpty(this.state.firstName) && this.isEmpty(this.state.lastName) && this.isEmpty(this.state.email))
  }

  checkCardNumber = (cardNumber) => {
  	return cardNumber.length === 16
  }

  checkEmail = () => {
  	return this.state.email.includes('@')
  }

  isFormCommitable = () => {
    if (this.state.step === 1 && (this.checkStateFields() && this.state.email.includes('@'))) {
      return true;
    } else if (this.state.step === 2 && (this.checkCardNumber(this.state.cardNumber))) {
      return true;
    }
    return false;
  }

  renderForm = () => {
    if (this.state.step === 1) {
      return (
        <PersonalForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          onChangeForm={this.handleChangeForm} />
      );
    } else if (this.state.step === 2) {
      return (
        <CardForm
          cardNumber={this.state.cardNumber}
          onChangeForm={this.handleChangeForm} />
      );
    } else if (this.state.step === 3) {
      return (
        <p data-test="congratulations">Поздравляем!</p>
      );
    }
  }

  render () {
    const { step } = this.state;

    return(
      <div className="container">
        <div className="tab-panel">
          <Step number={1} isClickable={step > 1} isSelected={step === 1} onClick={this.handleTabClick}>Personal information</Step>
          <Step number={2} isClickable={step > 2} isSelected={step === 2} onClick={this.handleTabClick}>Card information</Step>
          <Step number={3} isSelected={step === 3} onClick={this.handleTabClick}>Finish</Step>
        </div>
        <div className="form-content">
          {step === 1 ? <Title>Персональная информация</Title> : ''}
          {step === 2 ? <Title>Номер карты</Title> : ''}
          {this.renderForm()}
        </div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;