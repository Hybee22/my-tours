import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="tour img" />
          <span
            className="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            <i className="far fa-window-close fa-2x" />
          </span>
        </div>
        <div className="tour-info">
          <h4>{city}</h4>
          <h5>{name}</h5>
          <h5>
            More Info...
            <span onClick={this.handleInfo}>
              <i className="far fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p className="info">{info}</p>}
        </div>
      </article>
    );
  }
}
