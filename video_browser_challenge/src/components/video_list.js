import React from 'react';

const VideoList = (props) => {

  const videos = props.videos.map((video) => {
    return(
      <img src={video.snippet.thumbnails.default.url}/>
    );
  });

// @challenge: touch 'video.snippet.thumbnails.default.url' from first props object.
//@question: how to examine contents of this object? ```[object Object],[object Object],[object Object],[object Object],[object Object]```



  if (!videos) {
    return <div>Loading...</div>;
  }
  else{
    console.log('video_list '+ videos);
  }

  return (
      <div className="video-list">
        {videos}
      </div>
    );
};

// <img src={videos[0].snippet.thumbnails.default.url}/>

//@error: const components need closing semi-color while react components do not.
//@error: component returned a string, but not a div
export default VideoList;
