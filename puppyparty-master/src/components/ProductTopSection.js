import React, { useState } from "react";
import ProductImageSlider from "./ProductImageSlider";
import { CiShare2 } from "react-icons/ci";
const ProductTopSection = ({ product, onAddCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState("");
    const { name, description, price, image } = product;
    const totalPrice = price * quantity;
    const handleQuantity = (type) =>
        setQuantity((q) => (type === "minus" ? Math.max(1, q - 1) : q + 1));
    // :흰색_확인_표시: 이미지 슬라이드를 위해 두 장 구성
    const image1 = `${process.env.PUBLIC_URL}${image}`;
    const image2 = `${process.env.PUBLIC_URL}${image.replace("-1", "-2")}`;
    return (
        <div className="product-top">
            <div className="image-box">
                <ProductImageSlider images={[image1, image2]} />
            </div>
            <div className="info-box">
                <div className="title-best">
                    <h2 className="title">{name}</h2>
                    <p className="best">BEST</p>
                </div>
                <p className="desc">{description}</p>
                <div className="rating">
                    ★★★★★ <span>5.0</span>
                </div>
                <div className="price-icon">
                    <div className="price">{price.toLocaleString()}원</div>
                    <CiShare2 />
                </div>
                <div className="option">
                    <label>옵션</label>
                    <select
                        value={selectedOption}
                        onChange={(e)=>{setSelectedOption(e.target.value)}}
                    >
                        <option>옵션을 선택해 주세요</option>
                        <option>{name}</option>
                    </select>
                </div>
                {selectedOption && (
                    <>
                <div className="quantity-box">
                    <div className="box-number">
                        <span>{name}</span>
                        <div className="quantity">
                            <button onClick={() => handleQuantity("minus")}>
                                -
                            </button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantity("plus")}>
                                +
                            </button>
                        </div>
                    </div>
                    <span>{totalPrice.toLocaleString()}원</span>
                </div>
                <div className="total">
                    <p>총 상품금액 (수량):</p>{" "}
                    <span className="count">
                        {totalPrice.toLocaleString()}원 ({quantity}개)
                    </span>
                </div>
                </>
                )}
                <div className="btn-box">
                    <button
                        className="cart"
                        onClick={() => {
                            onAddCart({
                                ...product,
                                id: product["product-ID"],
                                count: quantity,
                                selectedOption: selectedOption,
                            });
                        }}
                    >
                        장바구니 담기
                    </button>
                    <button className="buy">구매하기</button>
                </div>
            </div>
        </div>
    );
};
export default ProductTopSection;