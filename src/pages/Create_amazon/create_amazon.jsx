import React from 'react'
import AmazonIcon from './Amazonicon.jpg'
import { Button, Dropdown } from 'react-bootstrap'
import './create_amazon.css'
import { useNavigate } from "react-router-dom";

const Create_Amazon=()=>{
  let navigate=useNavigate();

  function signIn_handler(){
    navigate("/signin")
  }

  return(
    <div className='mainScreen'>
    <div className='divv1'>
    <img src={AmazonIcon} className='amazonLogo' alt='not found'></img>
    <div className="creatediv">
        <h3 className='create_head1'>Create New Account</h3>
        <h5 className='head2'>Your name</h5>
        <input type='text'className='name' placeholder='First and Last name'/>
        <h5 className='head_mobile'>Mobile No</h5>
        <input type='text'className='mobile' placeholder='Mobile No'/>
        <h5 className='head4'>E-mail</h5>
        <input type='text'className='email' placeholder='E-mail(optional)'/>
        <h5 className='head5'>Password</h5>
        <input type='password'className='password' placeholder='password'/>
        <p className='para'>password must be at least 6 characters</p>
        <p className='para1'>By enrolling your mobile phone number,
        you consent to receive automated security notifications via text message from Amazon.
        Message and data rates may apply. 
        </p>
          <Button className='button_create'>Create Account</Button>
          <h4 className='head6'>Already have an account ? <span><a onClick={signIn_handler}>Sign in</a> </span></h4>
          <p className='para2'>By creating an account or loggin in,you agree to Amazon's 
          <span>Conditions of Use </span>and <span>Privacy policy.</span></p>
            
           
         
   
    </div>
    </div>
    <p className='footer'><a href='#' className='anchor1'>Conditions of use</a>
    <a href='#'className='anchor2'>Privacy Notice</a>
    <a href='#' className='anchor3'>Help</a>      
    </p>
    <p className='footer2'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
</div>
  )
}
export default Create_Amazon

