import React from "react";
import {
  headerBackgroundStyle,
  headerPictureStyle,
  headerDivStyle,
} from "../style/UserProfileHeaderStyle";
import { v4 as uuidv4 } from "uuid";
import "../App.css";


const UserProfileHeader = (props) => {
  let { user } = props;

  return (
    <div id="user-profile-header" style={headerDivStyle}>
      <div
        id="user-profile-header-background"
        style={headerBackgroundStyle}
      ></div>

      <div id="user-profile-details">
        <img
          src={user.imageUrl}
          id="user-profile-header-picture"
          style={headerPictureStyle}
          height="250px"
          width="300px"
        />

        <h2>{user.name.toUpperCase()}</h2>
        <h4>{user.profession.toUpperCase()}</h4>
        <ul>
          {user.socialMediaLinks.map((item) => {
            return <li key={uuidv4()}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserProfileHeader;
