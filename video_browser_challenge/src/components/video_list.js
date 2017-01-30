import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, selectVideo}) => {

const videoItems = videos.map((video) => {
  return(
    <VideoListItem
      video={video}
      key={video.etag}
      selectVideo={selectVideo} />
  );
});
//Question: I tried unsucessfully to include the .map() function in the VideoListItem component. Why were the properties not found?

// @challenge: touch 'video.snippet.thumbnails.default.url' from first props object.
//@question: how to examine contents of this object? ```[object Object],[object Object],[object Object],[object Object],[object Object]```

if (!videos) {
  return <div>Loading...</div>;
}

  return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
};

// <img src={videos[0].snippet.thumbnails.default.url}/>

//@error: const components need closing semi-color while react components do not.
//@error: component returned a string, but not a div
export default VideoList;
