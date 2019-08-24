import React, { Component } from "react";

class GridDisplay extends Component {
  state = {
    imageLoaded: 0
  };

  incrementLoadingState = () => {
    this.setState({
      imageLoaded: this.state.imageLoaded + 1
    });
  };
  handleClick = () => {
    alert("clicked");
  };

  render() {
    let empty = [];
    while (empty.length < 9) {
      let newItem = (
        <div key={empty.length} className="empty">
          <div className="innertext">
            <span />
            <span />
          </div>
        </div>
      );
      empty.push(newItem);
    }

    console.log(this.props.pictures);

    if (!this.props.pictures) {
      return <div className="picturegrid">{empty}</div>;
    }

    const pictures = this.props.pictures.map(item => {
      console.log(item);
      return (
        // <div key={item.id} />
        <div
          className={`picture-item ${
            !this.state.imageLoaded === 8 ? "hidden" : null
          }`}
          key={item.id}
          onClick={this.handleClick}
        >
          <img
            src={item.urls.small}
            alt={item.description}
            onLoad={this.incrementLoadingState}
          />
          <div class="shadow" />
          <div
            className={`innertext ${
              !this.state.imageLoaded === 8 ? "hidden" : "shown"
            }`}
          >
            <h3>{item.user.first_name + " " + item.user.last_name}</h3>
            <h5>{item.user.location}</h5>
          </div>
        </div>
      );
    });

    console.log(this.state.imageLoaded);
    return <div className="picturegrid">{pictures}</div>;
  }
}

export default GridDisplay;
