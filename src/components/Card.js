import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const Card = ({ products, onAdd }) => {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const getImageSrc = () => {
        if (!isHover) return `${process.env.PUBLIC_URL}${image}`;
        //hover처리
        if (isHover) {
            return `${process.env.PUBLIC_URL}${image.replace("-1", "-2")}`;
        }
        return `${process.env.PUBLIC_URL}${image}`;
    };
    const { name, description, price, image } = products;
    return (
        <div
            className="hoverCard"
            onMouseEnter={() => {
                setIsHover(true);
            }}
            onMouseLeave={() => {
                setIsHover(false);
            }}
        >
            <div id="card">
                <img
                    className="card-img"
                    src={getImageSrc()}
                    alt="카드 이미지"
                />
                <div className="card-one">
                    <div className="card-two">
                        <p className="card-name">{name}</p>
                        <p className="card-des">{description}</p>
                    </div>
                    <div className="card-three">
                        <p className="card-price">{`${price}￦`}</p>
                        <div>
                            <div
                                className="card-cart"
                                onClick={() => {
                                    onAdd(products);
                                    navigate("/cart");
                                }}
                            >
                                <LuShoppingCart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;