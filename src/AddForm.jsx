import React from 'react';
import {isValidName, isValidPhone} from './validators'

const getErrorClass = isValid => !isValid ? "error" : null;

export class AddForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isNameValid: true,
    isPhoneValid: true,
  };

  onChange = evt =>
    this.setState({
      [evt.target.name]: evt.target.value
    });

  onSubmit = evt => {
    evt.preventDefault();

    console.log('xxx');

    const isNameValid = isValidName(this.state.name);
    const isPhoneValid = isValidPhone(this.state.phone);

    if (isNameValid && isPhoneValid) {
      this.props.onAdd(this.state.name, this.state.phone);

      this.setState({
        name: '',
        phone: ''
      });
    }

    this.setState({
      isNameValid,
      isPhoneValid, 
    });
  }

  render() {
    return (
      <form
        className="add-form"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onChange}
          className={getErrorClass(this.state.isNameValid)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.onChange}
          className={getErrorClass(this.state.isPhoneValid)}
        />
        <button
          className="primary"
          type="submit"
        >
          Add 
        </button>
        {/* <button>
          Cancel
        </button> */}
      </form>
    );
  }
}
