import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  //question: instead of passing 'props' could I instead declare a class react.Component with ```constructor(params){ super(params);}```
  //question: Why do I need to pass props as a parameter? @answer: to access the properties added to the component decalaration.[]
  const videoItems = props.videos.map((video) => {
    // map() is a function-property of an array
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
    );
  });
    //function on props, passed through VideoListItem.props
    //key is a performance measure to aid react in locating the array's items

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
