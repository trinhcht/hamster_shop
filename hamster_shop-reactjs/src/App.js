import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import {HomePage} from "./components/pages/Homepage";
import Detail from "./components/pages/Detail";
import {Cart} from "./components/pages/Cart";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
// import {QuantityProvider} from "./component/ValueIconCartContext";
import Login from "./components/login";

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
        // <>
        //     <QuantityProvider>
        //         <Header/>
        //         <Routes>
        //             <Route path={"/login"} element={<Login/>}/>
        //             <Route path={"/home"} element={<HomePage/>}/>
        //             <Route path={"/product"} element={<Product/>}/>
        //             <Route path={"/cart"} element={<Cart/>}/>
        //             <Route path={"/detail/:id"} element={<Detail/>}/>
        //             <Route path={"/order-detail/:totalPrice"} element={<PaymentSuccess/>}/>
        //             <Route path={"/user/history"} element={<HistoryShopping/>}/>
        //             <Route path={"/user/information"} element={<InformationPersonal/>}/>
        //             <Route path={"/cart/payment"} element={<PaymentStatus/>}/>
        //         </Routes>
        //         <Footer/>
        //     </QuantityProvider>
        // </>
    );
}

export default App;