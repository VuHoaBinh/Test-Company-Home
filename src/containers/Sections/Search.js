import React, { Component } from "react";
import "./Search.scss";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAdvancedSearch: false,
    };
  }

  onClickAdvancedSearch = () => {
    this.setState({ isOpenAdvancedSearch: !this.state.isOpenAdvancedSearch });
  };
  render() {
    let { isOpenAdvancedSearch } = this.state;
    return (
      <>
        <div className="Search">
          <div className="title">
            <h2>Where do you want to go?</h2>
            <h5>Trips, experiences, and places. All in one service.</h5>
          </div>
          <div className="content">
            <div className="row">
              <div class="col-3 formInput">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Destination, city"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="col-3 formInput">
                <select className="form-control" name="month">
                  <option value="">Any Month</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
                <i className="fa-regular fa-calendar"></i>
              </div>
              <div className="col-3 formInput">
                <select className="form-control" name="sort_by">
                  <option value="date">Sort By Date</option>
                  <option value="price_low">Price Low to High</option>
                  <option value="price_high">Price High to Low</option>
                  <option value="name">Sort By Name</option>
                  <option value="popular">Sort By Popularity</option>
                  <option value="review">Sort By Review Score</option>
                </select>
                <i className="fa-solid fa-sort"></i>
              </div>
              <div className="col-3 formInput">
                <button type="submit" className="btn btn-danger ">
                  Search
                </button>
              </div>
            </div>
            {isOpenAdvancedSearch ? (
              <>
                <div className="row">
                  <div className="col-3 formInput">
                    <select className="form-control" name="tourcat">
                      <option value="">All Categories</option>
                      <option value="mountain">Mountain</option>
                      <option value="rural">Rural</option>
                      <option value="snow-ice">Snow &amp; Ice</option>
                      <option value="wildlife">Wildlife</option>
                    </select>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>

                  <div className="col-3 formInput">
                    <select className="form-control" name="destination_id">
                      <option value="">Any Destinations</option>
                      <option value="277">Tokyo</option>
                      <option value="278">Seoul</option>
                      <option value="279">Paris</option>
                      <option value="284">London</option>
                      <option value="285">Venice</option>
                      <option value="287">Miami</option>
                      <option value="289">Rome</option>
                      <option value="270">Prague</option>
                      <option value="291">California</option>
                      <option value="292">Kyoto</option>
                      <option value="293">Hong Kong</option>
                      <option value="294">Santorini</option>
                    </select>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>

                  <div className="col-3 formInput">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Max budget ex. 500"
                    />
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                </div>
                <div className="row AdvancedSearch ">
                  <i className="fa-solid fa-chevron-up"></i>
                  <span onClick={(event) => this.onClickAdvancedSearch(event)}>
                    Advanced Search
                  </span>
                </div>
              </>
            ) : (
              <div className="row AdvancedSearch ">
                <i className="fa-solid fa-angle-down"></i>
                <span onClick={(event) => this.onClickAdvancedSearch(event)}>
                  Advanced Search
                </span>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
