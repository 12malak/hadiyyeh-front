import React, { useState } from 'react';
import { Image, Modal, Button, Row, Col } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import slider1 from '../images/gift.webp'; // Fallback image
import { IoFilterCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import slider2 from '../images/50Image.webp';
import slider3 from '../images/25Image.webp';
import slider4 from '../images/100Image.webp';
import { useNavigate, useLocation } from 'react-router-dom';

import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import "../Css/gift.css";
// Sample Product Data
const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is a great product. This is a great product.',
    image: slider1,
    price: '$49.99',
  },
];

function Gift() {
  const [theme] = useThemeHook();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeButton, setActiveButton] = useState(null); // Track the active button
  const [currentImage, setCurrentImage] = useState(selectedProduct?.image || slider1);

  const [isGift, setIsGift] = useState(false); // Manage visibility of the gift form
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en';

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
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  const handleGiftDetails = () => {
   
  
    navigate(`/${lang}/giftDetails`);
};
  const handleCloseModal = () => setShowModal(false);
  const handleQuantityChange = (itemId, action) => {
    // Logic to update quantity based on the action (increase or decrease)
    // This might involve updating state or dispatching an action if using Redux
};
  return (
    <section
      className={
        theme
          ? 'bg-light-black text-light margin_section full-screen-slider'
          : 'bg-light text-black margin_section full-screen-slider'
      }
      data-aos="fade-up"
    >
      <div className="container text-center container-all">
      <Row className="justify-content-start content-filter">
                <Col lg={8} className="mb-lg-0">
                    <div className="d-flex justify-content-between">
                   
                     
                    {/* Toggle Button for Offcanvas */}
                    <Link  
                    className={`nav-link link-filter mt-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}
                   
                    onClick={toggleOffcanvas}>
                         <IoFilterCircleOutline size="1.4rem"/>  Filter & Sort
                    </Link>
                
                
                    </div>
                </Col>
                <Col lg={4} className=" mb-lg-0">
                    <ul className="list-unstyled d-none d-md-flex justify-content-start mt-3">
                        <li className={`me-3 title-filter mt-1 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
                            Sort by:
                        </li>
                        <li className="me-3">
                            <select className={`form-select  ${theme ? 'bg-light-black text-dark-primary' : 'bg-light text-light-primary'}`}
                          
                            style={{ border: "none" }}
                            >
                                <option value="">Best selling</option>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="furniture">Furniture</option>
                                {/* Add more categories as needed */}
                            </select>
                        </li>
                        <li className={`me-3 title-filter mt-1 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
                        644 products
                        </li>
                    </ul>
                </Col>
                
                <Col lg={4} className="mb-lg-0">
    {/* For smaller screens */}
    <ul className="list-unstyled d-flex m-2 justify-content-start d-md-none">
        <li className={`me-3 title-filter ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
            644 products
        </li>
    </ul>
</Col>
                   
            </Row>

            {/* Offcanvas Component */}
            <div 
    className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''} ${theme ? 'bg-light-black' : 'bg-light'}`} 
    tabIndex="-1" 
    id="offcanvasRight" 
    aria-labelledby="offcanvasRightLabel" 
    style={{ visibility: isOpen ? 'visible' : 'hidden' }}
>
                <div className="offcanvas-header">
                    <h5 className={`offcanvas-title ${theme ? 'text-light' : 'text-black'}`} id="offcanvasRightLabel">Filters and Sort</h5>
                    <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
                    
                </div>
                <div className="offcanvas-body">
                    {/* Filter Options in Offcanvas */}
                    <ul className="list-unstyled">
                        {/* <h4 className={` mt-1 ${theme ? 'text-light' : 'text-black'}`}>
                            Filter:
                        </h4> */}
                        {["Availability", "Price", "Brand", "Size", "Product type"].map(option => (
                            <li key={option} className=" mt-5">
                                <select className={`form-select custom-select ${theme ? 'bg-light-black text-light' : 'bg-light text-black'}`}>
                                    <option value="">{option}</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="furniture">Furniture</option>
                                </select>
                            </li>
                        ))}
                    </ul>
                    {/* Sort Options in Offcanvas */}
                    <ul className="list-unstyled mt-3">
                        {/* <li className={`title-filter mt-1 ${theme ? 'text-light' : 'text-black'}`}>
                            Sort by:
                        </li> */}
                        <li className="me-5">
                            <select className={`form-select custom-select ${theme ? 'bg-light-black text-light' : 'bg-light text-black'}`}>
                                <option value="">Best selling</option>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="furniture">Furniture</option>
                                {/* Add more categories as needed */}
                            </select>
                        </li>


                      
                    </ul>
                </div>
            </div>

            {/* Backdrop for Offcanvas */}
            {isOpen && <div className="offcanvas-backdrop fade show" onClick={toggleOffcanvas}></div>}

        <div className="row  justify-content-center">
      
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-12 mb-5" key={product.id}>
              <div className="image-container">
                <Image
                  src={product.image}
                  className="img-fluid img-all"
                  alt="Product Image"
                />
              </div>
              <h6 className={`mt-1 ${theme ? 'text-light' : 'text-black'}`}>
                {product.description}
              </h6>
              <p className={theme ? 'text-light' : 'text-black'}>
                From <del className="original-price">{product.price}</del>
              </p>
             
              <Button 
     type="submit"
     className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary text-light'} px-4 py-2 w-100 mt-3 `}
     onClick={() => handleShowModal(product)}
     style={{ border: 0 }}
  > CHOOSE OPTION</Button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
    

      <Modal show={showModal} onHide={handleCloseModal} centered   className={`custom-modal ${theme? ' text-light' : 'text-dark '}`}>
  <Modal.Header closeButton  className={theme ? ' text-light bg-light-black' : 'text-dark bg-light'}>
  <Modal.Title>Hadiyyeh</Modal.Title>
  </Modal.Header>
  <Modal.Body className={theme ? 'text-light bg-light-black' : 'text-dark bg-light'}>
  <Row>
    <Col xs={12} md={6}>
      <div className="image-container">
      <Image
                src={currentImage} // Use currentImage state to change the image
                className="img-fluid img-all"
                alt="Product Image"
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
             {/* Quantity Control */}
             <div className="d-flex mt-3">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange( 'decrease')}
                            // disabled={item.quantity <= 1} // Disable if quantity is 1 or less
                          >
                        <FiMinus size="1.4rem"/>
                          </button>
                          <span className="m-2">7</span> {/* Display current quantity */}
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange( 'increase')}
                          >
                           <IoMdAdd size="1.4rem"/>
                          </button>
                          {/* <span><FaRegTrashCan size="1rem"/></span> */}
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
    </Col>
  </Row>
</Modal.Body>

  <Modal.Footer  className={theme ? ' text-light bg-light-black' : 'text-dark bg-light'}>
  <Button 
      type="button"
     onClick={handleGiftDetails}
     className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} px-4 py-2 `}
     style={{ border: 0 }}
  >View full details</Button>
    <Button 
      type="button"
     className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} px-4 py-2 `}
     style={{ border: 0 }}
  >Add to Cart</Button>
  
  </Modal.Footer>
</Modal>


    </section>
  );
}

export default Gift;
