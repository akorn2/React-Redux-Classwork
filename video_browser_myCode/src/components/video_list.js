import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

const videoItems = props.videos.map((video) => {
  return(
    <VideoListItem
      video={video}
      key={video.etag}
      onVideoSelect={props.onVideoSelect} />
  );
});
//Question: I tried unsucessfully to include the .map() function in the VideoListItem component. Why were the properties not found?

// @challenge: touch 'video.snippet.thumbnails.default.url' from first props object.
//@question: how to examine contents of this object? ```[object Object],[object Object],[object Object],[object Object],[object Object]```

if (!props.videos) {
  return <div>Loading...</div>;
}

  return (
    <div className="col-md-4">
      <ul className="list-group">
        {videoItems}
      </ul>
      </div>
    );
};

// <img src={videos[0].snippet.thumbnails.default.url}/>

//@error: const components need closing semi-color while react components do not.
//@error: component returned a string, but not a div
export default VideoList;
