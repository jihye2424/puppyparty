import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


// ▶ 커스텀 화살표
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className={"arrow-next"} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={"arrow-prev"} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

const MainBanner = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  
  customPaging: (i) => (
    <div
      style={{
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: "white",
        opacity: 0.7,
        transition: "all 0.3s ease",
      }}
    />
  ),

  appendDots: dots => (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "5px",
        width: "100%",
      }}
    >
      <ul style={{ margin: 0, padding: 0, display: "flex", gap: "8px" }}>{dots}</ul>
    </div>
  ),
};

  return (
    <section id="main-banner">
        <Slider className="slider" {...settings}>
          <div className="slide-1">
            <div className="slide-wrap">
              <div className="slide-img-wrap">
                <div className="slide-img"></div>
              </div>
              <div className="slide-content">
                <h1>7월 한정!<br/>여름 파티 지금 시작해요</h1>
                <h2>여름 파티에 필요한 모든 걸 한 번에! 여름 파티 SET 구성 특별가</h2>
                <p>2025.07.01 ~ 07.31</p>
                <button>자세히 보기 →</button>
              </div>
            </div>
          </div>
          <div className="slide-2">
            <div className="slide-wrap">
              <div className="slide-img-wrap">
                <div className="slide-img"></div>
              </div>
              <div className="slide-content">
                <h1>세상에 하나뿐인 케이크!<br/>DIY로 직접 만들어보세요</h1>
                <h2>간편하고 즐거운 생일 케이크 만들기, 반려견 맞춤 키트 런칭</h2>
                <p>2025.07.05 ~ 08.10</p>
                <button>자세히 보기 →</button>
              </div>
            </div>
          </div>
          <div className="slide-3">
            <div className="slide-wrap">
              <div className="slide-img-wrap">
                <div className="slide-img"></div>
              </div>
              <div className="slide-content">
                <h1>반려견 기념일을 위한<br/>프리미엄 간식 패키지</h1>
                <h2>기념일 맞춤 간식 선물세트 최대 30% 할인!</h2>
                <p>2025.07.01 ~ 소진 시까지</p>
                <button>자세히 보기 →</button>
              </div>
            </div>
          </div>
          <div className="slide-4">
            <div className="slide-wrap">
              <div className="slide-img-wrap">
                <div className="slide-img"></div>
              </div>
              <div className="slide-content">
                <h1>나랑 너, 우리 함께<br/>강아지 커플룩 컬렉션</h1>
                <h2>여름 시즌 한정! 커플 의류 전 상품 1+1 이벤트</h2>
                <p>2025.07.01 ~ 07.20</p>
                <button>자세히 보기 →</button>
              </div>
            </div>
          </div>
        </Slider>
    </section>
  );
};

export default MainBanner;