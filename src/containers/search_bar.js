import React, { Component } from 'react';

export default class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { term: '' };  
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value); 
    this.setState({ term: event.target.value } ); 
  }

  render() {
    return (
      <form className="input-group">
        <input
          className="form-control" 
          placeholder="Type a city to retrieve its 5-day forecast."
          value={this.state.term}
          onChange={this.onInputChange}
         />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Submit</button>
        </span>
      </form>
    );
  }
}
