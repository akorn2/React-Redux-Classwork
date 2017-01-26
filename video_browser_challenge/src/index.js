import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video_list';
//@question: I thought I could name import 'SearchBar' something differnt than export label? Is this a condition of export default?
const API_KEY = 'AIzaSyDtdrVC98RkGO1o-on-yDJFv9NLm2254xg';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null
    };
    //@question: why does ReactDOM not render when ```this.state``` is not declared?

    this.videoSearch('surfboards');
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return(
      <div className="boobies">
        <SearchBar onVideoSearch={videoSearch} />

        <VideoList videos={this.state.videos} />
      </div>
    );
  }

//@error: tried rendering an object (for testing to see it loaded). Must load item from object..

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });

      console.log('videoSearch'+ this.state.selectedVideo.snippet.thumbnails.default.url);
    });
  }
  // @question: I tried passing this.videoSearch through a component property, and run there. Why did this receive a scoping bug? ```error: this.setState is not a function```


}

ReactDOM.render(<App />, document.querySelector('.container'));
