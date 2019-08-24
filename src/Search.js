import React, { Component } from "react";
import axios from "axios";

import Header from "./components/Header";
import Body from "./components/Body";
import GridDisplay from "./components/GridDisplay";
import Modal from "./components/Modal";

class Search extends Component {
  state = {
    search: this.props.location.search.replace("?", ""),
    loading: true,
    pictures: [],
    item: null,
    showModal: false
  };

  itemClick = clicked => {
    this.setState({
      item: clicked,
      showModal: true
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  requestPictures = (query = "african") => {
    const applicationId =
      "fb2e55a1897c997f6e046fb516f92d0f8690d2ceaf7dc966e0d9e90cebf5e249";

    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=8&query=${
          this.state.search
        }&client_id=${applicationId}`
      )
      .then(data => {
        return data.data.results;
      })
      .then(data => {
        this.setState({
          pictures: data,
          loading: false
        });
      });
  };
  componentDidMount() {
    this.requestPictures();
  }
  render() {
    return (
      <div>
        <Header>
          <div className="searchresult">
            {this.state.loading ? (
              <h1>
                Searching for <span>{this.state.search}</span>
              </h1>
            ) : (
              <h1>
                Search results for <span> "{this.state.search}"</span>
              </h1>
            )}
          </div>
        </Header>
        <Body>
          {!this.state.loading ? (
            <GridDisplay
              itemClick={this.itemClick}
              pictures={this.state.pictures}
            />
          ) : (
            <GridDisplay />
          )}
        </Body>
        {this.state.showModal ? (
          <Modal item={this.state.item} closeModal={this.closeModal} />
        ) : null}
      </div>
    );
  }
}

export default Search;
