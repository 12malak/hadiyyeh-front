import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/cardes.css";
import CountUp from "react-countup";
import axios from "axios";
import {Image } from 'react-bootstrap'; // Import necessary components


import slider3 from '../images/images-removebg-preview.png';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useNavigate } from 'react-router-dom';
const settings = {
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true, // Remove dots
  centerMode: false, // Disable center mode to avoid spacing issues
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};
// Sample Product Data
const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is a great product.',
    image: '../images/blog.jpj',
    price: '$49.99',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Another awesome product.',
    image: 'https://via.placeholder.com/200',
    price: '$59.99',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'You will love this product.',
    image: 'https://via.placeholder.com/200',
    price: '$29.99',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Our latest collection.',
    image: 'https://via.placeholder.com/200',
    price: '$39.99',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'A must-have product.',
    image: 'https://via.placeholder.com/200',
    price: '$89.99',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Another great product.',
    image: 'https://via.placeholder.com/200',
    price: '$79.99',
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'An amazing product.',
    image: 'https://via.placeholder.com/200',
    price: '$99.99',
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'A stylish product.',
    image: 'https://via.placeholder.com/200',
    price: '$39.99',
  },
  {
    id: 9,
    title: 'Product 9',
    description: 'A fantastic product.',
    image: 'https://via.placeholder.com/200',
    price: '$69.99',
  },
  {
    id: 10,
    title: 'Product 10',
    description: 'This is a unique product.',
    image: 'https://via.placeholder.com/200',
    price: '$119.99',
  },
];

function Bags() {
    const [theme] = useThemeHook();
    
    const navigate = useNavigate();
    const handleAllBag = () => {
   
      navigate('/allBag');
  };
    return (
      
       
      <section className={theme? 'bg-light-black text-light margin_section full-screen-slider': 'bg-light text-black margin_section full-screen-slider'} data-aos="fade-up">
      <div className="container-fluid text-center">
         
          <h3 className={theme? 'text-light we_help_you_home m-5': 'text-black we_help_you_home m-5'}>BAGS & POUCHES</h3>
        
  
          <div className="row mt-5">
          <Slider
    {...settings}
    style={{ overflow: "hidden" }}
    className="slide"
  >
    {products.map((product) => (
      <div className="col-lg-2 col-md-4 col-sm-12 product-card mb-5" key={product.id}>
        
        {/* Wrap image and button in a relative container */}
        <div className="image-container d-flex justify-content-center">
          <Image
            src={slider3}
            className="slider_img_home bags-image"
            alt="First slide"
          />
          {/* Button placed on top of the image, aligned left */}
          <button  className={theme? 'text-light btn-top-left': 'text-black btn-top-left'}>
         Sale
          </button>
        </div>
        
        {/* Title and price section */}
        <h5 className={theme ? 'text-light ' : 'text-black'}>{product.title}</h5>
        <p className={theme ? 'text-light' : 'text-black'}>
          ${product.price} 
          <del className="original-price"> ${product.price}</del>
        </p>
        <div className="d-flex justify-content-center"
    
    >
      <button 
        type="button" 
        className={theme ? 'text-light btn btn-card m-3' : 'text-black btn btn-card m-3'}
       
      >
      ADD TO CART
      </button>
    </div>
    
      </div>
    ))}
  </Slider>
  
          </div>
          <button   onClick={handleAllBag} type="button"  className={theme? 'text-light btn btn-card m-5': 'text-black btn btn-card m-5'}>
          View all
            </button>
        </div>
      </section>
  
      
  
        
  
    );
  };

export default Bags