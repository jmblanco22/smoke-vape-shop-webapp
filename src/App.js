import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart'; // Import the new Cart page

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: 'Courier New', Courier, monospace;
        background-color: #0c0c0c;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      * { box-sizing: border-box; }
      .App {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `}
  />
);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [flyImage, setFlyImage] = useState(null);

  const handleAddToCart = (productToAdd) => {
    setFlyImage(productToAdd.image); // Show animation
    setTimeout(() => setFlyImage(null), 800); // Hide after animation

    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === productToAdd.id);
      if (isItemInCart) {
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + (productToAdd.quantity || 1) }
            : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: productToAdd.quantity || 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // If quantity is 0 or less, remove the item
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };


  return (
    <Router basename="/smoke-vape-shop-webapp">
      <GlobalStyle />
      <div className="App">
        <Header cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
        <AnimatePresence>
          {flyImage && (
            <motion.img
              key="fly"
              src={flyImage}
              initial={{ position: 'fixed', left: '50vw', top: '50vh', width: 120, opacity: 1, zIndex: 9999 }}
              animate={{
                left: ['50vw', '70vw', '90vw'],
                top: ['50vh', '30vh', '30px'],
                width: [120, 60, 40],
                opacity: [1, 0.8, 0.5],
                rotate: [0, 30, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
              style={{ pointerEvents: 'none', borderRadius: '50%' }}
            />
          )}
        </AnimatePresence>
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveFromCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
