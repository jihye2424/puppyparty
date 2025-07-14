import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Card = ({ products, onAdd }) => {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    // props 먼저 분해!
    const { name, description, price, image } = products;
    const id = products["product-ID"]; // 상세 이동용
    const getImageSrc = () => {
        if (!isHover) return `${process.env.PUBLIC_URL}${image}`;
        //hover처리
        if (isHover) {
            return `${process.env.PUBLIC_URL}${image.replace("-1", "-2")}`;
        }
        return `${process.env.PUBLIC_URL}${image}`;
    };
    return (
        <div
            className="hoverCard"
            onClick={() => navigate(`/product/${id}`)}
            onMouseEnter={() => {
                setIsHover(true);
            }}
            onMouseLeave={() => {
                setIsHover(false);
            }}
        >
            <div id="card">
                <img className="card-img" src={getImageSrc()} alt={name} />
                <div className="card-one">
                    <div className="card-two">
                        <p className="card-name">{name}</p>
                        <p className="card-des">{description}</p>
                    </div>
                    <div className="card-three">
                        <p className="card-price">{`${price.toLocaleString()} ￦`}</p>
                        <div>
                            <div
                                className="card-cart"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onAdd({
                                        ...products,
                                        id: products["product-ID"],
                                    });
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
