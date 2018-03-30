import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value.toUpperCase());
  }

  render() {
    return (
        <label>
          {this.props.label}
            <input id={this.props.id} className={this.props.class}
                  placeholder={this.props.placeholder} value={this.props.value}
                  onChange={this.handleChange}/>
        </label>
    );
  }
}

export default SearchInput
