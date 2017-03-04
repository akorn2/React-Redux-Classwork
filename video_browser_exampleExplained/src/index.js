import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDtdrVC98RkGO1o-on-yDJFv9NLm2254xg';

class App extends Component {
  constructor(props) {
    super(props);
    // super loads parents constructor component

    this.state = {
      videos: [],
      selectedVideo: null
    };
    // To use a components state, we must initialize it (using a plain js object inside of the constructor method).
    // state holds component elements that change over time.
    // state fields must be decalared in constructor (before componentWillMount(); )
    // only class based components have state
    // when state changes, components are re-rendered
    // @question: Why start will null & not an empty object?

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,

        selectedVideo: videos[0]
      });
    });
  }
  // React Strategy - Downward Data = only most parent componet should request data
  // each time state is changed, the component's ```render()``` will be re-rendered (as well as child components)

render() {
  const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

  return (
    <div className="test">

      <SearchBar onSearchTermChange={videoSearch} />

      <VideoDetail video={this.state.selectedVideo} />

      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos}
        />

      </div>

    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

//
// return (
//   <div className="test">
//     <SearchBar onSearchTermChange={videoSearch} />
//     //this.props.onSearchTermChange allows function videoSearch() to be passed to child component
//     <VideoDetail video={this.state.selectedVideo} />
//     //This is a controlled component = content is defined by state.
//     //this.props.video is defined by this.state.selectedVideo - which is defined by <VideoList>
//     <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) } videos={this.state.videos} />
//       // setState re-renders the component's render() and child componenets
//       // this.props.onVideoSelect is a function to be triggered by child components onClick();
//       // onVideoSelect is an custom eventHandler - defined
//   </div>
//   // JSX components must be wrapped in a 'div'
// );
