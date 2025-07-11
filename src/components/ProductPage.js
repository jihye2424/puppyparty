import React from 'react';
import Navigation from './Navigation';
import ProductTopSection from './ProductTopSection';
import ProductTabs from './ProductTabs';
import Footer from './Footer';

const ProductPage = () => {
    return (
        <div id='product-page'>
            <Navigation/>
            <ProductTopSection/>
            <ProductTabs/>
            <Footer/>
        </div>
    );
};

export default ProductPage; 
