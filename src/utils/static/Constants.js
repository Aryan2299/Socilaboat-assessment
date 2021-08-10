import SocialMediaLinks from "../../models/SocialMediaLinks";

export const DUMMY_USERS_NAME = "Arnold Schwarzenegger";
export const DUMMY_USERS_PROFESSION = "Fitness Instructor";
export const DUMMY_USERS_BIO = "Dummy User";
export const DUMMY_USERS_IMAGE_URL =
  "https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg";
export const DUMMY_USERS_VIDEOS = [
  {
    title: "Workout Video 1",
    url: "https://www.youtube.com/embed/ml6cT4AZdqI",
    postedOn: new Date().toDateString(),
  },
  {
    title: "Workout Video 2",
    url: "https://www.youtube.com/embed/gC_L9qAHVJ8",
    postedOn: new Date().toDateString(),
  },
  {
    title: "Workout Video 3",
    url: "https://www.youtube.com/embed/ZMO_XC9w7Lw",
    postedOn: new Date().toDateString(),
  },
];

export const DUMMY_USERS_SOCIAL_MEDIA_LINKS = [
  new SocialMediaLinks("https://www.facebook.com", "FACEBOOK"),
  new SocialMediaLinks("https://www.instagram.com", "INSTAGRAM"),
];
