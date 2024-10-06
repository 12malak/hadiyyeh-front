import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import '../Css/brands.css'; // For custom styling
import { Image } from 'react-bootstrap'; // Import Image component from react-bootstrap
import Brand1 from '../images/ARMAF_Logo.webp';
import Brand2 from '../images/Afnan_Logo.webp';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { IoIosArrowRoundForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Brands = () => {
  const [theme] = useThemeHook();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 992); // Large screens > 992px
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  // Settings for React Slick
  const sliderSettings = {
  
    speed: 300,
    slidesToShow: 2, // Adjust for small screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, // Remove dots
    centerMode: false,
    responsive: [
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
    ],
  };
  // Array of brand data
  const brandsData = [
    { id: 1, name: 'Brand 1', image: Brand1, link: 'https://brand1.com' },
    { id: 2, name: 'Brand 2', image: Brand2, link: 'https://brand2.com' },
    { id: 3, name: 'Brand 3', image: Brand1, link: 'https://brand3.com' },
    { id: 4, name: 'Brand 4', image: Brand2, link: 'https://brand4.com' },
    { id: 5, name: 'Brand 5', image: Brand1, link: 'https://brand5.com' },
    { id: 6, name: 'Brand 6', image: Brand1, link: 'https://brand6.com' },
    { id: 7, name: 'Brand 1', image: Brand1, link: 'https://brand1.com' },
    { id: 8, name: 'Brand 2', image: Brand2, link: 'https://brand2.com' },
    { id: 9, name: 'Brand 3', image: Brand1, link: 'https://brand3.com' },
    { id: 10, name: 'Brand 4', image: Brand2, link: 'https://brand4.com' },
    { id: 11, name: 'Brand 5', image: Brand1, link: 'https://brand5.com' },
    { id: 12, name: 'Brand 6', image: Brand1, link: 'https://brand6.com' }
  ];

  
  return (
    <div className={theme ? 'bg-light-black text-light container-Brands' : 'bg-light text-black container-Brands'}>
      <h3 className={theme ? 'text-light Title-Brands m-5' : 'text-black Title-Brands m-5'}>
        BRANDS YOU LOVE!
      </h3>

      {/* Render different layouts based on screen size */}
      {isLargeScreen ? (
        <div className="row m-4">
          {brandsData.map((brand) => (
            <div key={brand.id} className="col-6 col-sm-4 col-md-2 text-center brand-image-container ">
              <Image src={brand.image} alt={brand.name} className="brand-image img-fluid" />
              <a href={brand.link} target="_blank" className={theme ? 'm-3 link-Brands' : 'text-black m-3 link-Brands'} rel="noopener noreferrer">
                {brand.name} <IoIosArrowRoundForward size="1.5rem" />
              </a>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {brandsData.map((brand) => (
            <div key={brand.id} className="text-center brand-image-container ">
              <Image src={brand.image} alt={brand.name} className="brand-image img-fluid p-1" />
              <a href={brand.link} target="_blank" className={theme ? 'm-3 link-Brands' : 'text-black m-3 link-Brands'} rel="noopener noreferrer">
                {brand.name} <IoIosArrowRoundForward size="1.5rem" />
              </a>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Brands;
