import React, { useState } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import slider1 from '../images/gift.webp'; // Fallback image
import { IoFilterCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import slider2 from '../images/50Image.webp';
import slider3 from '../images/25Image.webp';
import slider4 from '../images/100Image.webp';
import imageCard from '../images/Girl-removebg-preview.png';
import imageCard2 from '../images/WATCHES7-removebg-preview.png';
import imageCard3 from '../images/girl2-removebg-preview.png';
import imageCard4 from '../images/images-removebg-preview.png';

import { useNavigate } from 'react-router-dom';
import { LuShare2 } from "react-icons/lu";
const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is a great product. This is a great product.',
      image: slider1,
      price: '$49.99',
    },
  ];
  // Sample Product Data
const products2 = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is a great product This is a great product.', 
    image: imageCard4,
    price: '$49.99',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Another awesome product This is a great product.',
    image: imageCard,
    price: '$59.99',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'You will love this product This is a great product.',
    image:imageCard2,
    price: '$29.99',
  },
  {
    id: 4,
    title: 'Product 4',
    description: ' Our latest collection Our latest collection Our latest collection.',
    image:imageCard3,
    price: '$39.99',
  },
 
  
];
const GiftDetails = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isGift, setIsGift] = useState(false);
  const [theme] = useThemeHook();


  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [currentImage, setCurrentImage] = useState(selectedProduct?.image || slider1);

  
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };
  const handleButtonClick = (value, image) => {
    setActiveButton(value);
    setCurrentImage(image); // Change image based on button click
  };

  const handleGiftChange = () => {
    setIsGift(!isGift); // Toggle gift form visibility
  };
 

  // Handle quantity increase and decrease
  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };



  return (
    <section
      className={
        theme
          ? 'bg-light-black text-light margin_section full-screen-slider m-5'
          : 'bg-light text-black margin_section full-screen-slider m-5'
      }
     
    >
     
    <Row 
      className={
        theme
          ? 'm-5 bg-light-black text-light'
          : 'm-5 bg-light text-black '
      }
     
    >
      <Col xs={12} md={6}>
        <div className="image-container">
          <Image
            src={currentImage} // Use currentImage state to change the image
            className="img-fluid "
            alt="Product Image"
            style={{height:"20rem"}}
          />
        </div>
      </Col>
      <Col xs={12} md={6}>
        <h2>HADIYYEH GIFT CARD VOUCHER</h2>

        <div className={`${theme ? 'text-dark-primary' : ''}`}>Price: {selectedProduct?.price}</div>
        <div className={`${theme ? 'text-dark-primary' : ''}`}>Taxes included.</div>
        <div className={`mt-2 ${theme ? 'text-dark-primary' : ''}`}>Denominations</div>

        <div className="d-flex justify-content-between flex-wrap mt-3">
              <Button
                type="submit"
                onClick={() => handleButtonClick(10, slider1)} // Set active to 10 and change image
                className={`${theme ? 'text-black' : ''} px-4 py-2 mt-1 ${activeButton === 10 ? 'bg-light-primary text-white' : 'bg-dark-primary text-black'}`} 
                style={{ border: 0 }}
              >
                JOD 10.00
              </Button>

              <Button
                type="submit"
                onClick={() => handleButtonClick(25, slider3)} // Set active to 25 and change image
                className={`${theme ? 'text-black' : ''} px-4 py-2 mt-1 ${activeButton === 25 ? 'bg-light-primary text-white' : 'bg-dark-primary text-black'}`} 
                style={{ border: 0 }}
              >
                JOD 25.00
              </Button>
              <Button
                type="submit"
                onClick={() => handleButtonClick(50, slider2)} // Set active to 50 and change image
                className={`${theme ? 'text-black' : ''} px-4 py-2 mt-1 ${activeButton === 50 ? 'bg-light-primary text-white' : 'bg-dark-primary text-black'}`} 
                style={{ border: 0 }}
              >
                JOD 50.00
              </Button>

            

              <Button
                type="submit"
                onClick={() => handleButtonClick(100, slider4)} // Set active to 100 and change image
                className={`${theme ? 'text-black' : ''} px-4 py-2 mt-1 ${activeButton === 100 ? 'bg-light-primary text-white' : 'bg-dark-primary text-black'}`} 
                style={{ border: 0 }}
              >
                JOD 100.00
              </Button>
            </div>

        <div className={`mt-2 ${theme ? 'text-dark-primary' : ''}`}>Quantity</div>
        <div className="d-flex mt-3">
          <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange('decrease')}>
            <FiMinus size="1.4rem" />
          </button>
          <span className="m-2">{quantity}</span> {/* Display current quantity */}
          <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange('increase')}>
            <IoMdAdd size="1.4rem" />
          </button>
        </div>

        {/* Gift Checkbox */}
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckGift"
            checked={isGift}
            onChange={handleGiftChange} // Show/hide gift form
          />
          <label className="form-check-label" htmlFor="flexCheckGift">
            I want to send this as a gift
          </label>
        </div>

        {/* Conditional Rendering of Gift Form */}
        {isGift && (
          <div className="mt-3">
           

            {/* Recipient Email */}
            <div className="form-group mt-3">
              <input
                type="email"
                id="recipientEmail"
                className={theme ? 'form-control' : 'form-control text-dark bg-light'}
                placeholder="Enter recipient's email"
              />
            </div>
               {/* Recipient Name */}
               <div className="form-group mt-3">
              <input
                type="text"
                id="recipientName"
                className={theme ? 'form-control' : 'form-control text-dark bg-light'}
                placeholder="Enter recipient's name"
              />
            </div>
             {/* Gift Message */}
             <div className="form-group mt-3">
              <textarea
                id="giftMessage"
                className={theme ? 'form-control' : 'form-control text-dark bg-light'}
                rows="3"
                placeholder="Enter a gift message"
              />
            </div>

            {/* Delivery Date */}
            <div className="form-group mt-3">
              <input
                type="date"
                id="deliveryDate"
                className={theme ? 'form-control' : 'form-control text-dark bg-light'}
                placeholder="Select a delivery date"
              />
            </div>

         
          </div>
          
        )}
         <Button 
      type="button"
     className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} px-4 py-2 mt-5 w-50`}
     style={{ border: 0 ,textAlign:"center"}}
  >  ADD TO CARD</Button>
   <div className={`mt-5  ${theme ? 'text-dark-primary ' : ''}`}>Remember your loved ones with our gift card vouchers, where you can give them the flexibility to choose what they most among various options from our products </div>

  
   
      <div className={`mt-5  ${theme ? 'text-light' : 'text-black'}`}> 
      <span className="ms-1"> <LuShare2 size="1.2rem" /></span> 
   <Link to="/" className={` ${theme ? 'text-light' : 'text-black'}`}
   style={{textDecoration: 'none'}}
   >
   
   Share
      </Link>
      
      </div>
      </Col>
    </Row>
  {/* You May Also Like Section */}
  <div className="mt-5 text-center">
    <h3 className={theme ? 'text-light mt-5' : 'text-black mt-5'}>You May Also Like</h3>
    
    {/* Card Section */}
    <div className="row m-5 justify-content-center">
                    {products2.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-12 product-allcard mb-5 p-4" key={product.id}>
                          <div className="image-container">
          <Image
            src={product.image}
            className="img-fluid img_all m-3 product-image"
            alt="First slide"
          />
          <button className={theme ? 'text-light btn-top-left' : 'text-black btn-top-left'}>
            Sale
          </button>
        </div>
                            <h6 className={theme ? 'text-light' : 'text-black'}>{product.description}</h6>
                            <p className={theme ? 'text-light' : 'text-black'}>
                                {product.price}
                                <del className="original-price">{product.price}</del>
                            </p>
                           

           
                        </div>
                    ))}
                </div>
  </div>
</section>
  
  
  );
};

export default GiftDetails;
