import React, { useState } from "react";
const ProductImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);
    if (!images || images.length === 0) {
        return (
            <div className="slider-container">이미지를 불러올 수 없습니다.</div>
        );
    }
    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className="slider-container">
            <button className="arrow left" onClick={prevSlide}>
                &lt;
            </button>
            <div className="slider-image-wrapper">
                <img
                    key={images[index]} // :리렌더링 최적화
                    src={images[index]}
                    alt={`상품 이미지 ${index + 1}`}
                    className="slider-image"
                />
            </div>
            <button className="arrow right" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};
export default ProductImageSlider;
