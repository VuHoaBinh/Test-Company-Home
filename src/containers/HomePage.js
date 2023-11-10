import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
// import HomeFooter from "./HomeFooter";
import "./HomePage.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <img src="" alt="myphoto" /> */}
        <HomeHeader />
        <HomeBody />
        {/* <HomeFooter /> */}
      </div>
    );
  }
}

export default HomePage;
