import { Route, Switch } from "wouter";
import { CartProvider } from "./components/CartContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SuccessfulPayment from "./pages/SuccessfulPayment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

const base = "/cityzen";

function App() {
  return (
    <>
      <CartProvider>
        <Switch>
          <Route path={`${base}/`}>
            <Home />
          </Route>
          <Route path={`${base}/products`}>
            <Products />
          </Route>
          <Route path={`${base}/productinfo/:id`}>
            <ProductInfo />
          </Route>
          <Route path={`${base}/cart`}>
            <Cart />
          </Route>
          <Route path={`${base}/checkout`}>
            <Checkout />
          </Route>
          <Route path={`${base}/successfulpayment`}>
            <SuccessfulPayment />
          </Route>
          <Route path={`${base}/about`}>
            <About />
          </Route>
          <Route path={`${base}/contact`}>
            <Contact />
          </Route>
        </Switch>
      </CartProvider>
    </>
  );
}

export default App;
