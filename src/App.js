import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Burger from "./routes/Burger";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";
import Confirmation from "./routes/Confimation";
import NotFound from "./routes/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/burger/:burgerId" element={<Burger />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
