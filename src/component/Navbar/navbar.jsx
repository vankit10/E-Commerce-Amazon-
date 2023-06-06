import React from "react";
import './navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from 'react-bootstrap/Navbar';
import { InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faMagnifyingGlass,faCaretDown,faCartArrowDown,faBars } from '@fortawesome/free-solid-svg-icons'
import logo from "./amazon_icon.jpg";
import { useNavigate } from "react-router-dom";


const Nav_bar=()=>{
  let navigate=useNavigate();
  function signIn_handler(){
    navigate("/signin")
  }
  function PrimeHandler(){
    navigate("/prime")
  }
  function cartHandler(){
    navigate("/cart")
  }
    return(
      <Navbar className="newone" bg="light" expand="lg">
      <Container fluid className="newone">
        <Navbar.Brand href="#">
          <img className="imglogo" src={logo}></img>
          <a href="" className="location1">
            <span className="head1">Hello</span>
            <br />
            <span>
              <FontAwesomeIcon className="icon2" icon={faLocationDot} />
            </span>
            <span className="tag1">Select your address</span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div className="d-flex">
            <InputGroup className="mb-3">
              <Dropdown className="dropdown1">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  <span className="all">All</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Form.Control
                type="search"
                placeholder="Search amazon.in"
                className="me-0"
                aria-label="Search"
              />
              <Button variant="warning">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </div>
        </Navbar.Collapse>
        <a href="#" className="dropbox1">
          <span className="drop1">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg=="
              className="imgindia"
            ></img>
          </span>
          <span className="drop1">
            <h4 className="indiahead">EN</h4>
          </span>
          <span className="drop1">
            <FontAwesomeIcon className="toggle1" icon={faCaretDown} />
          </span>
        </a>
        <a href="" className="dropbox2" onClick={signIn_handler}>
          <span className="drop2" >Hello, sign in</span>
          <br />
          <span className="drop3">
            <h4 className="Account">Account & Lists</h4>
          </span>
          <span className="drop1">
            <FontAwesomeIcon className="toggle2" icon={faCaretDown} />
          </span>
        </a>
        <a href="#" className="dropbox3">
          <span className="drop7">Returns</span>
          <br />
          <span className="drop5">
            <h4 className="Account">& Orders</h4>
          </span>
        </a>
        <a href="#" className="dropbox4" onClick={cartHandler}>
          <span className="drop6">
            <FontAwesomeIcon className="cartlogo" icon={faCartArrowDown} />
          </span>
          <span className="drop8">
            <h4 className="Account">Cart</h4>
          </span>
        </a>
      </Container>
      <div className="navbar1">
      <a href="#" className="first1">
        <FontAwesomeIcon className="homeburger" icon={faBars} />
        <h4 className="All">All</h4>
      </a>
      <a href="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav" className="first2">
        <p className="AmazonminiTV">Amazon miniTV</p>
      </a>
      <a href="#" className="first3">
        <p className="sell">sell</p>
      </a>
      <a href="#" className="first4">
        <p className="BestSellers">Best Sellers</p>
      </a>
      <a href="#" className="first5">
        <p className="Mobiles">Mobiles</p>
      </a>
      <a href="#" className="first6">
        <p className="TodayDeals">Today's Deals</p>
      </a>
      <a href="#" className="first7">
        <p className="CustomerService">Customer Service</p>
      </a>
      <a href="#" className="first8">
        <p className="Electronics">Electronics</p>
      </a>
      <a href="#" className="first9">
        <p className="Prime " onClick={PrimeHandler}>Prime</p>
        <FontAwesomeIcon className="primetoggle" icon={faCaretDown} />
      </a>
      <a href="#" className="first10">
        <p className="NewRelease">New Release</p>
      </a>
      <a href="#" className="first11">
        <p className="NewRelease">
          New Launches from Mobiles,Electronics & more | Shop now
        </p>
      </a>
    </div>
    </Navbar>

    );
}
export default Nav_bar