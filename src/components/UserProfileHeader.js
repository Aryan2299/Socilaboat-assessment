import React from "react";
import {
  headerBackgroundStyle,
  headerPictureStyle,
  headerDivStyle,
  headerUserDetailsOuterDivStyle,
  headerUserDetailsInnerDivStyle,
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

      <div id="user-profile-details" style={headerUserDetailsOuterDivStyle}>
        <img
          src={user.imageUrl}
          id="user-profile-header-picture"
          style={headerPictureStyle}
          height="250px"
          width="300px"
        />

        <div style={headerUserDetailsInnerDivStyle}>
          <h2>{user.name.toUpperCase()}</h2>
          <h4>{user.profession.toUpperCase()}</h4>
          <ul style={{ display: "flex" }}>
            {user.socialMediaLinks.map((item) => {
              return (
                <li key={uuidv4()} style={{ margin: "5px" }}>
                  {
                    <a href={item.url}>
                      <i className={item.icon} style={{ fontSize: "30px" }}></i>
                    </a>
                  }
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHeader;
