import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import HomeFooter from "./HomeFooter";

class HomePage extends Component {
  render() {
    return (
      <>
        <HomeHeader />
        <HomeBody />
        <HomeFooter />
      </>
    );
  }
}

export default HomePage;
