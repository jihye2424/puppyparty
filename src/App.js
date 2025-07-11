import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainBanner from "./components/MainBanner";
import Navigation from "./components/Navigation";
import Categori from "./components/Categori";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { useState } from "react";
import Sale from "./components/Sale";
import EventSection from "./components/EventSection";
import ProductPage from "./components/ProductPage";
import BestProducts from "./components/BestProducts";

const App = () => {
  // 장바구니에 담긴 상품 목록 상태 관리
  const [cartItem, setCartItem] = useState([]);
  /**
   * 장바구니에 상품 추가 함수
   * - 이미 담긴 상품이면 count 증가
   * - 새 상품이면 count 1로 추가
   */
  const handleAddToCart = (item) => {
    setCartItem((prev) => {
      // 기존 장바구니에 동일한 id를 가진 상품이 있는지 확인
      const temp = prev.find((i) => {
        return i.id === item.id;
      });
      let newItem = null;
      if (temp) {
        // 이미 존재하는 상품이면 count만 1 증가시켜서 업데이트
        newItem = prev.map((j) => {
          return j.id === item.id ? { ...j, count: j.count + 1 } : j;
        });
      } else {
        // 새 상품이면 count: 1로 추가

        newItem = [...prev, { ...item, count: 1 }];
      }
      return newItem;
    });
  };
  /**
   * 장바구니에서 수량 조절 함수
   * - count가 1보다 작으면 무시 (0 이하 방지)
   * - 해당 id를 가진 상품의 count 값을 업데이트
   */
  const updateCartItemCount = (id, count) => {
    // 수량이 0 이하가 되지 않도록 예외 처리
    if (count < 1) return;
    setCartItem((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, count } : item;
      });
    });
  };
  /**
   * 장바구니에서 상품 삭제 함수
   * - 해당 id를 가진 상품을 배열에서 제거
   */
  const deleteCartItem = (id) => {
    setCartItem((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  return (
    <BrowserRouter>
      <div id="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <MainBanner />
                <BestProducts />
                <Sale />
                <Categori />
                <EventSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Cart
                  cartItem={cartItem}
                  updateCount={updateCartItemCount}
                  onDelete={deleteCartItem}
                />
                <Footer />
              </>
            }
          />
          {/* 상품 상세페이지 */}
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
