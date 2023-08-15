import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ListarProductos from "./components/ListarProductos";
import Item from "./components/Item";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import NavbarOk from "./components/NavbarOk";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Jewerly from "./pages/Jewerly";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarOk />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ListarProductos" element={<ListarProductos />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Jewerly" element={<Jewerly />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
