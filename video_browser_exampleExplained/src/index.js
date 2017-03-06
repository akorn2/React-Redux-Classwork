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
    // super loads parent component's constructor

    this.state = {
      videos: [],
      selectedVideo: null
    };
    // To use a component's state, we must initialize the state object. (By initiating a plain js Object inside of the constructor method.)
    // state manages component elements that change over time.
    // state fields must be decalared in constructor (before componentWillMount(); )
    // @ question: upon which component status should we call declare state?
    // only class based components have state (because the state functionality is inherited from the extended react.Component)
    // @ question: what type of components do not facilitate state functionality?
    // @ question: variable based components do note feature state functionality. (only class based componets have state (because the state functionality is inherited from the extended react.Component)
    // when state changes, components are re-rendered
    // @question: when do components re-rerender?
    // @answer: when state changes... and ...
    // @question: Why start will null & not an empty object?

    this.videoSearch('surfboards');
    // We must execute this function in the constructor to pass a default value into the api call.

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,

        selectedVideo: videos[0]
      });
    });
  }
// React Strategy = Downward Data
// Only most parent componet should request data.
// videoSearch wraps our api function: youtube-api-search.js
// We must wrap our api call to apply our API_KEY config constant.
// the results of YTSearch are applied with this.setState({}) , which is a class component method to update state.
// We cannot manually adjust the object, otherwise the entire object will be overwritten (destroying our other state.keys)
// each time this method changes state, the class component's ```render()``` will be re-rendered (as well as child components inheriting stat attributes).
// @question: will an updated state update all child componets inheriting state values, or only the class components inheriting the updated state.values?
// state in react is component level. One component can change other components state through passing values and callback functions
// redux shares state across appp's components
render() {
  const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    { /*
    lodash.debounce delays invoking func until after waiting 300 miliseconds.
    This throttles videoSearch to be run every 3 seconds vs. every milisecond the text box changes. */}
  return (
    <div>

      <SearchBar onSearchTermChange={videoSearch} />
      {/* pass search function into form component */}
      
    <div className="row">
      <VideoDetail video={this.state.selectedVideo} />

      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos}
        />

      </div>
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
