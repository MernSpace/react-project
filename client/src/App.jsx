import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import Test from "./pages/test.jsx";
import ProductByBrand from "./pages/product-by-brand.jsx";
import ProductByCategory from "./pages/product-by-category.jsx";
import ProductByKeyword from "./pages/product-by-keyword.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/by-brand/:id" element={<ProductByBrand/>}/>
                <Route path="/by-category/:id" element={<ProductByCategory/>}/>
                <Route path="/by-keyword/:keyword" element={<ProductByKeyword/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;