import React, { Component } from "react";
import "./WhyChooseUs.scss";

class WhyChooseUs extends Component {
  render() {
    return (
      <>
        <div className="WhyChooseUs section-share">
          <div className="title">
            <h2>Why Choose Us</h2>
            <h5>Here are reasons you should plan trip with us</h5>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-3 PackagePlan">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
                  alt="Myphoto"
                ></img>
                <div className="describe">
                  <h3>Handpicked Hotels</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                  </p>
                </div>
              </div>

              <div className="col-3 PackagePlan">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
                  alt="Myphoto"
                ></img>
                <div className="describe">
                  <h3>World Class Service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                  </p>
                </div>
              </div>

              <div className="col-3 PackagePlan">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
                  alt="Myphoto"
                ></img>
                <div className="describe">
                  <h3>Best Price Guarantee</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backgroundImage"></div>
      </>
    );
  }
}

export default WhyChooseUs;
