import React from 'react';

const VideoPlayer = ({id, description, title}) => {
  
  if(!id){
    return('...loading');
  }
  else{

  return( <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + id.videoId }></iframe> );
  }

};

export default VideoPlayer;
