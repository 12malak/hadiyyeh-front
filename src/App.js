import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import RightCart from './components/RightCart';
import AppFooter from './components/AppFooter';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";

// Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";
import Search from "./components/Search";
import Cardes from "./Pages/Cardes";
import Blogs from "./Pages/Blogs";
import Allproducts from "./Pages/Allproducts";
import CheakOut from "./components/CheakOut";
import Gift from "./Pages/Gift";
import GiftDetails from "./Pages/GiftDetails";
import Refund from "./Pages/Refund";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import AllBag from "./Pages/Bag/AllBag";
import AllWatche from "./Pages/Watche/AllWatche";
import AllFragrance from "./Pages/Fragrance/AllFragrance";

const App = () => {
  const [theme] = useThemeHook();

  // Component to redirect to default language
  const RedirectToDefaultLanguage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
      if (location.pathname === '/') {
        navigate('/en'); // Redirect to default language
      }
    }, [navigate, location.pathname]);

    return null;
  };

  // Component to handle direction based on language
  const DirectionHandler = () => {
    const location = useLocation();
    const lang = location.pathname.split('/')[1] || 'en'; // Get the language from the path, default to 'en'

    React.useEffect(() => {
      document.body.classList.remove('ltr', 'rtl'); // Remove previous direction classes
      document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr'); // Add new direction class
    }, [lang]);

    return null;
  };

  const [cartItems, setCartItems] = useState([
    { name: 'US POLO ASSN. 1000-01 WATCH FOR MEN', price: 10 },
    { name: 'LATTAFA ANA ABIYEDH EDP UNISEX', price: 20 },
    // ... more cart items
  ]);

  const location = useLocation();

  return (
    <>
    
    <RedirectToDefaultLanguage />
    <DirectionHandler /> {/* Handle direction change */}
      <Header cartItems={cartItems} />
      <RightCart cartItems={cartItems} setCartItems={setCartItems} theme={theme} />
      <main className={theme ? 'bg-light-black' : 'bg-light'} style={{ paddingTop: '100px' }}>
    
        <Routes>
          <Route path="/:lang/allproducts" element={<Allproducts setCartItems={setCartItems} cartItems={cartItems} />} />
          <Route path="/:lang/cheakOut" element={<CheakOut products={cartItems} />} />
          <Route path="/:lang" element={<Home cartItems={cartItems} />} />
          <Route path="/:lang/my-account" element={<MyAccount />} />
          <Route path="/:lang/search" element={<Search />} />
          <Route path="/:lang/sign-in" element={<SignIn />} />
          <Route path="/:lang/register" element={<Register />} />
          <Route path="/:lang/cardes" element={<Cardes />} />
          <Route path="/:lang/cart" element={<Cart />} />
          <Route path="/:lang/blogs" element={<Blogs />} />
          <Route path="/:lang/product-details" element={<ProductDetails />} />
          <Route path="/:lang/gift" element={<Gift />} />
          <Route path="/:lang/giftDetails" element={<GiftDetails />} />
          <Route path="/:lang/refund" element={<Refund />} />
          <Route path="/:lang/privacy" element={<Privacy />} />
          <Route path="/:lang/terms" element={<Terms />} />
          <Route path="/:lang/allBag" element={<AllBag />} />
          <Route path="/:lang/allWatche" element={<AllWatche />} />
          <Route path="/:lang/allFragrance" element={<AllFragrance />} />
        </Routes>
        
         {/* Conditionally render the footer if the path is NOT '/cart' */}
         {!location.pathname.includes('/cart') && <AppFooter />}
      </main>
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
