import React, { useState } from 'react';
import { Button, Container, Col, Row, Table, Modal } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import { FaRegTrashCan } from 'react-icons/fa6';
import slider1 from '../images/WATCHES2.jpg';
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdLocalOffer } from "react-icons/md";
import { useNavigate , useLocation} from 'react-router-dom';
const Cart = () => {
    const [theme] = useThemeHook();
    const [showGiftModal, setShowGiftModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const lang = location.pathname.split('/')[1] || 'en';

    
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    // Function to open the modal
    const handleGiftClick = (item) => {
        setSelectedItem(item); // Track the selected cart item
        setShowGiftModal(true);
    };

    // Function to close the modal
    const handleClose = () => {
        setShowGiftModal(false);
        setSelectedItem(null); // Reset selected item on close
    };
    const handleCheckout = () => {
        handleClose();
        navigate(`/${lang}/cheakOut`);
    };

    return (
        <Container className="py-4 margin_section full-screen-slider">
            <h1 className={`${theme ? 'text-light' : 'text-light-primary'} my-3  `}>
                {isEmpty ? 'Your Cart is Empty' : 'Your cart'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={theme ? 'dark' : 'light'} className="mb-5">
                <thead>
        <tr>
          <th></th>
          <th className='Head-cart'>PRODUCT</th>
          <th></th>
          <th className='Head-cart'></th>
          <th className='Head-cart'>TOTAL</th>
        </tr>
      </thead>
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem' }}>
                                                <img src={slider1} style={{ maxWidth: '80px' }} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 >
                                            {item.title}
                                        </h6>
                                        <h6 >{item.price}</h6>
                                        <h6 >Size: 100 ml</h6>
                                        
                                        {/* "Is this a gift?" button */}
                                        <button
                                            className={`btn btn-link p-0 text-decoration-none ${theme ? 'text-light' : 'text-light-primary'}`}
                                            onClick={() => handleGiftClick(item)}
                                        >
                                         Is this a gift? 
                                        </button>
                                    </td>
                                  
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <div className="d-flex">
                                            <button className={`${theme ? 'text-light' : 'text-black'} btn btn-outline-secondary ms-2`} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                <FiMinus size="1.5rem" />
                                            </button>
                                            <button className={`${theme ? 'text-light' : 'text-black'} btn btn-outline-secondary ms-2`} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                <IoMdAdd size="1.5rem" />
                                            </button>
                                            <button className={`${theme ? 'text-light' : 'text-black'} btn btn-outline-secondary ms-2`} onClick={() => removeItem(item.id)}>
                                                <FaRegTrashCan size="1rem" />
                                            </button>
                                        </div>
                                    </td>
                                    <td> {item.price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                
 
 <div class="row mb-5">
    <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
{/* "Order Special Instructions" button */}
<div
                                className={` mt-2  ${theme ? 'text-light' : 'text-dark'}`}
                               
                            >
                                <TiArrowSortedDown size="1rem"/> Order special instructions
                            </div>

                            {/* Special Instructions Textarea */}
                           
                                <textarea
                                    className="form-control mt-2 w-50"
                                    rows="3"
                                   
                                />



    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
    <div
                                className={` mt-2  ${theme ? 'text-light' : 'text-dark'}`}
                               
                            >
                                <MdLocalOffer size="1rem"/>  5OFF (-8.150 JD)
                            </div>

  
    <div className={`mt-2  ${theme ? 'text-light' : 'text-dark'}`}>Taxes included. Discounts and shipping calculated at checkout.
    </div>

    </div>
  </div>

                {!isEmpty && (
                    <Row
                        style={{ position: 'fixed', bottom: 0 }}
                        className={`${theme ? 'bg-light-black text-light' : 'bg-light text-black'} justify-content-center w-100 `}
                    >
                        <Col md={6}   className="py-2 text-center">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </Col>
                        <Col className="p-0 d-flex justify-content-center align-items-center" md={6}>
                            <Button
                                type="submit"
                                className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary text-light'} px-4 py-2 m-3`}
                                style={{ border: 0 }}
                                onClick={() => emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>
                            <Button
                                type="submit"
                                onClick={handleCheckout}
                                className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary text-light'} px-4 py-2 m-3`}
                                style={{ border: 0 }}
                            >
                                <BsCartCheck size="1.7rem" />
                                Checkout
                            </Button>
                        </Col>
                    </Row>
                )}



                {/* Modal for "Is this a gift?" */}
                <Modal show={showGiftModal} onHide={handleClose} className={theme ? 'text-light' : 'text-dark'}>
                    <Modal.Header closeButton className={theme ? 'text-light bg-light-black' : 'text-dark bg-light'}>
                        <Modal.Title>Gift Option Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={theme ? 'Gift text-light bg-light-black' : 'Gift text-dark bg-light'}>
                        <div className="form-group">
                            <label htmlFor="giftWrap">Gift Wrap</label>
                            <select id="giftWrap" className={theme ? 'form-control' : 'form-control text-dark bg-light'}>
                                <option value="no" className={theme ? 'text-light bg-light-black' : 'text-dark bg-light'}>No</option>
                                <option value="yes" className={theme ? 'text-light bg-light-black' : 'text-dark bg-light'}>Yes</option>
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="giftMessage">Gift Message</label>
                            <textarea
                                id="giftMessage"
                                className={theme ? 'form-control' : 'form-control text-dark bg-light'}
                                rows="3"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="deliveryDate">Delivery Date</label>
                            <input
                                type="date"
                                id="deliveryDate"
                                className={theme ? 'form-control' : 'form-control text-dark bg-light'}
                                placeholder="Select a delivery date"
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer className={theme ? 'text-light bg-light-black' : 'text-dark bg-light'}>
                        <Button className={theme ? 'bg-light-black text-light border-but' : 'bg-light text-black border-but'} onClick={handleClose}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>
    );
};

export default Cart;
