import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term:''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
          //@solved: ```value=""```, but needed ```value={}```
          />
        </div>
    );
  }

  onInputChange(term){
    this.setState({term:term});
    this.props.onVideoSearch(term);
  }

}

export default SearchBar;
