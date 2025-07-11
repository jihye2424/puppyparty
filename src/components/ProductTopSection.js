import React, { useState } from 'react';
import ProductImageSlider from './ProductImageSlider';
import { CiShare2 } from "react-icons/ci";

const ProductTopSection = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 13000;
  const totalPrice = price * quantity;

  const handleQuantity = (type) => {
    if (type === 'minus' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'plus') {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="product-top">
      <div className="image-box">
        <ProductImageSlider />
      </div>
      <div className="info-box">
        <div className='title-best'>
        <h2 className="title">퍼피러브 핑크샌드</h2>
        <p className='best'>BEST</p>
        </div>
        <p className="desc">고구마 쿠키에 딸기 크림을 샌드한 러블리한 케이크</p>
        <div className="rating">★★★★★ <span>5.0</span></div>
        <div className='price-icon'>
        <div className="price">{price.toLocaleString()}원</div>
        <CiShare2 />
        </div>
        <div className="option">
          <label>옵션</label>
          <select>
            <option>옵션을 선택해 주세요</option>
            <option>퍼피러브 핑크샌드</option>
          </select>
        </div>

        <div className="quantity-box">
          <div className='box-number'>
          <span>퍼피러브 핑크샌드</span>
          <div className="quantity">
            <button onClick={() => handleQuantity('minus')}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantity('plus')}>+</button>
          </div>
          </div>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>

       <div className="total">
          <p>총 상품금액 (수량):</p> <span className="count">{totalPrice.toLocaleString()}원 ({quantity}개)</span>
        </div>

        <div className="btn-box">
          <button className="cart">장바구니 담기</button>
          <button className="buy">구매하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductTopSection;
