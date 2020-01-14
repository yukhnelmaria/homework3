import React from "react";
import { isValidName, isValidPhone } from "./validators";

const getErrorClass = isValid => (!isValid ? "error" : null);

export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNameValid: true,
      isPhoneValid: true,
      name: "",
      phone: ""
    };

    if (typeof this.props.client !== "undefined") {
      const { name, phone } = this.props.client;

      this.state.name = name;
      this.state.phone = phone;
    }
  }

  onChange = evt =>
    this.setState({
      [evt.target.name]: evt.target.value
    });

  onSubmit = evt => {
    evt.preventDefault();
    const isNameValid = isValidName(this.state.name);
    const isPhoneValid = isValidPhone(this.state.phone);

    if (isNameValid && isPhoneValid) {
      this.props.onSubmit(this.state.name, this.state.phone);
    }

    this.setState({
      isNameValid,
      isPhoneValid
    });
  };

  isEdit = () => Boolean(this.props.client);

  render() {
    return (
      <form className="client-form" onSubmit={this.onSubmit}>
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
        <button className="primary" type="submit" onClick={this.onSubmit}>
          {this.isEdit ? "Save" : "Add"}
        </button>
        <button onClick={() => this.props.onCancel()}>Cancel</button>
      </form>
    );
  }
}
