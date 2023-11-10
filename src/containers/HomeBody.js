import React, { Component } from "react";
import Search from "./Sections/Search";
import ArticlesTips from "./Sections/ArticlesTips";
import BestValueTrips from "./Sections/BestValueTrips";
import PopularDestination from "./Sections/PopularDestinations";
import WhyChooseUs from "./Sections/WhyChooseUs";

class HomeBody extends Component {
  render() {
    return (
      <>
        <Search />
        <PopularDestination />
        <BestValueTrips />
        <WhyChooseUs />
        <ArticlesTips />
      </>
    );
  }
}

export default HomeBody;
