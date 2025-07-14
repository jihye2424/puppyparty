import React, { useState } from 'react';
import ReviewSection from './ReviewSection';
import ProductInquiry from './ProductInquiry';
import ReturnExchangeInfo from './ReturnExchangeInfo';

const TABS = ['상품정보', '구매후기', '문의사항', '구매안내'];

const ProductTabs = ({product}) => {
const [activeTab, setActiveTab] = useState('상품정보');
  console.log(product);
  const renderContent = () => {
    switch (activeTab) {
      case '상품정보':
        return (
        <img
          src={`${process.env.PUBLIC_URL}/images/detail/${product["product-ID"]}-detail.jpg`}
          alt="상품 상세 이미지"
        />
      );
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