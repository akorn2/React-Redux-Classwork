import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // This is es2016 syntax sugar.
  // {video, onVideoSelect} is the same as passing props as a parameter and creating two new variables.
  /*
    const VideoListItem = (props) => {
      const video = props.video;
      const onVideoSelect = props.onVideoSelect
    }
  */

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video) } className="list-group-item">
    //onVideoSelect is a function passed throug parent component's props
    //onClick is an eventHandler triggering onVideoSelect
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
