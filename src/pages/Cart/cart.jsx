import React from 'react'
import './cart.css'
import { Footer } from '../Footer/footer';
import Navbar from '../../component/Navbar/navbar';

function cart() {
  return (
    <div className='main-screen11'>
        <Navbar/>
     <div className="main-ctn11">
        <div className="cart_1">
            <a href='#'>
                <img src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg'
                alt='not found' className='cart_image'/>
            </a>
            <h3 className='cart_head'>Your Amazon Cart is empty</h3>
            <button className='cart_button_sign_in'>Sign in to your Account</button>
            <button className='cart_button_sign_up'>Sign Up now</button>
        </div>
        
     </div>
     <Footer/>
    </div>
  )
}

export default cart
