import React from 'react';
import Layout from "../components/layout/layout.jsx";
import SliderSkeleton from "../skeleton/slider-skeleton.jsx";
import CategoriesSkeleton from "../skeleton/categories-skeleton.jsx";
import ProductsSkeleton from "../skeleton/products-skeleton.jsx";
import BrandsSkeleton from "../skeleton/brands-skeleton.jsx";

const Test = () => {
    return (
        <Layout>
            <SliderSkeleton/>
            <CategoriesSkeleton/>
            <ProductsSkeleton/>
            <BrandsSkeleton/>
        </Layout>
    );
};

export default Test;