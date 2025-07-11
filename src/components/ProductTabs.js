import React, { useState } from 'react';
import ReviewSection from './ReviewSection';
import ProductInquiry from './ProductInquiry';
import ReturnExchangeInfo from './ReturnExchangeInfo';

const TABS = ['상품정보', '구매후기', '문의사항', '구매안내'];

const ProductTabs = () => {
const [activeTab, setActiveTab] = useState('상품정보');

  const renderContent = () => {
    switch (activeTab) {
      case '상품정보':
        return <p ><img src='/image/review.png"},' alt='review'/></p>;
      case '구매후기':
        return <ReviewSection/>
      case '문의사항':
        return <ProductInquiry/>
      case '구매안내':
        return <ReturnExchangeInfo/>;
      default:
        return null;
    }
  };

  return (
    <div className="product-tabs">
      <div className="tab-buttons">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs;