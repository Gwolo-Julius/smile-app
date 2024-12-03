import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
