import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    /* props must be decalred for parent props to be accesible */

    this.state = { term: '' };
    /* decalre the changeable value */
  }

  render() {
    return (
      <div className="search-bar col-md-12">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        {/* this.props.onChange is a jsx function <input/> inherits */}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    /* saves event.target.value to state */
    this.props.onSearchTermChange(term);
    /* pass event.target.value into inherited function calling youtube-api-search */
  }
}

export default SearchBar;
