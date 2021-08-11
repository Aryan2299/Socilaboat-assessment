import UserSocialMediaLinks from "../../models/UserSocialMediaLinks";
import UserVideo from "../../models/UserVideo";

export const DUMMY_USERS_NAME = "Arnold Schwarzenegger";
export const DUMMY_USERS_PROFESSION = "Fitness Instructor";
export const DUMMY_USERS_BIO = "Dummy User";
export const DUMMY_USERS_IMAGE_URL =
  "https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg";
export const DUMMY_USERS_VIDEOS = [
  new UserVideo("Workout Video 1", "https://www.youtube.com/embed/ml6cT4AZdqI"),
  new UserVideo("Workout Video 2", "https://www.youtube.com/embed/gC_L9qAHVJ8"),
  new UserVideo("Workout Video 3", "https://www.youtube.com/embed/ZMO_XC9w7Lw"),
  new UserVideo("Workout Video 4", "https://www.youtube.com/embed/vc1E5CfRfos"),
];

export const DUMMY_USERS_SOCIAL_MEDIA_LINKS = [
  new UserSocialMediaLinks("https://www.facebook.com", "FACEBOOK"),
  new UserSocialMediaLinks("https://www.instagram.com", "INSTAGRAM"),
];
