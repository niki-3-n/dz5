import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    
    return (
      <div>
        <label htmlFor="filter">Find contacts by name:</label>
        <input
          type="text"
          id="filter"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Filter; 