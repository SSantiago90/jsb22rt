import { Component } from "react";

export default class ImageClass extends Component {
  constructor(props) {
    super(props);
    this.imgurl = props.imgurl;
    this.circled = props.circled;
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    alert(`Esta imagen es ${this.imgurl}`);
  }

  render() {
    const classNameImg = this.circled ? "image-rounded" : "image-squared";
    return (
      <img
        onClick={this.handleImageClick}
        className={classNameImg}
        src={this.imgurl}
      />
    );
  }
}
