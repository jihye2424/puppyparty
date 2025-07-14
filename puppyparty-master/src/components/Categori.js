import CardSet from "./CardSet";

const Categori = ({ data, onAddCart }) => {
    return (
        <div className="categori">
            <div className="categori-title">
                <h1>카테고리별 인기 상품</h1>
                <p>카테고리별로 판매량이 높은 TOP3 제품을 모았어요!</p>
            </div>
            <div className="card-wrap">
                {/* card 호출 내용 :  */}
                {data.map((item, idx) => {
                    return (
                        <CardSet
                            key={item.setID}
                            setItem={item}
                            setName={idx % 2 ? "even" : "odd"}
                            setIdx={idx}
                            onAdd={onAddCart}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Categori;
