import React from "react";

const VideoCard = (props) => {
  return (
    <iframe
      width="560"
      height="315"
      style={{ margin: "0.5rem" }}
      src={props.videoUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoCard;
