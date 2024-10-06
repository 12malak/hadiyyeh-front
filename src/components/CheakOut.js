import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import '../Css/cheakout.css';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import ProductInCheak from './ProductInCheak'; 

function CheakOut( {  products = [] }) {
  const [loading, setLoading] = useState(false);
  const [shippingMethod, setShippingMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [theme] = useThemeHook();
  const [billingAddress, setBillingAddress] = useState("");
  const [showBillingForm, setShowBillingForm] = useState(false); // State for showing the billing form

  const handleAddressChange = (address) => {
    setBillingAddress(address);
    // Show the billing form if a different address is selected
    setShowBillingForm(address === "Outside Amman");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Handle form submission logic
    setTimeout(() => setLoading(false), 2000); // Simulate form submission delay
  };

  return (
    <Container className={`py-5 ${theme ? 'text-light bg-light-black' : 'text-black bg-light'}`}>
     
      
          <Row>
            {/* Contact Section */}
            <Col md={6} lg={6} sm={12}>
              <h6 className={`border-bottom pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
                Contact
              </h6>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control name="email" type="email" placeholder="Email" required />
                </Form.Group>
              </Form>
              <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckIndeterminate"
              />
              <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                Email me with news and offers
              </label>
            </div>
              {/* Delivery Section */}
              <h6 className={` border-bottom mt-4 pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
                Delivery
              </h6>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Control name="firstName" type="text" placeholder="First name" required />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Control name="lastName" type="text" placeholder="Last name" required />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control name="address" type="text" placeholder="Address" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="city" type="text" placeholder="City" required />
                </Form.Group>
                <Row>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Control name="postalCode" type="text" placeholder="Postal Code" required />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Select name="country" required>
                      <option>Select country</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>UK</option>
                      {/* Add more country options here */}
                    </Form.Select>
                  </Form.Group>
                </Row>
                <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckIndeterminate"
              />
              <label className="form-check-label" htmlFor="flexCheckIndeterminate">
              Save this information for next time
              </label>
            </div>

                {/* Shipping Method Section */}
                <h6 className={` border-bottom mt-4 pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
                  Shipping Method
                </h6>
                <Form.Group className="mt-3">
               <div
                className={`shipping-option p-3 ${shippingMethod === "Amman" ? (theme ? 'bg-slider-black selected' : 'bg-dark-primary selected') : ''}`}
                onClick={() => setShippingMethod("Amman")}
              >
                <Form.Check
                  type="radio"
                  id="amman"
                  label={
                    <Row>
                      <Col xs={8} className="text-start">
                        <div>Amman</div>
                        <div>Delivery within 48 hours</div>
                      </Col>
                      <Col xs={4} className="text-end">
                        <div className={` ${theme ? 'text-dark-primary' : ''}`}>JOD 4.000</div>
                        <div>FREE</div>
                      </Col>
                    </Row>
                  }
                  name="shippingMethod"
                  value="Amman"
                  checked={shippingMethod === "Amman"}
                  onChange={() => setShippingMethod("Amman")}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
             
                <div
                className={`shipping-option p-3 ${shippingMethod === "Outside Amman" ? (theme ? 'bg-slider-black selected' : 'bg-dark-primary selected') : ''}`}
                onClick={() => setShippingMethod("Outside Amman")}
              >
                <Form.Check
                  type="radio"
                  id="outsideAmman"
                  label={
                    <Row>
                      <Col xs={8} className="text-start">
                        <div>Outside Amman</div>
                        <div>Delivery within 48 hours</div>
                      </Col>
                      <Col xs={4} className="text-end">
                        <div className={` ${theme ? 'text-dark-primary' : ''}`}>JOD 6.000</div>
                        <div>FREE</div>
                      </Col>
                    </Row>
                  }
                  name="shippingMethod"
                  value="Outside Amman"
                  checked={shippingMethod === "Outside Amman"}
                  onChange={() => setShippingMethod("Outside Amman")}
                  required
                />
              </div>
            </Form.Group>
           
 {/* Payment Method Section */}
<h6 className={`border-bottom mt-4 pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
  Payment
</h6>
<div className={` ${theme ? 'text-dark-primary' : 'text-dark-primary'}`}>All transactions are secure and encrypted.</div>
<Form.Group className="mt-3">
  <div
    className={`shipping-option p-3 ${paymentMethod === "COD" ? (theme ? 'bg-slider-black selected' : 'bg-dark-primary selected') : ''}`}
    onClick={() => setPaymentMethod("COD")}
  >
    <Form.Check
      type="radio"
      id="cod"
      label={
        <Row>
          <Col xs={12} className="text-start">
            <div>Cash on Delivery (COD)</div>
          </Col>
        </Row>
      }
      name="paymentMethod"
      value="COD"
      checked={paymentMethod === "COD"}
      onChange={() => setPaymentMethod("COD")}
      required
    />
    {paymentMethod === "COD" && (
   <Row>
   <Col xs={12} className="text-start">
     <div>Pay with Cash on Delivery (COD)</div>
   </Col>
 </Row>
)}

  </div>
</Form.Group>

<Form.Group className="mb-3">
  <div
    className={`shipping-option p-3 ${paymentMethod === "Cliq" ? (theme ? 'bg-slider-black selected' : 'bg-dark-primary selected') : ''}`}
    onClick={() => setPaymentMethod("Cliq")}
  >
    <Form.Check
      type="radio"
      id="cliq"
      label={
        <Row>
          <Col xs={12} className="text-start">
            <div>cliq</div>
          </Col>
        </Row>
      }
      name="paymentMethod"
      value="Cliq"
      checked={paymentMethod === "Cliq"}
      onChange={() => setPaymentMethod("Cliq")}
      required
    />
    
{paymentMethod === "Cliq" && (
  <Row>
  <Col xs={12} className="text-start">
    <div>cliq alias: HADIYYEH</div>
  </Col>
</Row>
 
)}

  </div>
</Form.Group>




{/* Billing Address Section */}
<h6 className={`border-bottom mt-4 pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
        Billing Address
      </h6>
      <Form.Group className="mt-3">
        <div
          className={`shipping-option p-3 ${billingAddress === "Amman" ? (theme ? 'bg-slider-black selected' : 'bg-dark-primary selected') : ''}`}
          onClick={() => handleAddressChange("Amman")}
        >
          <Form.Check
            type="radio"
            id="billingAmman"
            label={
              <Row>
                <Col xs={12} className="text-start">
                  <div>Same as shipping address</div>
                </Col>
              </Row>
            }
            name="billingAddress"
            value="Amman"
            checked={billingAddress === "Amman"}
            onChange={() => handleAddressChange("Amman")}
            required
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <div
          className={`shipping-option p-3 ${billingAddress === "Outside Amman" ? (theme ? 'bg-slider-black selected' : 'bg-dark-primary selected') : ''}`}
          onClick={() => handleAddressChange("Outside Amman")}
        >
          <Form.Check
            type="radio"
            id="billingOutsideAmman"
            label={
              <Row>
                <Col xs={12} className="text-start">
                  <div>Use a different billing address</div>
                </Col>
              </Row>
            }
            name="billingAddress"
            value="Outside Amman"
            checked={billingAddress === "Outside Amman"}
            onChange={() => handleAddressChange("Outside Amman")}
            required
          />
        </div>
      </Form.Group>

      {/* Conditional rendering of the billing address form */}
      {showBillingForm && (
        <div className="billing-address-form mt-3">
         <Row>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Control name="firstName" type="text" placeholder="First name" required />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Control name="lastName" type="text" placeholder="Last name" required />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control name="address" type="text" placeholder="Address" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="city" type="text" placeholder="City" required />
                </Form.Group>
                <Row>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Control name="postalCode" type="text" placeholder="Postal Code" required />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Select name="country" required>
                      <option>Select country</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>UK</option>
                      {/* Add more country options here */}
                    </Form.Select>
                  </Form.Group>
                </Row>
        </div>
      )}











 {/* Submit Button */}
 <Button
              type="submit"
              className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block mt-4 w-100 `}
              disabled={loading}
              style={{ border: 0 }}
            >
              {loading ? (
                <>
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                  &nbsp;Loading...
                </>
              ) : (
                'Complete Order'
              )}
            </Button>
              </Form>

              
            </Col>

            <Col md={6} lg={6} sm={12}>
             
      {/* Product to card Section */}
      <ul className="list-group mt-4">
      <ProductInCheak products={products} theme={theme} />
          </ul>
         
            </Col>
          </Row>
      
      
    </Container>
  );
}

export default CheakOut;
