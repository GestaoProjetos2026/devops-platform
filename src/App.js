import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/topo';
import Tabs from './components/Tabs';
import ProductGrid from './components/produtosGerais';
import Checkout from './components/Checkout';
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home');
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter(item => item.cartId !== cartId));
  };

  const goToCheckout = () => setView('checkout');
  const goToHome = () => setView('home');
  const goToLogin = () => setView('login');
  
  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setView('details');
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setView('home');
  };

  const handleLogout = () => {
    setUser(null);
    setView('home');
  };

  return (
    <div className="App">
      <Navbar 
        cartCount={cart.length} 
        onCartClick={goToCheckout} 
        onLogoClick={goToHome}
        onProfileClick={user ? handleLogout : goToLogin}
        isLoggedIn={!!user}
        userName={user?.name}
      />
      
      <div className="main-container">
        {view === 'home' && (
          <>
            <Hero />
            <Tabs />
            <ProductGrid 
              onAddToCart={addToCart} 
              onShowDetails={showProductDetails} 
            />
          </>
        )}
        
        {view === 'checkout' && (
          <Checkout 
            cartItems={cart} 
            onRemoveItem={removeFromCart} 
            onBackToHome={goToHome} 
          />
        )}

        {view === 'login' && (
          <Login 
            onLogin={handleLogin} 
            onCancel={goToHome} 
          />
        )}

        {view === 'details' && selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            onAddToCart={addToCart} 
            onBack={goToHome} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
