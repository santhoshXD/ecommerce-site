
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BuyTshirts from "./components/BuyTshirts";
import WomenTshirts from "./components/WomenTshirts";
import MenTshirt from "./components/MenTshirt";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import LoginPage from "./components/LoginPage";

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/shop" element={<BuyTshirts />} />
  <Route path="/women-tshirts" element={<WomenTshirts />} />
  <Route path="/men-tshirts" element={<MenTshirt />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/shop/product/:id" element={<ProductDetails />} />
  <Route path="/login" element={<LoginPage/>}/>

  </Routes>
  
  </BrowserRouter>

  </>
  );
}

export default App;
