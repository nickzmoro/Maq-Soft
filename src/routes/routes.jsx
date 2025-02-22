import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/carrinho" element={<Cart />}></Route>
    </Routes>
  );
}

export default Router;
