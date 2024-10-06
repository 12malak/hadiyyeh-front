import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import slider1 from '../images/Girl-removebg-preview.png';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';

const ProductInCheak = ({ products = [], theme }) => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Handle form submission logic
    setTimeout(() => setLoading(false), 2000); // Simulate form submission delay
  };

  return (
    <>
    <ul className="list-group mt-4">
      {products.length === 0 ? (
        <li className="list-group-item">No items in the cart.</li>
      ) : (
        products.map((item, index) => (
          <li
            key={index}
            className={`list-group-item d-flex flex-column custom-list-item ${theme ? 'bg-light-black text-light' : 'bg-light text-black'}`}
          >
            <div className="d-flex align-items-center justify-content-between">
              {/* Image */}
              <Image
                src={slider1}
                className="img-fluid img-card"
                alt={item.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              {/* Title and Price */}
              <div className="d-flex justify-content-between w-100">
                <span>{item.name}</span>
                <span>{item.price.toFixed(2)}</span>
              </div>
            </div>
            <h6 className='Price'>Size: 100 ml</h6> {/* Size can be passed as a prop if variable */}
          </li>
        ))
      )}
    </ul>
     <Row>
     <h6 className={` pb-3 mt-5 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
     Order summary (5)
                   </h6>
     <Form.Group className="mb-3 col-lg-8 ">
       <Form.Control name="Discount" type="text" placeholder="Discount code or gift card" required />
     </Form.Group>
     <Form.Group className="mb-3 col-lg-4">
      
     
      {/* Submit Button */}
      <Button
                   type="submit"
                   className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block w-100 `}
                   disabled={loading}
                   style={{ border: 0 }}
                 >
                   {loading ? (
                     <>
                       <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                       &nbsp;Loading...
                     </>
                   ) : (
                     'Apply'
                   )}
                 </Button>
     </Form.Group>
     </Row>
     <Row>
                      <Col xs={6} className="text-start">
                        <div>Subtotal (5 items)</div>
                      
                      </Col>
                      <Col xs={6} className="text-end">
                        <div>JOD 1 63.000</div>
                       
                      </Col>
                    </Row>
                    <Row className='mt-3'>
                      <Col xs={6} className="text-start">
                        <div>Shipping</div>
                        <div className={` ${theme ? 'text-dark-primary' : 'text-dark-primary'}`}>FREE SHIPPING</div>
                      </Col>
                      <Col xs={6} className="text-end">
                        <span className='m-1'>JOD 4.000</span>
                        <span className='Price p-0 m-0'>FREE</span>
                      </Col>
                    </Row>
                    <Row className='mt-3'>
                      <Col xs={8} className="text-start">
                        <div><strong>Total</strong></div>
                        <div className={` ${theme ? 'text-dark-primary' : 'text-dark-primary'}`}>Including JOD 0.000 in taxes</div>
                        <div>TOTAL SAVINGS JOD 4.000</div>
                     
                     
                      </Col>
                      <Col xs={4} className="text-end">
                        <span className='m-1'><strong>JOD 4.000</strong></span>
                       
                      </Col>
                    </Row>
    </>
  );
};

export default ProductInCheak;
