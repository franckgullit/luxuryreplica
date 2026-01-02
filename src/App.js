import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import About from './Pages/About/About.jsx';
import FAQ from './Pages/FAQ/FAQ.jsx';
import Privacy from './Pages/Privacy/Privacy.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';
import Cart from "./Pages/Cart/Cart.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;