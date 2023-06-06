import React from "react";
import './carousel.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousels=()=>{
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return(
        <Carousel activeIndex={index} onSelect={handleSelect} className='Carouse'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
            alt="Second slide"
          />
  
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Haircare-Herofader-PC11._CB592208139_.jpg"
            alt="Third slide"
          />
  
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/HMDApril/3000x1200unrec._CB592361612_.png"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MARCHGTM/IPL2023/1percentCB/Recharge_PC_Hero_3000x1200_1._CB593370740_.jpg"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg"
            alt="First slide"
          />
         
        </Carousel.Item>
       
      </Carousel>
    );
}
export default Carousels;