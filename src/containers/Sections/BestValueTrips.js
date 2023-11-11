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
            <div class="row">
              <div class="col-4 PackageTour">
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
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <span className="reviews"> 4 reviews</span>
                  <div className="time">
                    <i class="fa-regular fa-clock"></i>5 days
                  </div>
                </div>
              </div>

              <div class="col-4">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                  alt="Myphoto"
                ></img>
                <p>Seoul</p>
              </div>

              <div class="col-4">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                  alt="Myphoto"
                ></img>
                <p>Paris</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BestValueTrips;
