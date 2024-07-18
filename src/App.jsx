import { Route, Switch } from "wouter";
import { CartProvider } from "./components/CartContext";
// import Header from './components/Header'
// import Footer from './components/Footer';
// import Subscribe from './components/Subscribe';
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SuccessfulPayment from "./pages/SuccessfulPayment";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import MenuProducts from './components/MenuProducts'
import "./App.css";


function App() {
  return (
    <>
    <CartProvider>
      <Switch>
      <Route path="/">
        <Home />
      </Route>

        <Route path="/cityzen">
          <Home />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/productinfo/:id">
          <ProductInfo />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/successfulpayment">
          <SuccessfulPayment />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
         
      </Switch>
      </CartProvider>
    </>
  );
}

export default App;
