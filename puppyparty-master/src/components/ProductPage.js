import { useParams } from "react-router-dom";
import data from "../asset/category.json"; // ① JSON 전체 가져오기
import ProductTopSection from "./ProductTopSection";
import ProductTabs from "./ProductTabs";

const flattenProducts = data.flatMap((set) => set.products); // ② 모든 상품을 한 배열로 평탄화

const ProductPage = ({onAddCart}) => {
    const { id } = useParams(); // ③ URL 파라미터
    const product = flattenProducts.find((p) => p["product-ID"] === id);

    if (!product) {
        return (
            <div style={{ padding: 80, textAlign: "center" }}>
                상품을 찾을 수 없습니다.
            </div>
        );
    }

    return (
        <div id="product-page">
            {/* ④ 상품 객체를 prop으로 전달 */}
            <ProductTopSection product={product} onAddCart={onAddCart} />
            <ProductTabs product={product} />
        </div>
    );
};

export default ProductPage;
