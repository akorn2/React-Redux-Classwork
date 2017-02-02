import React from 'react';

const VideoPlayer = ({selectedVideo}) => {

  if (!selectedVideo) {
    return <div className="">Loading...</div>;
  }
  // if no video, then we return the text.

  const videoId = selectedVideo.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  // syntax sugar using backticks `` (not astris '')
  // function components acess props as an arguement. compared to class components access props as ```this.props```

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{selectedVideo.snippet.title}</div>
        <div>{selectedVideo.snippet.description}</div>
      </div>
    </div>
  );
};
export default VideoPlayer;
