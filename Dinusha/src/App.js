import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "../src/dinusha/Home";
import ProductDetails from "./dinusha/ProductDetails";
import AddToCartProducts from "./dinusha/AddToCartProducts";
import OrderConfirm from "./dinusha/OrderConfirm";
import Report from './dinusha/Report/Client/Report';
import MembershipNotification from "./dinusha/Membership/MembershipNotification";
import SamplePaymentPage from "./dinusha/SamplePaymentPage";
import AboutPage from "../src/dinusha/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="confirm-order/:amount" element={<OrderConfirm />} />
        <Route path="addToCart/:id" element={<AddToCartProducts />} />
        {/* <Route path="report" element={<Report/>}/> */}
        <Route path="product" element={<Product />} />
        <Route path="report" element={<ProductDetails />} />
        <Route path="membershipNotification" element={<MembershipNotification />} />
        <Route path="samplePayment" element={<SamplePaymentPage />} />
        <Route path="aboutus" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
