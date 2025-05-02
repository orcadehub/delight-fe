import React from 'react';
import './InstagramEmbed.css';

const reelUrls = [
  "https://www.instagram.com/reel/DCa47yDPSOx/embed",
  "https://www.instagram.com/reel/DIpy7TJv-tN/embed",
  "https://www.instagram.com/reel/DIl5mZDvv76/embed",
  "https://www.instagram.com/reel/DIjWuH3saLW/embed",
  "https://www.instagram.com/reel/DIbcwYMvmxI/embed",
  "https://www.instagram.com/reel/DIRGCxNP8Eb/embed",
  "https://www.instagram.com/reel/DIJizClPQ79/embed",
  "https://www.instagram.com/reel/DGCeXyKvLRh/embed",
  
  // Add more reel embed URLs here
];

const InstagramEmbed = () => {
  return (
    <div className="instagram-embed-wrapper">
      <h2 className="embed-title">Our Reels on Instagram</h2>
      
      <div className="iframe-grid">
        {reelUrls.map((url, index) => (
          <iframe
            key={index}
            className="insta-iframe"
            src={url}
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            title={`Instagram Reel ${index + 1}`}
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default InstagramEmbed;
