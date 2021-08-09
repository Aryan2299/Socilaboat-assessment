import React from "react";
import UserProfileHeader from "./UserProfileHeader";
import UserProfileVideos from "./UserProfileVideos";

const UserProfile = (props) => {
  const { user } = props;
  return (
    <div id="user-profile-main">
      <UserProfileHeader user={user} />
      <UserProfileVideos videos={user.videos} />
    </div>
  );
};

export default UserProfile;
