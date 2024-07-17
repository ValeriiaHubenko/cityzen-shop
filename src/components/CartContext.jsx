import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';


const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity, totalPrice: (item.quantity + product.quantity) * item.price } : item
        );
      }
      return [...prevCart, { ...product, totalPrice: product.quantity * product.price }];
    });
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  
  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeItem, calculateTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};


CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };