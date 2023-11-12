import React, { Component } from "react";
import "./HomeFooter.scss";

class HomeFooter extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col-4 OurAwards">
            <h2>Our Awards</h2>
            <p>
              London is a megalopolis of people, ideas and frenetic energy. The
              capital and largest city of the United Kingdom.
            </p>
            <img
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
              alt="myphoto"
            />
          </div>
          <div className="col-4 ContactInfo">
            <h2>Contact Info</h2>
            <span>
              <i className="fa-solid fa-phone-volume"></i>1-567-124-44227
            </span>
            <br></br>

            <span>
              <i className="fa-solid fa-location-dot"></i>184 Main Street East
              Perl Habour 8007
            </span>
            <br></br>
            <span>
              <i className="fa-regular fa-clock"></i>Mon - Sat 8.00 - 18.00
              Sunday CLOSED
            </span>
            <br></br>
            <div className="socialMedia">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="col-4 RecentTrips">
            <h2>Recent Trips</h2>
            <div className="row">
              <div className="col-4">
                <img
                  src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                  alt="myphoto"
                />
              </div>
              <div className="col-4">
                <img
                  src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                  alt="myphoto"
                />
              </div>
              <div className="col-4">
                <img
                  src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                  alt="myphoto"
                />
              </div>
              <div className="col-4">
                <img
                  src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                  alt="myphoto"
                />
              </div>
              <div className="col-4">
                <img
                  src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                  alt="myphoto"
                />
              </div>
              <div className="col-4">
                <img
                  src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                  alt="myphoto"
                />
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            backgroundColor: "#cccccc",
          }}
        />
        <div className="row">
          <div className="col-6" style={{ color: "rgb(187, 185, 185)" }}>
            &#169; Copyright Grand Tour Theme Demo - Theme by ThemeGoods
          </div>
          <div className="col-6 MenuFooter">
            <span>Home</span>
            <span>Tour</span>
            <span>Blog</span>
            <span>Purchase Theme</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFooter;
