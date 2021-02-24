import React, { Component } from "react";
import "./Footer.css";
import youtube from "./Assets/youtube.svg";
import linkedin from "./Assets/linkedin.svg";
import insta from "./Assets/insta.svg";
import facebook from "./Assets/facebook.svg";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row  ">
            <div className="col mt-5">
              <a href="">Feedback</a>
            </div>
            <div className="col mt-5">
              <a href="">Career</a>
            </div>
            <div className="col mt-5">
              <a href="">Teams</a>
            </div>
            <div className="col mt-5">
              <a href="">FAQ</a>
            </div>
            <div className="col mt-5">
              <a href="">Privacy</a>
            </div>
            <div className="col mt-5">
              <a href="">Contact Us</a>
            </div>
            <div className="col mt-5">
              <a href="">Sitemap</a>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col ">
              <div className="diff-anchor ">
                <p>Restaurants</p>
                <a href="" className="my-2">
                  Most Selling
                </a>
                <a href="" className="my-2">
                  Taboon
                </a>
                <a href="" className="my-2">
                  Dawar Farah - Mohandiseen
                </a>
                <a href="" className="my-2">
                  Indira
                </a>
                <a href="" className="my-2">
                  Al Aseel El Demashky - Tagammoa 5
                </a>
                <a href="" className="my-2">
                  Lan Yuan - Maadi
                </a>
              </div>
              <a href="">More Restaurants...</a>
            </div>
            <div className="col ">
              <div className="diff-anchor ">
                <p>Popular Cuisines</p>
                <a href="" className="my-2">
                  Italian
                </a>
                <a href="" className="my-2">
                  Mexican
                </a>
                <a href="" className="my-2">
                  Sandwiches
                </a>
                <a href="" className="my-2">
                  Japanese
                </a>
                <a href="" className="my-2">
                  Pizza
                </a>
              </div>
              <a href="">More Cuisines...</a>
            </div>
            <div className="col ">
              <div className="diff-anchor ">
                <p>Popular Areas</p>
                <a href="" className="my-2">
                  Masaken El Rehab
                </a>
                <a href="" className="my-2">
                  Mostashfa AlHommeyat
                </a>
                <a href="" className="my-2">
                  Salah ElDin Street
                </a>
                <a href="" className="my-2">
                  Salah Nessim Street
                </a>
                <a href="" className="my-2">
                  Shabab El Mosalas
                </a>
              </div>
              <a href="">More Areas...</a>
            </div>
            <div className="col ">
              <p>Follow us on</p>
              <div className="logo-anchors">
                <a href="" className="mx-1">
                  <img src={facebook} alt="" />
                </a>
                <a href="" className="mx-1">
                  <img src={youtube} alt="" />
                </a>
                <a href="" className="mx-1">
                  <img src={insta} alt="" />
                </a>
                <a href="" className="mx-1">
                  <img src={linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col">
              <p>
                For any support or help you can contact us via our Live Chat
              </p>
            </div>
            <div className="col-3">
              <p>©2021 Talabat.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
