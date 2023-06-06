import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import './footer.css'
import amazonlogo from "./amazonlogo.png";





export function Footer() {
    return (
      <div className="div15">
        <a href="#" className="backtotoplink">
          <div className="div161">
            <p className="backtotoppara">Back to top</p>
          </div>
        </a>
        <div className="div162">
          <div className="div1621">
            <div className="emptydiv"></div>
            <div className="gettoknow">
              <h2 className="footerhead gettoknowheading">Get to Know Us</h2>
              <a href="#" className="footerlink gettoknowsub gettoknow1">
                About Us
              </a>
              <a href="#" className="footerlink gettoknowsub gettoknow2">
                Careers
              </a>
              <a href="#" className="footerlink gettoknowsub gettoknow3">
                Press Releases
              </a>
              <a href="#" className="footerlink gettoknowsub gettoknow4">
                Amazon Science
              </a>
            </div>
            <div className="ConnectwithUs">
              <h2 className="footerhead ConnectwithUsheading">Connect with Us</h2>
              <a href="#" className="footerlink ConnectwithUssub ConnectwithUs1">
                Facebook
              </a>
              <a href="#" className="footerlink ConnectwithUssub ConnectwithUs2">
                Twitter
              </a>
              <a href="#" className="footerlink ConnectwithUssub ConnectwithUs3">
                Instagram
              </a>
            </div>
            <div className="MakeMoneywithUs">
              <h2 className="footerhead MakeMoneywithUsheading">
                Make Money with Us
              </h2>
              <a
                href="#"
                className="footerlink MakeMoneywithUssub MakeMoneywithUs1"
              >
                Sell on Amazon
              </a>
              <a
                href="#"
                className="footerlink MakeMoneywithUssub MakeMoneywithUs2"
              >
                Sell under Amazon Accelerator
              </a>
              <a
                href="#"
                className="footerlink MakeMoneywithUssub MakeMoneywithUs3"
              >
                Protect and Build Your Brand
              </a>
              <a
                href="#"
                className="footerlink MakeMoneywithUssub MakeMoneywithUs4"
              >
                Amazon Global Selling
              </a>
              <a
                href="#"
                className="footerlink MakeMoneywithUssub MakeMoneywithUs5"
              >
                Become an Affiliate
              </a>
              <a
                href="#"
                className="footerlink MakeMoneywithUssub MakeMoneywithUs6"
              >
                Fulfilment by Amazon
              </a>
              <a
                href="#"
                className="footerlink MakeMoneywithUssub MakeMoneywithUs7"
              >
                Advertise Your Products
              </a>
              <a
                href="#"
                className="footerlink MakeMoneywithUssub MakeMoneywithUs8"
              >
                Amazon Pay on Merchants
              </a>
            </div>
            <div className="LetUsHelpYou">
              <h2 className="footerhead LetUsHelpYouheading">Let Us Help You</h2>
              <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou1">
                COVID-19 and Amazon
              </a>
              <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou2">
                Your Account
              </a>
              <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou3">
                Returns Centre
              </a>
              <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou4">
                100% Purchase Protection
              </a>
              <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou5">
                Amazon App Download
              </a>
              <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou6">
                Help
              </a>
            </div>
            <div className="emptydiv"></div>
          </div>
          <div className="div1622">
            <div className="footerimglogo">
              <img src={amazonlogo} className="amazonfooterlogo"></img>
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  <FontAwesomeIcon className="globe" icon={faGlobe} />
                  <span className="english">English</span>
                  <FontAwesomeIcon className="upperarrow" icon={faCaretDown} />
                </Dropdown.Toggle>
  
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="footercitylist">
              <a href="#" className="citylist citylist1">
                Australia
              </a>
              <a href="#" className="citylist citylist12">
                Brazil
              </a>
              <a href="#" className="citylist citylist3">
                Canada
              </a>
              <a href="#" className="citylist citylist4">
                China
              </a>
              <a href="#" className="citylist citylist5">
                France
              </a>
              <a href="#" className="citylist citylist6">
                Germany
              </a>
              <a href="#" className="citylist citylist7">
                Italy
              </a>
              <a href="#" className="citylist citylist8">
                Japan
              </a>
              <a href="#" className="citylist citylist9">
                Mexico
              </a>
              <a href="#" className="citylist citylist10">
                Netherlands
              </a>
              <a href="#" className="citylist citylist11">
                Poland
              </a>
              <a href="#" className="citylist citylist12">
                Singapore
              </a>
              <a href="#" className="citylist citylist13">
                Spain
              </a>
              <a href="#" className="citylist citylist14">
                Turkey
              </a>
              <a href="#" className="citylist citylist15">
                United Arab Emirates
              </a>
            </div>
            <div className="footercoutrylist">
              <a href="#" className="citylist countrylist coutrylist1">
                United Kingdom
              </a>
              <a href="#" className="citylist countrylist coutrylist2">
                United States
              </a>
            </div>
          </div>
        </div>
        <div className="div163">
          <div className="div1631">
            <div className="secondfooter leftfirst">
              <a href="#" className="booklink booklink1">
                <p className="bookhead upbookhead1">AbeBooks</p>
                <p className="lowbookhead upbookhead2">
                  Books, art <br />& collectibles
                </p>
              </a>
              <a href="#" className="booklink booklink2">
                <p className="bottombookhead1">Shopbop</p>
                <p className="lowbookhead bottombookhead2">
                  Designer
                  <br />
                  Fashion Brands
                </p>
              </a>
            </div>
            <div className="secondfooter leftsecond">
              <a href="#" className="booklink booklink1 Abebook">
                <p className="bookhead upbookhead1">AbeBooks</p>
                <p className="lowbookhead upbookhead2">
                  Books, art <br />& collectibles
                </p>
              </a>
              <a href="#" className="booklink booklink2">
                <p className="bottombookhead1">Amazon Web Services</p>
                <p className="lowbookhead bottombookhead2">
                  Scalable Cloud
                  <br />
                  Computing Services
                </p>
              </a>
            </div>
            <div className="secondfooter leftthird">
              <a href="#" className="booklink booklink1 Audible">
                <p className="bookhead upbookhead1">Audible</p>
                <p className="lowbookhead upbookhead2">
                  Download
                  <br />
                  Audio Books
                </p>
              </a>
              <a href="#" className="booklink booklink2">
                <p className="bottombookhead1">Prime Now</p>
                <p className="lowbookhead bottombookhead2">
                  2-Hour Delivery
                  <br />
                  on Everyday Items
                </p>
              </a>
            </div>
            <div className="secondfooter leftfourth">
              <a href="#" className="booklink booklink1 DPReview">
                <p className="bookhead upbookhead1">DPReview</p>
                <p className="lowbookhead upbookhead2">
                  Digital
                  <br />
                  Photography
                </p>
              </a>
              <a href="#" className="booklink booklink2">
                <p className="bottombookhead1">Amazon Prime Music</p>
                <p className="lowbookhead bottombookhead2">
                  100 million songs, ad-free
                  <br />
                  Over 15 million podcast episodes
                </p>
              </a>
            </div>
            <div className="secondfooter leftfivth">
              <a href="#" className="booklink booklink1">
                <p className="bookhead upbookhead1">IMDb</p>
                <p className="lowbookhead upbookhead2">
                  Movies, TV
                  <br />& Celebrities
                </p>
              </a>
            </div>
          </div>
          <div className="div1632">
            <div className="policy">
              <a href="#" className="policylink condition">
                Conditions of Use & Sale
              </a>
              <a href="#" className="policylink privacy">
                Privacy Notice
              </a>
              <a href="#" className="policylink interest">
                Interest-Based Ads
              </a>
            </div>
            <div className="copyright">
              <p className="copyrightcontaint">
                © 1996-2023, Amazon.com, Inc. or its affiliates
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }