import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // ✅ 추가

const BestProducts = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const container = useRef();
  const navigate = useNavigate(); // ✅ 추가

  // 상품 ID를 기반으로 상세페이지 이동
  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section id="best-products" ref={container}>
      <div className="best-title">
        <h1>BEST PRUDUCTS</h1>
        <p>Puppy Party! 에서 가장 인기 있는 상품이에요</p>
      </div>

      <div className="best-item-wrap">
        {/* 퍼피몽글 케이프 */}
        <div className="best-item">
          <img src={`${process.env.PUBLIC_URL}/images/bestproducts/party2-2.png`} alt="party2-2" />
          <div className="best-item-content">
            <h2>퍼피몽글 케이프</h2>
            <p><span>★★★★★</span> (9,456)</p>
            <p>6,500 ₩</p>
            <p>극세사 소재에 말랑한 리본 포인트. <br/> 파티룩 완성 아이템</p>
          </div>
          <button onClick={() => goToProduct("party-02")}><FiSearch /><span>자세히 보기</span></button>
        </div>

        {/* 퍼피러브 핑크샌드 */}
        <div className="best-item">
          <img src={`${process.env.PUBLIC_URL}/images/bestproducts/dogCake3-1.png`} alt="dogCake3-1" />
          <div className="best-item-content">
            <h2>퍼피러브 핑크샌드</h2>
            <p><span>★★★★★</span> (6,849)</p>
            <p>15,000 ₩</p>
            <p>고구마 쿠키에 딸기 크림을 샌드한 <br/> 러블리한 케이크</p>
          </div>
          <button onClick={() => goToProduct("cake-03")}><FiSearch /><span>자세히 보기</span></button>
        </div>

        {/* 모찌 패밀리 시밀러룩 */}
        <div className="best-item">
          <img src={`${process.env.PUBLIC_URL}/images/bestproducts/coupleT1-1.png`} alt="coupleT1-1" />
          <div className="best-item-content">
            <h2>모찌 패밀리 시밀러룩</h2>
            <p><span>★★★★★</span> (2,453)</p>
            <p>33,200 ₩</p>
            <p>우리 둘이 하나처럼, <br/> 모찌처럼 귀엽게!</p>
          </div>
          <button onClick={() => goToProduct("coupleT-01")}><FiSearch /><span>자세히 보기</span></button>
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
