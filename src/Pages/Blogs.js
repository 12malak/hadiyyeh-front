import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/blogs.css";
import CountUp from "react-countup";
import axios from "axios";
import {Image } from 'react-bootstrap'; // Import necessary components
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import slider1 from '../images/blogs1.webp';
import slider2 from '../images/blogs2.webp';
import { BsStackOverflow } from "react-icons/bs";


const settings = {
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 9000,
        },
      },
    ],
  };

    // Sample Product Data
const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'In the realm of luxury goods, fragrances and watches stand as timeless symbols of sophistication, elegance, and personal style. Beyond their utilitarian functions, these exquisite creations serve as expressions of individuality, capturing the essence of our ever-evolving society in subtle yet profound ways.',
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
      description: 'In the realm of luxury goods, fragrances and watches stand as timeless symbols of sophistication, elegance, and personal style. Beyond their utilitarian functions, these exquisite creations serve as expressions of individuality, capturing the essence of our ever-evolving society in subtle yet profound ways.',
      image: 'https://via.placeholder.com/200',
      price: '$29.99',
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'In the realm of luxury goods, fragrances and watches stand as timeless symbols of sophistication, elegance, and personal style. Beyond their utilitarian functions, these exquisite creations serve as expressions of individuality, capturing the essence of our ever-evolving society in subtle yet profound ways.',
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
      description: 'In the realm of luxury goods, fragrances and watches stand as timeless symbols of sophistication, elegance, and personal style. Beyond their utilitarian functions, these exquisite creations serve as expressions of individuality, capturing the essence of our ever-evolving society in subtle yet profound ways.',
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
      description: 'In the realm of luxury goods, fragrances and watches stand as timeless symbols of sophistication, elegance, and personal style. Beyond their utilitarian functions, these exquisite creations serve as expressions of individuality, capturing the essence of our ever-evolving society in subtle yet profound ways.',
      image: 'https://via.placeholder.com/200',
      price: '$39.99',
    },
    {
      id: 9,
      title: 'Product 9',
      description: 'In the realm of luxury goods, fragrances and watches stand as timeless symbols of sophistication, elegance, and personal style. Beyond their utilitarian functions, these exquisite creations serve as expressions of individuality, capturing the essence of our ever-evolving society in subtle yet profound ways.',
      image: 'https://via.placeholder.com/200',
      price: '$69.99',
    },
    {
      id: 10,
      title: 'Product 10',
      description: 'In the realm of luxury goods, fragrances and watches stand as timeless symbols of sophistication, elegance, and personal style. Beyond their utilitarian functions, these exquisite creations serve as expressions of individuality, capturing the essence of our ever-evolving society in subtle yet profound ways.',
      image: 'https://via.placeholder.com/200',
      price: '$119.99',
    },
  ];
function Blogs() {
    const [theme] = useThemeHook();

    
  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <section className={theme ? 'bg-light-black text-light screen-slider' : 'bg-light text-black screen-slider'} data-aos="fade-up">
      <div className="container text-center mt-5 title-page">
        <h3 className={theme ? 'text-light we_help_you_home m-5' : 'text-black we_help_you_home m-5'}>BLOG POSTS</h3>
        <div className="row mt-5">
          <Slider {...settings} style={{ overflow: "hidden" }} className="slide">
            {products.map((product) => (
              <div className="col-lg-4 col-md-6 col-sm-12 product-blogs mb-5" key={product.id}>
                <div className={`card card_slider_exp pb-3  ${theme ? 'text-light' : 'text-black bg-light'}`}>
                  <Image
                    src={slider1}
                    className="card-img-top img-fluid img_slider_experience"
                    alt="First slide"
                  />
                  {/* Title and price section */}
                  <div className="card-body">
                    <h4 className={theme ? 'text-light card-title title_slider_exp' : 'text-black card-title title_slider_exp'}>
                      {product.title}
                    </h4>
                    <p className={theme ? 'text-light card-text text_slider_exp' : 'text-black card-text text_slider_exp'}>
                      {truncateText(product.description, 190)} {/* Limit description to 100 characters */}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};


export default Blogs