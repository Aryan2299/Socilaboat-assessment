export default function UserVideo(title, url) {
  this.title = title;
  this.url = url;
  this.postedOn = new Date().toDateString();
}
