
import React from 'react';
import './home.css';
import Navbar from '../../component/Navbar/navbar';
import Carousels from '../../component/Carousel/carousel';
import { Figure } from 'react-bootstrap';
import {Api} from './Api'
import { Footer } from '../Footer/footer';

import { useNavigate } from "react-router-dom";

  
  
const Home=()=> {

  let navigate=useNavigate();


function signIn_handler(){
    navigate("/signin")
  }
function create_handler(){
    navigate("/create-amazon")
  }

  return (
    <div className='main-screen'>
      <Navbar/>
      <Carousels/>    
      <div className="main-ctn">


        <div className="div1">


          <div className="i_div1">
          <h3 className='i_div1_head'>Up to 70 % off | Clearance store </h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1_1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"/>
              </a>
              </Figure>
              <button className='SeeMore'>See More >></button>
          </div>

          <div className="i_div2">

          <h3 className='i_div1_head'>Bluetooth calling smartwatch starts at Rs 1,999 </h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image2_1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"/>
              </a>
              </Figure>
              <button className='SeeMore'>See More >></button>
          </div>

          <div className="i_div3">
          
          <h3 className='i_div3_head'>Starting Rs.79 | Amazon Brands & more </h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen_186x116_in-en._SY116_CB612501062_.jpg"/>
              <Figure.Caption className='caption1'>Choppers & more</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/home_186._SY116_CB592083129_.jpg"/>
              <Figure.Caption className='caption2'>String Lights & more</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/kitchen186._SY116_CB592083129_.jpg"/>
              <Figure.Caption className='caption3'>Kitchen Storage </Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_186x116_in-en._SY116_CB612501080_.jpg"/>
              <Figure.Caption className='caption4'>Wall Stickers </Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
          </div>
          
          <div className="i_div4">
          
            <div className="i_div4_div1">
          
              <h3 className='i_div4_div1_head'>Sign in for Your Best Experiences</h3>
              <button className='sign_in_btn' onClick={signIn_handler}>Sign in Securely</button>
            </div>
            <div className="i_div4_div2">
              <a href='#'><img  className='i_div4_img'src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/a4bb527c-5db6-433a-a440-64b1b7b93877.jpg'></img></a>
            </div>
          </div>
        </div>


        <div className="div2">

        <div className="i_div_2_1">

        <h3 className='i_div_2_1_head'>Revamp your Home in style</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"/>
              <Figure.Caption className='caption1'>Bedsheet & curtains</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg"/>
              <Figure.Caption className='caption2'>Home decoration</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg"/>
              <Figure.Caption className='caption3'>Home Storage </Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"/>
              <Figure.Caption className='caption4'>lighting solutions </Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
        </div>

          <div className="i_div_2_2">

          <h3 className='i_div_2_2_head'>Home Appliances | up to 55% off </h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"/>
              <Figure.Caption className='caption1'>Air Conditioners</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"/>
              <Figure.Caption className='caption2'>Refrigerators</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"/>
              <Figure.Caption className='caption3'>Microwaves</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"/>
              <Figure.Caption className='caption4'>Washing Machines </Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
          </div>

          <div className="i_div_2_3">

          <h3 className='i_div_2_3_head'>Up to 50% off | Baby Products & Toys | Amazon Brands</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/PC_QC_diaper_186x116._SY116_CB620365328_.jpg"/>
              <Figure.Caption className='caption1'>Diapers & more</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/PC_QC_Teddy_186x116._SY116_CB620365328_.jpg"/>
              <Figure.Caption className='caption2'>Soft toys</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/PC_QC_indoor_game_186x116._SY116_CB620365328_.jpg"/>
              <Figure.Caption className='caption3'>Indoor games</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/PC_QC_rideon_372X232._SY116_CB620365328_.jpg"/>
              <Figure.Caption className='caption4'>Outdoor & more</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
          </div>


          <div className="i_div_2_4">

          <h3 className='i_div_2_4_head'>Up to 60% off | Styles for Women</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"/>
              <Figure.Caption className='caption1'>Women's Clothing</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"/>
              <Figure.Caption className='caption2'>Footwear+Handbag</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg"/>
              <Figure.Caption className='caption3'>Watches</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"/>
              <Figure.Caption className='caption4'>Fashion Jewellery</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
          </div>
        </div>


        <div className="div3">

        <h3 className='i_div_3_1_head'>Today's Deals</h3>
        <a href='#'>
        <h3 className='i_div_3_1_1_head'>See all Deals</h3>      
        </a>
        {
          Api.map((item,index)=>{
            return(
              <>
              <div className='Api_CTN'>
                <div className='i_api_ctn'>
                
              <img src={item.image}
                className='api_img' alt ='not found'></img></div>
                <div className='api_img_text'>
                <p>{item.title}</p> </div>
                <p className='imgprice'>{item.price}</p>
                <button className='apibutton_buy'>Buy Now</button>
                <button className='apibutton_add'>Add to Cart</button>
              </div>
              </>
            )
          })
        }
        </div>


        <div className="div4">
        <h3 className='i_div_3_1_head'>Today's Deals</h3>
        <a href='#'>
        <h3 className='i_div_3_1_1_head'>See all Deals</h3>    
        </a>
        {
          Api.map((item,index)=>{
            return(
              <>
              <div className='Api_CTN'>
                <div className='i_api_ctn'>
                
              <img src={item.image}
                className='api_img' alt ='not found'></img></div>
                <div className='api_img_text'>
                <p>{item.title}</p> </div>
                <p className='imgprice'>{item.price}</p>
                <button className='apibutton_buy'>Buy Now</button>
                <button className='apibutton_add'>Add to Cart</button>
              </div>
              </>
            )
          })
        }
        </div>


        <div className="div5">

          <div className="i_div_5_1">
          <h3 className='i_div_5_1_head'>Sell on Amazon to crores of customers </h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image2_1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/LR_379X304._SY304_CB595115209_.jpg"/>
              </a>
              </Figure>
              <button className='SeeMore'>Register Now</button>



          </div>

          <div className="i_div_5_2">
          <h3 className='i_div_5_2_head'>Up to 40% off | Daily Essentials</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_2_1x._SY116_CB616376703_.jpg"/>
              <Figure.Caption className='caption1'>Laundry Essentials</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_1_1x._SY116_CB616376703_.jpg"/>
              <Figure.Caption className='caption2'>Household Cleaners</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_4_1x._SY116_CB616376703_.jpg"/>
              <Figure.Caption className='caption3'>Oral Care</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_3_1x._SY116_CB616376703_.jpg"/>
              <Figure.Caption className='caption4'>Air Freshners</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>


          </div>

          <div className="i_div_5_3">
          <h3 className='i_div_5_3_head'>Electronic Devices for Home | office</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"/>
              <Figure.Caption className='caption1'>Smartwatches & fitness</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"/>
              <Figure.Caption className='caption2'>Tablets</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"/>
              <Figure.Caption className='caption3'>Laptops</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"/>
              <Figure.Caption className='caption4'>Monitors</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
          </div>


          <div className="i_div_5_4">
          <h3 className='i_div_5_4_head'>Starting ₹99 | Tools & home improvement</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_1a._SY116_CB610512345_.jpg"/>
              <Figure.Caption className='caption1'>Spin,Wipes & more</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_2b._SY116_CB610512345_.jpg"/>
              <Figure.Caption className='caption2'>Drill Machines,Toolkits</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_3c._SY116_CB610512345_.jpg"/>
              <Figure.Caption className='caption3'>Bathroom Accessories</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116._SY116_CB610509523_.jpg"/>
              <Figure.Caption className='caption4'>Fashion Jewellery</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
          </div>
        </div>


        <div className="div6">
          
        <h3 className='i_div_3_1_head'>Today's Deals</h3>
        <a href='#'>
        <h3 className='i_div_3_1_1_head'>See all Deals</h3>    
        </a>
        {
          Api.map((item,index)=>{
            return(
              <>
              <div className='Api_CTN'>
                <div className='i_api_ctn'>
                
              <img src={item.image}
                className='api_img' alt ='not found'></img></div>
                <div className='api_img_text'>
                <p>{item.title}</p> </div>
                <p className='imgprice'>{item.price}</p>
                <button className='apibutton_buy'>Buy Now</button>
                <button className='apibutton_add'>Add to Cart</button>
              </div>
              </>
            )
          })
        }
        </div>

        <div className="div7">
        <h3 className='i_div_3_1_head'>Today's Deals</h3>
        <a href='#'>
        <h3 className='i_div_3_1_1_head'>See all Deals</h3>    
        </a>
        {
          Api.map((item,index)=>{
            return(
              <>
              <div className='Api_CTN'>
                <div className='i_api_ctn'>
                
              <img src={item.image}
                className='api_img' alt ='not found'></img></div>
                <div className='api_img_text'>
                <p>{item.title}</p> </div>
                <p className='imgprice'>{item.price}</p>
                <button className='apibutton_buy'>Buy Now</button>
                <button className='apibutton_add'>Add to Cart</button>
              </div>
              </>
            )
          })
        }
        </div>
       

        <div className="div8">

        <h3 className='i_div_3_1_head'>Today's Deals</h3>
        <a href='#'>
        <h3 className='i_div_3_1_1_head'>See all Deals</h3>   
        </a>
        {
          Api.map((item,index)=>{
            return(
              <>
              <div className='Api_CTN'>
                <div className='i_api_ctn'>
                
              <img src={item.image}
                className='api_img' alt ='not found'></img></div>
                <div className='api_img_text'>
                <p>{item.title}</p> </div>
                <p className='imgprice'>{item.price}</p>
                <button className='apibutton_buy'>Buy Now</button>
                <button className='apibutton_add'>Add to Cart</button>
              </div>
              </>
            )
          })
        }
        </div>

        <div className="div9">

        <div className="i_div_9_1">
        <h3 className='i_div_9_1_head'>Summer appliances from local stores</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_2x_qwerfgp._SY116_CB592066874_.jpg"/>
              <Figure.Caption className='caption1'>Air Conditioners</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_2x_qwerfgf._SY116_CB592066874_.jpg"/>
              <Figure.Caption className='caption2'>Refrigerators</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_2x_qwerfgk._SY116_CB592066874_.jpg"/>
              <Figure.Caption className='caption3'>Microwaves</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_2x_qwerfgv._SY116_CB592066874_.jpg"/>
              <Figure.Caption className='caption4'>Washing machines</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
       
          </div>

          <div className="i_div_9_2">
          <h3 className='i_div_9_2_head'>Birthday store</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_1QC2_1x._SY116_CB662999955_.jpg"/>
              <Figure.Caption className='caption1'>Gift for Men</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_2QC2_1x._SY116_CB662999955_.jpg"/>
              <Figure.Caption className='caption2'>Gift for Women</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_1x._SY116_CB662999955_.jpg"/>
              <Figure.Caption className='caption3'>gift for Boys</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_4QC2_1x._SY116_CB662999955_.jpg"/>
              <Figure.Caption className='caption4'>Gift for girls</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>



     
          </div>

          <div className="i_div_9_3">
          <h3 className='i_div_9_3_head'>Relive Your First Love only on miniTV </h3>
            <Figure><a href='https://www.amazon.in/minitv/tp/5cf7a5b5-51f1-4bf9-a13c-39502bb162bf?dplnk=Y&mtv_pt=gateway&refMarker=avod_in_desktop_btf_cc_GuturGu&pf_rd_r=MC1DHQKMDZFQAXE6FPZ7&pf_rd_p=a98c5705-e417-404c-b202-346415fff95f&pd_rd_r=0d8c8d7d-7721-48ab-97a2-656c0088281f&pd_rd_w=jf92U&pd_rd_wg=PrLGD&ref_=pd_gw_unk'>
              <img alt="not found" className='image2_1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/DeskCC-GuturGu379x304_V4._SY304_CB591872322_.jpg"/>
              </a>
              </Figure>
              <button className='SeeMore1'>Watch for free| MINI TV </button>
          </div>


          <div className="i_div_9_4">
          <h3 className='i_div_9_4_head'>Starting ₹99 | Tools & home improvement</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_1a._SY116_CB610512345_.jpg"/>
              <Figure.Caption className='caption1'>Spin,Wipes & more</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_2b._SY116_CB610512345_.jpg"/>
              <Figure.Caption className='caption2'>Drill Machines,Toolkits</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_3c._SY116_CB610512345_.jpg"/>
              <Figure.Caption className='caption3'>Bathroom Accessories</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116._SY116_CB610509523_.jpg"/>
              <Figure.Caption className='caption4'>Fashion Jewellery</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
         
          </div>
        
        </div>
        <div className="div10">
        <h3 className='i_div_3_1_head'>Today's Deals</h3>
        <a href='#'>
        <h3 className='i_div_3_1_1_head'>See all Deals</h3>    
        </a>
        {
          Api.map((item,index)=>{
            return(
              <>
              <div className='Api_CTN'>
                <div className='i_api_ctn'>
                
              <img src={item.image}
                className='api_img' alt ='not found'></img></div>
                <div className='api_img_text'>
                <p>{item.title}</p> </div>
                <p className='imgprice'>{item.price}</p>
                <button className='apibutton_buy'>Buy Now</button>
                <button className='apibutton_add'>Add to Cart</button>
              </div>
              </>
            )
          })
        }
        </div>

        <div className='div11'>  
        <h3 className='i_div_3_1_head'>Today's Deals</h3>
        <a href='#'>
        <h3 className='i_div_3_1_1_head'>See all Deals</h3>    
        </a>
        {
          Api.map((item,index)=>{
            return(
              <>
              <div className='Api_CTN'>
                <div className='i_api_ctn'>
                
              <img src={item.image}
                className='api_img' alt ='not found'></img></div>
                <div className='api_img_text'>
                <p>{item.title}</p> </div>
                <p className='imgprice'>{item.price}</p>
                <button className='apibutton_buy'>Buy Now</button>
                <button className='apibutton_add'>Add to Cart</button>
              </div>
              </>
            )
          })
        }
        </div>
        <div className='div12'>  
        <div className="i_div_12_1">
        <h3 className='i_div_12_1_head'>Up to 40% off | Daily essentials</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_04_1x._SY116_CB616377481_.jpg"/>
              <Figure.Caption className='caption1'>Health & Household</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_01_1x._SY116_CB616377481_.jpg"/>
              <Figure.Caption className='caption2'>Grocery & Essentials</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_03_1x._SY116_CB616377481_.jpg"/>
              <Figure.Caption className='caption3'>Baby Products</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_02_1x._SY116_CB616377481_.jpg"/>
              <Figure.Caption className='caption4'>Pet Supplies</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See all offers</button>
       
          </div>

          <div className="i_div_12_2">
          <h3 className='i_div_12_2_head'>Up to 40% off | Breakfast special</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/GW_BTF/Desktop-QC_1_1x._SY116_CB616420261_.jpg"/>
              <Figure.Caption className='caption1'>Tea & Coffee</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/GW_BTF/Desktop-QC_revised_1x._SY116_CB616418452_.jpg"/>
              <Figure.Caption className='caption2'>Oats & muesli</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/GW_BTF/Desktop-QC_3_1x._SY116_CB616420261_.jpg"/>
              <Figure.Caption className='caption3'>Honey & spreads</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/GW_BTF/Desktop-QC_4_1x._SY116_CB616420261_.jpg"/>
              <Figure.Caption className='caption4'>Pasta & Noodles</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See all offers</button>    
          </div>

          <div className="i_div_12_3">
          <h3 className='i_div_12_3_head'>One stop shop for all your wedding shopping</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/For_her-1_1x._SY116_CB653484282_.jpg"/>
              <Figure.Caption className='caption1'>Shop for her</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/For_him-1_1x._SY116_CB653484282_.jpg"/>
              <Figure.Caption className='caption2'>Shop for him</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/Pooja_essentials-1_1x._SY116_CB653484282_.jpg"/>
              <Figure.Caption className='caption3'>Pooja Essentials</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/Explore_more-1_1x._SY116_CB653484282_.jpg"/>
              <Figure.Caption className='caption4'>Explore the Store</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>

          </div>


          <div className="i_div_12_4">
          <h3 className='i_div_12_4_head'>Essentials for Expecting Mothers</h3>
            <Figure><a href='action#'>
              <img alt="not found" className='image1'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Pregnancy_Supplements._SY116_CB667651395_.jpg"/>
              <Figure.Caption className='caption1'>Pregrancy supplements</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image2'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_Sleep__Loungewear._SY116_CB667651395_.jpg"/>
              <Figure.Caption className='caption2'>Maternity Sleepwear</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image3'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_pillows._SY116_CB667651395_.jpg"/>
              <Figure.Caption className='caption3'>Maternity Pillows</Figure.Caption>
              </a>
              <a href='action#'>
              <img alt="not found" className='image4'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_Skin_care._SY116_CB667651395_.jpg"/>
              <Figure.Caption className='caption4'>Maternity Skincare</Figure.Caption>
              </a>
            </Figure>
            <button className='SeeMore'>See More >></button>
         
          </div>

        </div>
        <div className='div13'>  
        <h3 className='i_div_3_1_head'>Today's Deals</h3>
        <a href='#'>
        <h3 className='i_div_3_1_1_head'>See all Deals</h3>  
        </a>
        {
          Api.map((item,index)=>{
            return(
              <>
              <div className='Api_CTN'>
                <div className='i_api_ctn'>
                
              <img src={item.image}
                className='api_img' alt ='not found'></img></div>
                <div className='api_img_text'>
                <p>{item.title}</p> </div>
                <p className='imgprice'>{item.price}</p>
                <button className='apibutton_buy'>Buy Now</button>
                <button className='apibutton_add'>Add to Cart</button>
              </div>
              </>
            )
          })
        }
        </div>
        <div className="div14">
        <h4 className='div_14_1_head'> See personalised recommendations</h4>
        <button className='div_14_login' onClick={signIn_handler}>Sign in</button>
        <h4 className='div_14_2_head'>New customer ? <a href='#' onClick={create_handler}>Click here</a></h4>
          </div>

          
      </div>
     <Footer/>
      </div>
 
  );
}

export default Home;