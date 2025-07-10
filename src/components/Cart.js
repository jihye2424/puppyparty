import { LuShoppingCart } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItem, updateCount, onDelete }) => {
    const navigate = useNavigate();
    const totalPrice = cartItem.reduce((sum, item) => {
        return sum + item.price * item.count;
    }, 0);
    return (
        <div className="cart-container">
            {/* 장바구니 */}
            <div className="cart-name">
                <h2>
                    <LuShoppingCart />
                    장바구니
                </h2>
                <p className="cart-subtxt">
                    결제 금액에 따른 구매 금액별 사은품 증정
                </p>
            </div>
            <div className="cart-buy">
                {/* 왼쪽 - 상품리스트 */}
                <div className="cart-count">
                    {/* 상품 전체 갯수 */}
                    <div className="select-all">
                        <label>
                            <input type="checkbox" checked />
                            <span>전체선택</span>
                        </label>
                        <p className="mobile-gift">구매 금액별 사은품</p>
                        <p className="cart-product">
                            <span>{cartItem.length}</span>개의 상품이 있어요
                        </p>
                    </div>
                    <div className="select-line" />
                    <div className="cart-list">
                        {cartItem.length === 0 ? (
                            // 빈 장바구니
                            <div className="empty-cart">
                                <p>장바구니가 비어 있습니다.</p>
                                <button
                                    className="home"
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                >
                                    상품 보러가기
                                </button>
                            </div>
                        ) : (
                            // 상품 담았을 때
                            <ul>
                                {cartItem.map((item) => {
                                    return (
                                        <li
                                            key={item.id}
                                            className="cart-count-wrap"
                                        >
                                            {/* 1: 체크박스+이미지+상품명 */}
                                            <div className="item-info">
                                                <div className="item-info-left">
                                                    <input
                                                        type="checkbox"
                                                        checked
                                                    />
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/images/${cartItem.setFile}/${cartItem.filename}`}
                                                    />
                                                </div>
                                                <div className="item-info-right">
                                                    <div className="item-wrap">
                                                        <h4>
                                                            {cartItem.name}
                                                        </h4>
                                                        {/* 2: 금액+삭제버튼+수량버튼 */}
                                                        <div className="item-delete">
                                                            <h3>
                                                                {cartItem.price.toLocaleString()}
                                                                원
                                                            </h3>
                                                            <p
                                                                className="delete-icon"
                                                                onClick={() => {
                                                                    onDelete(
                                                                        cartItem.id
                                                                    );
                                                                }}
                                                            >
                                                                <FaRegTrashAlt />
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="item-count-wrap">
                                                        <button
                                                            onClick={() =>
                                                                updateCount(
                                                                    cartItem.id,
                                                                    cartItem.count -
                                                                        1
                                                                )
                                                            }
                                                        >
                                                            <FaMinus />
                                                        </button>
                                                        <p className="item-count">
                                                            {cartItem.count}
                                                        </p>
                                                        <button
                                                            onClick={() =>
                                                                updateCount(
                                                                    cartItem.id,
                                                                    cartItem.count +
                                                                        1
                                                                )
                                                            }
                                                        >
                                                            <FaPlus />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </div>
                {/* tablet, mobile 중간 선 */}
                <div className="cart-divider"></div>
                {/* 오른쪽 - 결제 요약 */}
                <div className="cart-summary">
                    <h2>결제 내역</h2>
                    <div className="summary-price">
                        <ul>
                            <li>총 상품 금액</li>
                            <li>{totalPrice.toLocaleString()}원</li>
                        </ul>
                        <ul>
                            <li>할인 금액</li>
                            <li>0원</li>
                        </ul>
                        <ul>
                            <li>배송비</li>
                            <li>
                                {(totalPrice > 50000
                                    ? 0
                                    : 3000
                                ).toLocaleString()}
                                원
                            </li>
                        </ul>
                        <div className="price-line"></div>
                        <ul className="total-price">
                            <li>총 결제 금액</li>
                            <li>
                                {(
                                    totalPrice + (totalPrice > 50000 ? 0 : 3000)
                                ).toLocaleString()}
                                원
                            </li>
                        </ul>
                    </div>
                    <button>결제하기</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
