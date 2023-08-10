import { Component } from "react";

export default class ImageClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: props.imgurl,
    };
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    alert(`Esta imagen es ${this.state.imgurl}`);
  }

  render() {
    const classNameImg = this.props.circled ? "image-rounded" : "image-squared";
    return (
      <img
        onClick={this.handleImageClick}
        className={classNameImg}
        src={this.state.imgurl}
      />
    );
  }
}
