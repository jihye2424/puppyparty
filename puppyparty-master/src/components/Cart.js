import { LuShoppingCart } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = ({ cartItem, updateCount, onDelete }) => {
    const navigate = useNavigate();
    // 1. 체크 상태 관리
    const [checkedItems, setCheckedItems] = useState({});
    // 2. 전체선택 상태 계산
    const allChecked =
        cartItem.length > 0 && cartItem.every((item) => checkedItems[item.id]);
    // 3. 전체선택 체크박스 핸들러
    const handleCheckAll = (e) => {
        const checked = e.target.checked;
        // 모든 아이템 체크 상태를 전체 선택/해제로 변경
        const newCheckedItems = {};
        cartItem.forEach((item) => {
            newCheckedItems[item.id] = checked;
        });
        setCheckedItems(newCheckedItems);
    };
    // 4. 개별 체크박스 핸들러
    const handleCheckItem = (e, id) => {
        const checked = e.target.checked;
        setCheckedItems((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };
    const totalPrice = cartItem.reduce((sum, item) => {
        return sum + item.price * item.count;
    }, 0);
    // cartItem이 바뀔 때 체크 상태 초기화 (모두 선택 안 된 상태)
    useEffect(() => {
        const initialChecked = {};
        cartItem.forEach((item) => {
            initialChecked[item.id] = true;
        });
        setCheckedItems(initialChecked);
    }, [cartItem]);
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
                            <input
                                type="checkbox"
                                checked={allChecked}
                                onChange={handleCheckAll}
                            />
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
                                <p>장바구니가 비어있습니다.</p>
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
                                                        checked={
                                                            !!checkedItems[
                                                                item.id
                                                            ]
                                                        }
                                                        onChange={(e) =>
                                                            handleCheckItem(
                                                                e,
                                                                item.id
                                                            )
                                                        }
                                                    />
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/images/${item.setFile}/${item.filename}`}
                                                        alt={item.name}
                                                        onClick={() =>
                                                            navigate(
                                                                `/product/${item.id}`
                                                            )
                                                        }
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </div>
                                                <div className="item-info-right">
                                                    <div className="item-wrap">
                                                        <div className="item-info-name">
                                                            <h4>{item.name}</h4>
                                                            <p>
                                                                {item.price.toLocaleString()}
                                                                원
                                                            </p>
                                                        </div>
                                                        {/* 2: 금액+삭제버튼+수량버튼 */}
                                                        <div className="item-delete">
                                                            <h3>
                                                                {(
                                                                    item.price *
                                                                    item.count
                                                                ).toLocaleString()}
                                                                원
                                                            </h3>
                                                            <p
                                                                className="delete-icon"
                                                                onClick={() => {
                                                                    onDelete(
                                                                        item.id
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
                                                                    item.id,
                                                                    item.count -
                                                                        1
                                                                )
                                                            }
                                                        >
                                                            <FaMinus />
                                                        </button>
                                                        <p className="item-count">
                                                            {item.count}
                                                        </p>
                                                        <button
                                                            onClick={() =>
                                                                updateCount(
                                                                    item.id,
                                                                    item.count +
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
                            <li>
                                배송비 <span>(50,000원 이상 무료배송)</span>
                            </li>
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
