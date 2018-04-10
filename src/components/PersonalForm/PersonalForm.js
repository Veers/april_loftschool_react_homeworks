import React from 'react';

import './PersonalForm.css';

class PersonalForm extends React.PureComponent {
  static defaultProps = {
    firstName: '',
    lastName: '',
    email: '',
    onChangeForm: (name, value) => {
      console.error('Not implemented');
    }
  }

  handleChangeForm = (event) => {
    const { name, value } = event.target;

    this.props.onChangeForm(name, value);
  }

  render () {
    const { firstName, lastName, email } = this.props;

    return (
      <div className="personal-form">
        <input name="firstName" value={firstName} placeholder="First name" onChange={this.handleChangeForm}/>
        <input name="lastName" value={lastName} placeholder="Last name" onChange={this.handleChangeForm}/>
        <input name="email" value={email} placeholder="Email" onChange={this.handleChangeForm}/>
      </div>
    );
  }
}

export default PersonalForm;