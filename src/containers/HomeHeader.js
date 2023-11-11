import React, { Component } from "react";
import video from "../assets/Spectacular Norway - from the air.mp4";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <>
        <video
          controls
          autoPlay
          muted
          loop
          showinfo
          modestbranding
          width="100%"
        >
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
                Home
                <ul className="Level2_menu">
                  <li>Home 1 - Background Image</li>
                  <li>Home 2 - Youtube Video</li>
                  <li>Home 3 - Google Inspired</li>
                  <li>Home 4 - Travel Site</li>
                </ul>
              </li>
              <li>
                Tours
                <ul className="Level2_menu">
                  <li>
                    Tour Classic Fullwidth
                    <ul className="Level3_menu">
                      <li>2 Columns</li>
                      <li>3 Columns</li>
                      <li>4 Columns</li>
                    </ul>
                  </li>
                  <li>
                    Tour Classic Sidebar
                    <ul className="Level3_menu">
                      <li>Right Sidebar</li>
                      <li>Left Sidebar</li>
                    </ul>
                  </li>
                  <li>
                    Tour Grid Fullwidth
                    <ul className="Level3_menu">
                      <li>2 Columns</li>
                      <li>3 Columns</li>
                      <li>4 Columns</li>
                    </ul>
                  </li>
                  <li>
                    Tour Grid Sidebar
                    <ul className="Level3_menu">
                      <li>Right Sidebar</li>
                      <li>Left Sidebar</li>
                    </ul>
                  </li>
                  <li>
                    Tour List
                    <ul className="Level3_menu">
                      <li>Right Sidebar</li>
                      <li>Left Sidebar</li>
                    </ul>
                  </li>
                  <li>
                    Tour Header Type
                    <ul className="Level3_menu">
                      <li>Featured Image</li>
                      <li>Video</li>
                    </ul>
                  </li>
                  <li>
                    TourCategories
                    <ul className="Level3_menu">
                      <li>Rural</li>
                      <li>Snow & Ice</li>
                      <li>Wildlife</li>
                      <li>Mountain</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Booking
                <ul className="Level2_menu">
                  <li>
                    Online Payment for Booking
                    <ul className="Level3_menu">
                      <li>Variable Tour Pricing</li>
                      <li>Simple Tour Pricing</li>
                    </ul>
                  </li>
                  <li>
                    Custom Booking Form
                    <ul className="Level3_menu">
                      <li>Booking Form + Sub Tour Date</li>
                      <li>Booking Form + Custom Date</li>
                    </ul>
                  </li>
                  <li>
                    Tour Durations
                    <ul className="Level3_menu">
                      <li>Single Day Tour</li>
                      <li>Multiple Days Tour</li>
                    </ul>
                  </li>
                  <li>Custom Booking URL for Affiliate Tour</li>
                  <li>Custom Booking using custom HTML & Shortcode</li>
                  <li>
                    Header Options
                    <ul className="Level3_menu">
                      <li>Standard Background Header</li>
                      <li>Video Background Header</li>
                    </ul>
                  </li>
                  <li>
                    Layout Options
                    <ul className="Level3_menu">
                      <li>With Sidebar</li>
                      <li>Fullwidth</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Destinations
                <ul className="Level2_menu">
                  <li>Destination Fullwidth</li>
                  <li>Destination + Video Header</li>
                  <li>Destination Right Sidebar</li>
                  <li>Destination Left Sidebar</li>
                  <li>Single Destination</li>
                  <li>Single Destination + Video</li>
                </ul>
              </li>
              <li>
                Pages
                <ul className="Level2_menu">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>FAQs</li>
                  <li>Gallery</li>
                  <li>Page Fullwidth</li>
                  <li>Page + Video Background Header</li>
                  <li>Page Right Sidebar</li>
                  <li>Page Left Sidebar</li>
                </ul>
              </li>
              <li>
                Blog
                <ul className="Level2_menu">
                  <li>Blog Right Sidebar</li>
                  <li>Blog Left Sidebar</li>
                  <li>Blog Fullwidth</li>
                  <li>Blog Grid Right Sidebar</li>
                  <li>Blog Grid Left Sidebar</li>
                  <li>Blog Grid Fullwidth</li>
                  <li>Blog Full + Grid Right Sidebar</li>
                  <li>Blog Full + Grid Left Sidebar</li>
                  <li>Blog Full + Grid Fullwidth</li>
                </ul>
              </li>
              <li>
                Shortcodes
                <ul className="Level2_menu">
                  <li>Accordion & Toggles</li>
                  <li>Alert Boxes</li>
                  <li>Animated Content</li>
                  <li>Buttons & Social Icons</li>
                  <li>Columns</li>
                  <li>Google Maps</li>
                  <li>Image Frame & Animation</li>
                  <li>Image Teasers</li>
                  <li>Pricing Tables</li>
                  <li>Tabs</li>
                </ul>
              </li>
              <li>
                Shop
                <ul className="Level2_menu">
                  <li>Shop Fullwidth</li>
                  <li>Shop Sidebar</li>
                  <li>Single Product Fullwidth</li>
                  <li>Single Product With Sidebar</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default HomeHeader;
