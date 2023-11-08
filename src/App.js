import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header/Header";
import ProductDetails from "./containers/ProductDetails";
import Home from "./containers/Home";
import ShopCategory from "./containers/ShopCategory/ShopCategory";
import Cart from "./containers/Cart";
import LoginSignup from "./containers/LoginSignup/LoginSignup";
import Footer from "./containers/Footer/Footer";
import men_banner from "./assets/mens_banner.jpg";
import women_banner from "./assets/women_banner.jpg";
import kids_banner from "./assets/kids_banner.jpg";
import Product from "./containers/Product/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product/:productId" element={<Product />} />
          {/*  <Route path="/products/:productId" element={<ProductDetails />} />  this route is fetch from fake api */}
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route>404 Not Found!</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
