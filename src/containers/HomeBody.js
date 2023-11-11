import React, { Component } from "react";
import Search from "./Sections/Search";
import ArticlesTips from "./Sections/ArticlesTips";
import BestValueTrips from "./Sections/BestValueTrips";
import PopularDestination from "./Sections/PopularDestinations";
import WhyChooseUs from "./Sections/WhyChooseUs";
import "./HomeBody.scss";
class HomeBody extends Component {
  render() {
    return (
      <div className="wrapper">
        <Search />
        <PopularDestination />
        <BestValueTrips />
        <WhyChooseUs />
        <ArticlesTips />
      </div>
    );
  }
}

export default HomeBody;
