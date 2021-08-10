import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Draggable } from "react-drag-reorder";

import VideoCard from "./VideoCard";
import {
  userVideosListStyle,
  userVideoCardStyle,
} from "../style/UserProfileVideosStyle";

const UserProfileVideos = (props) => {
  return (
    <div style={userVideosListStyle}>
      <Draggable>
        {props.videos.map((item) => {
          return (
            <li key={uuidv4()} style={userVideoCardStyle}>
              <VideoCard videoUrl={item.url} />
              <ul>
                <li>
                  <h3>{item.title.toUpperCase()}</h3>
                </li>
                <li>
                  <h6>{item.postedOn.toString().toUpperCase()}</h6>
                </li>
              </ul>
            </li>
          );
        })}
      </Draggable>
    </div>
  );
};

export default UserProfileVideos;
