import React from 'react';

const skipAd => {
  const onClickSkip => {
      document.getElementByClassName('video').currentTime = document.getElementById('video').duration;
  }
  return (
    <div className="">
      <button onClick={onClickSkip}/>
    </div>
  );
}

export default skipAd;
