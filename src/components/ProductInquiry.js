import React, { useState } from 'react';


const ProductInquiry = () => {
  const [inquiries, setInquiries] = useState([]);

  const handleWriteClick = () => {
    alert('문의 작성 기능은 추후 구현 예정입니다.');
  };

  return (
    <section className="product-inquiry">
      <p className="description">
        상품에 대해 궁금한 점을 해결해 드립니다.
      </p>
      <hr />
      <div className="inquiry-list">
        {inquiries.length === 0 ? (
          <p className="no-inquiry">게시물이 없습니다.</p>
        ) : (
          inquiries.map((item, idx) => (
            <div key={idx} className="inquiry-item">
              {/* 문의 내용 렌더링 */}
            </div>
          ))
        )}
      </div>
      <hr />
      <div className="write-button-wrapper">
        <button className="write-button" onClick={handleWriteClick}>
          작성하기
        </button>
      </div>
    </section>
  );
};

export default ProductInquiry;