import React, { Component } from "react";

class RadioBtn extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div class="flex items-center mr-4 mb-4">
          <label>
            <input
              id="admin"
              type="radio"
              value="Admin"
              checked={this.state.selectedOption === "Admin"}
              onChange={this.onValueChange}
            />
            Admin
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              id="driver"
              type="radio"
              value="Driver"
              checked={this.state.selectedOption === "Driver"}
              onChange={this.onValueChange}
            />
            Driver
          </label>
        </div>
      </form>
    );
  }
}

export default RadioBtn;
