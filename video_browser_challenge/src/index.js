import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video_list';
import VideoPlayer from './components/video-player';

const API_KEY = 'AIzaSyDtdrVC98RkGO1o-on-yDJFv9NLm2254xg';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null
    };


    this.videoSearch('surfboards');
    console.log(this.state.selectedVideo);
  }


  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      console.log('search '+this.state.selectedVideo);
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return(
      <div className="row">
        <SearchBar onVideoSearch={videoSearch} />
        <VideoPlayer selectedVideo={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={ selectedVideo => this.setState({selectedVideo:selectedVideo}) } />
      </div>
    );


  }

}

ReactDOM.render(<App />, document.querySelector('.container'));


  /*
      //TESTING
      if(this.state.selectedVideo){console.log('videos' + this.state.selectedVideo.id.videoId); }
      // if(this.state.selectedVideo){console.log('videos' + JSON.stringify(this.state.selectedVideo, null, 4)); }

      //fixed: tried console.log in classes scope.
      //Question: how to open the object to look at its properties in the console?
      //Answer: JSON.stringify(obj, null, 4);
  */
  // selectVideo(video){
  //   this.setState({
  //     selectedVideo: video
  //   });
  // }
  // //@error: why was I unable to pass this function through <VideoList/> ?

  // videoSearch(term) {
  //   YTSearch({key: API_KEY, term: term}, (videos) => {
  //     this.setState({
  //       videos: videos,
  //       selectedVideo: videos[0]
  //     });
  //     console.log(videos[0].id);
  //     console.log(selectedVideo);
  //   });
  // }
  // @question: I tried passing this.videoSearch through a component property, and run there. Why did this receive a scoping bug? ```error: this.setState is not a function```
