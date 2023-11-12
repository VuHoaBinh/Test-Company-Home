import React, { Component } from "react";
import "./BestValueTrips.scss";
class BestValueTrips extends Component {
  render() {
    return (
      <>
        <div className="BestValueTrips section-share">
          <div className="title">
            <h2>Best Value Trips</h2>
            <h5>Best offers trips from us</h5>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-3 PackageTour">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
                  alt="Myphoto"
                ></img>
                <span className="price">$5,000</span>
                <div className="nameTour">
                  <h4>French Autumn</h4>
                </div>
                <div className="cityTour">City Tours, Urban</div>
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <span className="reviews"> 4 reviews</span>
                  <div className="time">
                    <i className="fa-regular fa-clock"></i> 5 days
                  </div>
                </div>
              </div>

              <div className="col-3 PackageTour">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                  alt="Myphoto"
                ></img>
                <span className="price">$6,000</span>
                <div className="nameTour">
                  <h4>Grand Switzerland</h4>
                </div>
                <div className="cityTour">Shopping, Mountain, Snow & Ice</div>
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <span className="reviews"> 4 reviews</span>
                  <div className="time">
                    <i className="fa-regular fa-clock"></i> 6 days
                  </div>
                </div>
              </div>

              <div className="col-3 PackageTour">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                  alt="Myphoto"
                ></img>
                <span className="sale">Sale</span>
                <span className="price">
                  <span className="price-origin">$3,000</span>$2,500
                </span>
                <div className="nameTour">
                  <h4>Discover Japan</h4>
                </div>
                <div className="cityTour">City Tours, Iconic</div>
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <span className="reviews"> 4 reviews</span>
                  <div className="time">
                    <i className="fa-regular fa-clock"></i> 5 days
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BestValueTrips;
