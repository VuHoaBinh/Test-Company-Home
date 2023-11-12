import React, { Component } from "react";
import video from "../assets/Spectacular Norway - from the air.mp4";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <>
        <video autoPlay muted loop width="100%">
          <source src={video} type="video/mp4" />
        </video>
        <div className="header">
          <div className="logo">
            <img
              style={{
                width: "92px",
                aspectRatio: "auto 92 / 22",
                height: "22px",
              }}
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
              alt="myphoto"
            />
          </div>
          <div className="menuHeader">
            <ul className="Level1_menu">
              <li>
                <a href="#">
                  Home <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="Level2_menu">
                  <li>
                    <a href="#">Home 1 - Background Image</a>
                  </li>
                  <li>
                    <a href="#">Home 2 - Youtube Video</a>
                  </li>
                  <li>
                    <a href="#">Home 3 - Google Inspired</a>
                  </li>
                  <li>
                    <a href="#">Home 4 - Travel Site</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Tours <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="Level2_menu">
                  <li>
                    <a href="#">
                      Tour classNameic Fullwidth{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">2 Columns</a>
                      </li>
                      <li>
                        <a href="#">3 Columns</a>
                      </li>
                      <li>
                        <a href="#">4 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Tour classNameic Sidebar{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Left Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Tour Grid Fullwidth{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">2 Columns</a>
                      </li>
                      <li>
                        <a href="#">3 Columns</a>
                      </li>
                      <li>
                        <a href="#">4 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Tour Grid Sidebar{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Left Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Tour List{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Left Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Tour Header Type{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">Featured Image</a>
                      </li>
                      <li>
                        <a href="#">Video</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      TourCategories{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">Rural</a>
                      </li>
                      <li>
                        <a href="#">Snow & Ice</a>
                      </li>
                      <li>
                        <a href="#">Wildlife</a>
                      </li>
                      <li>
                        <a href="#">Mountain</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Booking <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="Level2_menu">
                  <li>
                    <a href="#">
                      Online Payment for Booking{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">Variable Tour Pricing</a>
                      </li>
                      <li>
                        <a href="#">Simple Tour Pricing</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Custom Booking Form{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">Booking Form + Sub Tour Date</a>
                      </li>
                      <li>
                        <a href="#">Form + Custom Date</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Tour Durations{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">Single Day Tour</a>
                      </li>
                      <li>
                        <a href="#">Multiple Days Tour</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Custom Booking URL for Affiliate Tour</a>
                  </li>
                  <li>
                    <a href="#">Custom Booking using custom HTML & Shortcode</a>
                  </li>
                  <li>
                    <a href="#">
                      Header Options{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">Standard Background Header</a>
                      </li>
                      <li>
                        <a href="#">Video Background Header</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Layout Options{" "}
                      <i className="fa-solid fa-angle-right RightCorner "></i>
                    </a>
                    <ul className="Level3_menu">
                      <li>
                        <a href="#">With Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Fullwidth</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Destinations <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="Level2_menu">
                  <li>
                    <a href="#">Destination Fullwidth</a>
                  </li>
                  <li>
                    <a href="#">Destination + Video Header</a>
                  </li>
                  <li>
                    <a href="#">Destination Right Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Destination Left Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Single Destination</a>
                  </li>
                  <li>
                    <a href="#">Single Destination + Video</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Pages <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="Level2_menu">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Page Fullwidth</a>
                  </li>
                  <li>
                    <a href="#">Page + Video Background Header</a>
                  </li>
                  <li>
                    <a href="#">Page Right Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Page Left Sidebar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Blog <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="Level2_menu">
                  <li>
                    <a href="#">Blog Right Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Blog Left Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Blog Fullwidth</a>
                  </li>
                  <li>
                    <a href="#">Blog Grid Right Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Blog Grid Left Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Blog Grid Fullwidth</a>
                  </li>
                  <li>
                    <a href="#">Blog Full + Grid Right Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Blog Full + Grid Left Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Blog Full + Grid Fullwidth</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Shortcodes <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="Level2_menu">
                  <li>
                    <a href="#">Accordion & Toggles</a>
                  </li>
                  <li>
                    <a href="#">Alert Boxes</a>
                  </li>
                  <li>
                    <a href="#">Animated Content</a>
                  </li>
                  <li>
                    <a href="#">Buttons & Social Icons</a>
                  </li>
                  <li>
                    <a href="#">Columns</a>
                  </li>
                  <li>
                    <a href="#">Google Maps</a>
                  </li>
                  <li>
                    <a href="#">Image Frame & Animation</a>
                  </li>
                  <li>
                    <a href="#">Image Teasers</a>
                  </li>
                  <li>
                    <a href="#">Pricing Tables</a>
                  </li>
                  <li>
                    <a href="#">Tabs</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Shop <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="Level2_menu">
                  <li>
                    <a href="#">Shop Fullwidth</a>
                  </li>
                  <li>
                    <a href="#">Shop Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Single Product Fullwidth</a>
                  </li>
                  <li>
                    <a href="#">Single Product With Sidebar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i
                    className="fa-solid fa-bars barMenu"
                    onClick={(event) => this.onClickMenu(event)}
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-cart-shopping barMenu"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default HomeHeader;
