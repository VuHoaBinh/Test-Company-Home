import React, { Component } from "react";
import "./ArticlesTips.scss";
class ArticlesTips extends Component {
  render() {
    return (
      <>
        <div className="ArticlesTips section-share">
          <div className="title">
            <h2 style={{ marginTop: "50px" }}>Articles & Tips</h2>
            <h5>Explore some of the best tips from around the world</h5>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-3 PackageTip">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                  alt="Myphoto"
                ></img>
                <div className="info">
                  <h5>December 10, 2016</h5>
                  <h3>Memorial Day to Someone Told Me to Travel</h3>
                  <p>
                    Meh synth Schlitz, tempor duis single-origin coffee ea next
                    level ethnic fingerstache...
                  </p>
                  <div class="readMore">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>

              <div className="col-3 PackageTip">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
                  alt="Myphoto"
                ></img>
                <div className="info">
                  <h5>December 10, 2016</h5>
                  <h3>7 Tips For Nomads On A Budget Trips</h3>
                  <p>
                    Meh synth Schlitz, tempor duis single-origin coffee ea next
                    level ethnic fingerstache...
                  </p>
                  <div className="readMore">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>

              <div className="col-3 PackageTip">
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
                  alt="Myphoto"
                ></img>
                <div className="info">
                  <h5>December 10, 2016</h5>
                  <h3>Taking A Travel Blog Victory Lap</h3>
                  <p>
                    Meh synth Schlitz, tempor duis single-origin coffee ea next
                    level ethnic fingerstache...
                  </p>
                  <div class="readMore">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ArticlesTips;
