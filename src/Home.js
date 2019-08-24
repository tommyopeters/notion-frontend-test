import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import GridDisplay from "./components/GridDisplay";
import Modal from "./components/Modal";
export default class Home extends Component {
  state = {
    pictures: [],
    loading: true,
    redirect: false,
    query: null,
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

  handleSubmit = () => {
    this.setState({
      redirect: true
    });
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value });
  };

  requestPictures = (query = "african") => {
    const applicationId =
      "fb2e55a1897c997f6e046fb516f92d0f8690d2ceaf7dc966e0d9e90cebf5e249";

    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=8&query=${query}&client_id=${applicationId}`
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
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/search",
            search: `?${this.state.query}`
          }}
        />
      );
    }

    return (
      <div>
        <Header>
          <form onSubmit={this.handleSubmit}>
            <i className="fas fa-search" />
            <input
              onChange={this.handleInputChange}
              type="search"
              placeholder="Search for photo"
            />
          </form>
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
