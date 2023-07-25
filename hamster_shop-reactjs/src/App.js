import "./App.css";
// import { HomePage } from "./component/pages/HomePage";
// import { Detail } from "./component/pages/Detail";
// import { Cart } from "./component/pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import {HomePage} from "./components/pages/Homepage";
import Detail from "./components/pages/Detail";
import {Cart} from "./components/pages/Cart";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;