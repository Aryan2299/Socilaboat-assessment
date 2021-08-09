import User from "../../models/User";
import {
  DUMMY_USERS_NAME,
  DUMMY_USERS_PROFESSION,
  DUMMY_USERS_BIO,
  DUMMY_USERS_IMAGE_URL,
  DUMMY_USERS_SOCIAL_MEDIA_LINKS,
} from "../static/Constants";

const dummyUser = new User(
  DUMMY_USERS_NAME,
  DUMMY_USERS_PROFESSION,
  DUMMY_USERS_BIO,
  DUMMY_USERS_IMAGE_URL,
  DUMMY_USERS_SOCIAL_MEDIA_LINKS
);

export default dummyUser;
