import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Nav, Image, Form, Button , Spinner, } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Heading from '../components/Heading';
import profilePix from '../images/profile-picture.png';
import { FaClipboardList, FaUser } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import './my-account.css';
import OrderCard from '../components/OrderCard';

const MyAccount = () => {
  const [theme] = useThemeHook();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Fetch user details from localStorage or an API
  useEffect(() => {
    // Example fetching from localStorage (could be API fetch instead)
    const storedUserDetails = {
      firstName: localStorage.getItem('firstName') || 'John',
      lastName: localStorage.getItem('lastName') || 'Doe',
      email: localStorage.getItem('email') || 'johndoe@example.com',
      password: localStorage.getItem('password') || '********', // Usually, the password wouldn't be displayed like this
    };
    setUserDetails(storedUserDetails);
  }, []);

  return (
    <Container className="py-5">
      <Heading heading="My Account" />
      <Tab.Container defaultActiveKey="my-orders">
        <Row className="justify-content-evenly mt-4 p-1">
          <Col sm={3} className={`${theme ? 'text-light bg-dark' : 'text-black bg-light'} p-2 rounded h-100 mb-3 user-menu`}>
            <Row className="mb-3 py-2">
              <Col xs={3} className="pe-0">
                <Image src={profilePix} thumbnail fluid roundedCircle className="p-0" />
              </Col>
              <Col xs={9} className="pt-1">
                <span>Hello,</span>
                <h4>{userDetails.firstName}</h4>
              </Col>
            </Row>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="mb-3">
                <Nav.Link eventKey="my-orders">
                  My Orders
                  <FaClipboardList size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="account-details">
                  Account Details
                  <FaUser size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="address">
                  Address
                  <IoLocationSharp size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="wallet">
                  Wallet
                  <GiWallet size="1.4rem" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8} className={`${theme ? 'text-light bg-dark' : 'text-black bg-light'} p-2 rounded`}>
            <Tab.Content>
              <Tab.Pane eventKey="my-orders">
                <Heading heading="My Orders" size="h3" />
                <OrderCard
                  orderDate="24 Jun, 2022"
                  orderId="1234"
                  title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                  img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  deliveredDate="05 July, 2022"
                />
                <OrderCard
                  orderDate="24 Jun, 2022"
                  orderId="1334"
                  title="Mens Casual Premium Slim Fit T-Shirts"
                  img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  deliveredDate="05 July, 2022"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="account-details">
                <Heading heading="Account details" size="h3" />
                <Form>
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={userDetails.firstName} readOnly />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={userDetails.lastName} readOnly />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={userDetails.email} readOnly />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={userDetails.password} readOnly />
                  </Form.Group>
                
                  <Button
                            type="submit"
                            className={`${theme? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                            disabled={loading}
                            style={{border: 0}}
                        >
                        {loading? 
                            <>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                &nbsp;Loading...
                            </> : 'Edit'
                        }
                        </Button>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="address">
    <Heading heading="Address" size="h3" />
    <Form>
        {/* First Name */}
        <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" value={userDetails.firstName} readOnly />
        </Form.Group>

        {/* Last Name */}
        <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" value={userDetails.lastName} readOnly />
        </Form.Group>

        {/* Address 1 */}
        <Form.Group className="mb-3" controlId="formAddress1">
            <Form.Label>Address 1</Form.Label>
            <Form.Control type="text" value={userDetails.address1} readOnly />
        </Form.Group>

        {/* Address 2 */}
        <Form.Group className="mb-3" controlId="formAddress2">
            <Form.Label>Address 2 (Optional)</Form.Label>
            <Form.Control type="text" value={userDetails.address2} readOnly />
        </Form.Group>

        {/* City */}
        <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" value={userDetails.city} readOnly />
        </Form.Group>

        {/* Country/Region */}
        <Form.Group className="mb-3" controlId="formCountry">
            <Form.Label>Country/Region</Form.Label>
            <Form.Select value={userDetails.country} >
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                {/* Add more country options as needed */}
            </Form.Select>
        </Form.Group>

        {/* Phone */}
        <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" value={userDetails.phone} readOnly />
        </Form.Group>

        {/* Edit Button */}
        <Button
            type="submit"
            className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
            disabled={loading}
            style={{ border: 0 }}
        >
            {loading ? (
                <>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    &nbsp;Loading...
                </>
            ) : (
                'Add address'
            )}
        </Button>
    </Form>
</Tab.Pane>

              <Tab.Pane eventKey="wallet">
                <Heading heading="Wallet" size="h3" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default MyAccount;
