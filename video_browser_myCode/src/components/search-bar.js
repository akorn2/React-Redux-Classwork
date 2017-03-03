import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term:''};
  }

  render() {
    return (
      <div className="search-bar col-md-12">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}/>
        </div>
    );
  }
  //@solved: ```value=""```, but needed ```value={}```

  onInputChange(term){
    this.setState({term:term});
    this.props.onVideoSearch(term);
  }

}

export default SearchBar;
