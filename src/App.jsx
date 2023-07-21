import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ListarProductos from "./pages/listarProductos";
import Item from "./pages/Item";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ListarProductos" element={<ListarProductos />} />
          <Route path="/Details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
