import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Draggable } from "react-drag-reorder";

import VideoCard from "./VideoCard";

const UserProfileVideos = (props) => {
  return (
    <ul id="user-videos-list" style={userVideosListStyle}>
      <Draggable>
        {props.videos.map((item) => {
          return (
            <li key={uuidv4()} style={userVideoCardStyle}>
              <div style={{ border: "1px solid black", borderRadius: "5px" }}>
                <VideoCard videoUrl={item} />
                <p>YouTube video</p>
              </div>
            </li>
          );
        })}
      </Draggable>
    </ul>
  );
};

const userVideosListStyle = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const userVideoCardStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default UserProfileVideos;
