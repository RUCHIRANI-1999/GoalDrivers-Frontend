import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Analytics from "./pages/Analytics.jsx";
import Comments from "./pages/Comments.jsx";
import DashboardRoutes from "./navigation/DashboardRoutes";
import Sidebar from "./components/Sidebar";
import DashboardHome from "./pages/DashboardHome";
import Product from "./pages/Product";
import ProductList from "./pages/Productlist";



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="" element={<Home/>}/> */}
                <Route path="dash" element={<DashboardRoutes/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="" element={<DashboardHome/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="comment" element={<Comments/>}/>
                <Route path="analytics" element={<Analytics/>}/>
                <Route path="side_bar" element={<Sidebar/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="productList" element={<ProductList/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
