import React, { useState } from 'react';
import { Container, Row, Col, Button ,Image} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import 'react-lightbox-component/build/css/index.css';
import './product-details.css';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import slider2 from '../images/i-numerati-parfum-.png';
import slider3 from '../images/Girl-removebg-preview.png';
import slider4 from '../images/1_2d21e22d-6de8-4907-a90f-944c70501700.webp';
import slider5 from '../images/girl2-removebg-preview.png';
import imageCard from '../images/Girl-removebg-preview.png';
import imageCard2 from '../images/WATCHES7-removebg-preview.png';
import imageCard3 from '../images/girl2-removebg-preview.png';
import imageCard4 from '../images/images-removebg-preview.png';
import { Link } from "react-router-dom";
import { LuShare2 } from "react-icons/lu";
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import { BsCartCheck } from 'react-icons/bs';
import { useNavigate , useLocation} from 'react-router-dom';
const ProductDetails = () => {
    const [theme] = useThemeHook();
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [largeImage, setLargeImage] = useState(slider2);
    const [activeImage, setActiveImage] = useState(slider2); 
    const navigate = useNavigate();
    const location = useLocation();
    const lang = location.pathname.split('/')[1] || 'en';



    const handleCheckout = () => {
      
       
      navigate(`/${lang}/cheakOut`);
    };

  // Handle quantity increase and decrease
  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

    const productData = {
        id: 1,
        name: "DUMONT CELERIO OROS EDP FOR MEN",
        price: 69.00,
        description: "This WIWU PILOT BACKPACK comes with a 1-year warranty and offers 360-degree protection. Crafted from water-resistant material, it features an organizer design to keep your accessories neatly organized. The YKK zipper ensures durability while the backpack is able to accommodate laptops up to 15.6 inches, tablets, notebooks, water bottles, and a range of laptop accessories such as charging cables, power banks, mice, and chargers.",
      
    };
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

    return (
        <Container className="py-5">
            <Row className=" mt-5 justify-content-center">
            <Col xs={10} md={7} lg={5} className="p-0 image-grid">
            {/* Big Image */}
            <div className="big-image mb-3">
                <img
                    src={largeImage} // Use the state variable for the large image
                    className="img-fluid"
                    alt="Product"
                />
            </div>
            {/* Small Images */}
            <Row className=" d-flex justify-content-center mb-3">
                <Col xs={3} lg={3} className=" ">
                    <img
                        src={slider2} // URL for small image 1
                        className={`img-fluid small-image ${activeImage === slider2 ? 'active' : ''}`}
                        alt="Small Product 1"
                        onClick={() => {
                            setLargeImage(slider2);
                            setActiveImage(slider2);
                        }}
                    />
                </Col>
                <Col xs={3}  lg={3} className=" "> {/* Center images in their columns */}
                    <img
                        src={slider3} // URL for small image 2
                        className={`img-fluid small-image ${activeImage === slider3 ? 'active' : ''}`}
                        alt="Small Product 2"
                        onClick={() => {
                            setLargeImage(slider3);
                            setActiveImage(slider3);
                        }}
                    />
                </Col>
                <Col xs={3}  lg={3} className=""> {/* Center images in their columns */}
                    <img
                        src={slider4} // URL for small image 3
                        className={`img-fluid small-image ${activeImage === slider4 ? 'active' : ''}`}
                        alt="Small Product 3"
                        onClick={() => {
                            setLargeImage(slider4);
                            setActiveImage(slider4);
                        }}
                    />
                </Col>
                <Col xs={3}  lg={3} className=""> {/* Center images in their columns */}
                    <img
                        src={slider5} // URL for small image 3
                        className={`img-fluid small-image ${activeImage === slider5 ? 'active' : ''}`}
                        alt="Small Product 3"
                        onClick={() => {
                            setLargeImage(slider5);
                            setActiveImage(slider5);
                        }}
                    />
                </Col>
            </Row>
        </Col>

                <Col xs={10} md={7} lg={7} className={`${theme ? 'text-light' : 'text-black'} product-details`}>
                <h6  style={{textAlign:"center" , opacity: '0.5'}}>Brand name</h6>
                    <h1>{productData.name}</h1>
                    <br />
                    <b className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`}>
                    <del className="original-price">55 JD</del> {productData.price} JD
                    </b>
                    <div className={`${theme ? 'text-dark-primary' : 'text-dark-primary'}`}>Taxes included.</div>
                    <div className={`mt-3 ${theme ? 'text-dark-primary' : ''}`}>Quantity</div>
        <div className="d-flex mt-3">
          <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange('decrease')}>
            <FiMinus size="1.4rem" />
          </button>
          <span className="m-2">{quantity}</span> {/* Display current quantity */}
          <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange('increase')}>
            <IoMdAdd size="1.4rem" />
          </button>
        </div>
                    <br />
                    <Button
                        onClick={() => addItem(productData)}
                        className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary text-light'} py-2 m-1`}
                        style={{ border: 0 }}
                        
                    >
                        <BsCartPlus size="1.8rem" />
                        Add to cart
                    </Button>
                    <Button
                                type="submit"
                                onClick={handleCheckout}
                                className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary text-light'}  py-2 m-1`}
                                style={{ border: 0 }}
                            >
                                <BsCartCheck size="1.7rem" />
                               Buy it now
                            </Button>
                    <p className="mt-3 h6" style={{ opacity: '0.8',lineHeight:"2" }}>
                        {productData.description}
                    </p>
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
        </Container>
    );
};

export default ProductDetails;
