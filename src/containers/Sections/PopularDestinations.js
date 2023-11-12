import React, { Component } from "react";
import "./PopularDestination.scss";
class PopularDestination extends Component {
  render() {
    return (
      <div className="PopularDestination section-share">
        <div className="title">
          <h2>Popular Destinations</h2>
          <h5>World's best tourist destinations</h5>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-3">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg"
                alt="Myphoto"
              ></img>
              <p>Tokyo</p>
            </div>

            <div className="col-3">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg"
                alt="Myphoto"
              ></img>
              <p>Seoul</p>
            </div>
            <div className="col-3">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg"
                alt="Myphoto"
              ></img>
              <p>Paris</p>
            </div>
            <div className="col-3">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg"
                alt="Myphoto"
              ></img>
              <p>London</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularDestination;
