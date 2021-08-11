export default function UserSocialMediaLinks(url, platform) {
  this.url = url;
  this.platform = platform;
  if (platform === "FACEBOOK") {
    this.icon = "fa fa-facebook";
  } else if (platform === "INSTAGRAM") {
    this.icon = "fa fa-instagram";
  } else if (platform === "GOOGLE") {
    this.icon = "fa fa-google";
  }
}
