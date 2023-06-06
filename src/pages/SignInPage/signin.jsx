import React from 'react'
import AmazonIcon from './Amazonicon.jpg'
import { Button, Dropdown } from 'react-bootstrap'
import './signin.css'
import { useNavigate } from "react-router-dom";

const Signin = () => {

  let navigate=useNavigate();

  function create_handler(){
    navigate("/create-amazon")
  }
  return (
    <div className='mainScreen'>
        <div className='divv1'>
        <img src={AmazonIcon} className='amazonLogo' alt='not found'></img>
        <div className="signindiv">
            <h3 className='signin_head1'>Sign In</h3>
            <h5 className='head2'>E-Mail or mobile phone number</h5>
            <input type='text'className='email' placeholder='Enter username'/>
            <h5 className='head2'>Password</h5>
            <input type='password'className='password' placeholder='Enter Password'/>
            <p className='para'>By continuing, you agree to Amazon's <span>Conditions of Use </span>and <span>Privacy Notice.</span></p>
            <Dropdown className="dropdownn1">
                <Dropdown.Toggle variant="primary" id="dropdown1-basic">
                  <span className="needhelp">Need Help !</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className='drpdown'>
                  <Dropdown.Item href="#/action-1">Forgot Password ?</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Other issues with Sign-in</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button className='button_signin'>Sign in</Button>
              </div>
             
              <div className='divv3'></div>
              <h4 className='head3'>New to Amazon ?</h4>
              <div className='divv4'></div>
                
                <button className='create' onClick={create_handler}>Create your Amazon Account</button>
             
       
        </div>
        <p className='footer'><a href='#' className='anchor1'>Conditions of use</a>
        <a href='#'className='anchor2'>Privacy Notice</a>
        <a href='#' className='anchor3'>Help</a>      
        </p>
        <p className='footer2'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
    </div>
  )
}

export default Signin
