import React from 'react';
import { Carousel, Image, Container, Row, Col, Button } from 'react-bootstrap'; // Import necessary components
import slider1 from '../images/slider1.webp';
import slider2 from '../images/slider2.webp';
import '../Css/homee.css'; 
import Cardes from './Cardes'; 
import Watches from './Watches'; 
import Fragrances from './Fragrances'; 
import Bags from './Bags'; 
import Brands from './Brandes';
import Opinions from './Opinions';  
import Blogs from './Blogs';  
import { useNavigate ,useLocation} from 'react-router-dom';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
const Home = () => {
    const [theme] = useThemeHook();
    const navigate = useNavigate();
    const location = useLocation();
    const lang = location.pathname.split("/")[1] || "en";
    console.log("language: " + lang);


    const handleAllFragrance= () => {
   
      navigate('/allFragrance');
  };
    return (
        <div >
        <Carousel interval={2000} className="responsive-carousel">
            <Carousel.Item>
                <Image
                    src={slider1}
                    className="d-block w-100 carousel-image"
                    alt="First slide"
                />
               <Carousel.Caption  className={theme? 'bg-slider-black text-light': 'bg-light text-black'}>
                    <Container >
                        <Row className="justify-content-center">
                            <Col md={8} className="text-center titel-home">
                                <h3 className={theme? 'text-light my-3': 'text-black my-3'}>
                                {lang === "ar" ? "ابقى على اتصال" : "EXPLORE OUR SCENTS"}
                                </h3>
                                <p  className={theme? 'text-light': 'text-black '}>
                                   
                                    {lang === "ar" ? "يمكن لرائحتك أن تعبر عن شخصيتك وحضورك وأسلوبك.احتضن حضورك مع مجموعتنا الرائعة من العطور  " : " YOUR SCENT CAN EXPRESS YOUR PERSONALITY, PRESENCE, AND YOUR STYLE.EMBRACE YOUR PRESENCE WITH OUR EXQUISITE COLLECTION OF FRAGRANCES."}
                                </p>
                                {/* <Button variant="outline-secondary" className="SHOP">SHOP FRAGRANCES</Button> */}
                                <button onClick={handleAllFragrance} type="button" className={theme? 'text-light btn m-3': 'text-black btn m-3'} >SHOP FRAGRANCES</button>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src={slider2}
                    className="d-block w-100 carousel-image"
                    alt="Second slide"
                />
                <Carousel.Caption  className={theme? 'bg-slider-black text-light': 'bg-light text-black'}>
                    <Container >
                        <Row className="justify-content-center">
                        <Col md={8} className="text-center">
                                <h3 className={theme? 'text-light my-3': 'text-black my-3'}>EXPLORE OUR SCENTS</h3>
                                <p  className={theme? 'text-light': 'text-black '}>
                                    YOUR SCENT CAN EXPRESS YOUR PERSONALITY, PRESENCE, AND YOUR STYLE.
                                    EMBRACE YOUR PRESENCE WITH OUR EXQUISITE COLLECTION OF FRAGRANCES.
                                </p>
                                {/* <Button variant="outline-secondary" className="SHOP">SHOP FRAGRANCES</Button> */}
                                <button type="button" className={theme? 'text-light btn m-3': 'text-black btn m-3'}>SHOP FRAGRANCES</button>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

<Cardes/>
<Fragrances/>
<Watches/>
<Bags/>
<Brands/>
<Opinions/>
<Blogs/>
        </div>
    );
};

export default Home;
