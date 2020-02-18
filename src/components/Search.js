import React, { Component } from 'react';

class Search extends Component {

	handleSubmit(){
		fetch('http://tinman.cs.gsu.edu:5001/show')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
	}

  render() {
    return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="type" />
				<input type="submit" value="submit" />
			</form>
    );
  }
}

export default Search;
