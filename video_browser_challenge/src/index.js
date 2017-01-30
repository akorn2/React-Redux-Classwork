import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video_list';
import VideoPlayer from './components/video-player';
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
/*
    //TESTING
    if(this.state.selectedVideo){console.log('videos' + this.state.selectedVideo.id.videoId); }
    // if(this.state.selectedVideo){console.log('videos' + JSON.stringify(this.state.selectedVideo, null, 4)); }

    //fixed: tried console.log in classes scope.
    //Question: how to open the object to look at its properties in the console?
    //Answer: JSON.stringify(obj, null, 4);
*/
    return(
      <div className="">
        <SearchBar onVideoSearch={videoSearch} />
        
        <VideoList videos={this.state.videos} selectVideo={ selectedVideo => this.setState({selectedVideo:selectedVideo}) } />
      </div>
    );


  }

  // selectVideo(video){
  //   this.setState({
  //     selectedVideo: video
  //   });
  // }
  // //@error: why was I unable to pass this function through <VideoList/> ?

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });

      // touches selectedVideo object = console.log('videoSearch'+ this.state.selectedVideo.snippet.thumbnails.default.url);
    });
  }

  // @question: I tried passing this.videoSearch through a component property, and run there. Why did this receive a scoping bug? ```error: this.setState is not a function```


}

ReactDOM.render(<App />, document.querySelector('.container'));
