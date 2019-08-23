import React, { Component } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import axios from "axios";
export default class Home extends Component {
  state = {
    pictures: [],
    loading: true
  };

  requestPictures(query = "africa") {
    const applicationId =
      "fb2e55a1897c997f6e046fb516f92d0f8690d2ceaf7dc966e0d9e90cebf5e249";

    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=africa&client_id=${applicationId}`
      )
      .then(data => {
        return data.data.results;
      })
      .then(data => {
        console.log(data);
        this.setState({
          pictures: data,
          loading: false
        });
      });
  }
  componentDidMount() {
    this.requestPictures();
  }

  render() {
    const pictures = this.state.pictures.map(item => {
      return <img src={item.urls.small} alt={item.description} />;
    });

    return (
      <div>
        <Header>
          <form action="">
            <i className="fas fa-search" />
            <input type="search" placeholder="Search for photo" />
          </form>
        </Header>
        <Body>
          <div>{!this.state.loading ? pictures : null}</div>
        </Body>
      </div>
    );
  }
}
