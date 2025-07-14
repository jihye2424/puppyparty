import React from 'react';

const ReturnExchangeInfo = () => {
  return (
    <section className="return-exchange-info">
      <h2>반품/교환정보</h2>
      <hr />

      <div className="notice">
        <strong>반품/교환 안내</strong>
        <p>
          반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소 등을 협의하신 후 반품상품을 발송해 주시기 바랍니다.
        </p>
      </div>

      <table className="info-table">
        <tbody>
          <tr>
            <th>판매자 지정택배사</th>
            <td>한진택배</td>
            <th>교환배송비</th>
            <td>6,000원</td>
          </tr>
          <tr>
            <th>반품배송비</th>
            <td colSpan="3">편도 3,000원 (최초 배송비 무료인 경우 ,000원 부과)</td>
          </tr>
          <tr>
            <th>보내실 곳</th>
            <td colSpan="3">
              경기도 수원시 팔달구 권광로 146 벽산그랜드코아 401호
            </td>
          </tr>
          <tr>
            <th>반품/교환 사유에 따른 요청 가능 기간</th>
            <td colSpan="3">
              구매자 단순 변심은 상품 수령 후 7일 이내 <span>(구매자 반품배송비 부담)</span><br />
              표시/광고와 상이, 계약 내용과 다르게 이행된 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내 <span>(판매자 반품 배송비 부담)</span><br />
              둘 중 하나 경과 시 반품/교환 불가
            </td>
          </tr>
          <tr>
            <th>반품/교환 불가능 사유</th>
            <td colSpan="3">
              <ol>
                <li>반품요청기간이 지난 경우</li>
                <li>구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우 (단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)</li>
                <li>구매자의 책임있는 사유로 포장이 훼손되어 상품 가치가 현저히 상실된 경우 (예: 식품, 화장품, 향수류, 음반 등)</li>
                <li>구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 (라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)</li>
                <li>시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우</li>
                <li>고객의 요청사항에 맞춰 제작에 들어가는 맞춤제작상품의 경우 (판매자에게 회복불가능한 손해가 예상되고, 그러한 예정으로 청약철회권 행사가 불가하다는 사실을 서면 등으로 받은 경우)</li>
                <li>복제가 가능한 상품 등의 포장을 훼손한 경우 (CD/DVD/GAME/도서의 경우 포장 개봉 시)</li>
              </ol>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="seller-info">
        <strong>판매자정보</strong>
        <button className="detail-btn">상세정보 확인</button>
        <table className="seller-table">
          <tbody>
            <tr>
              <th>상호명</th>
              <td>퍼피파티 (사업자 / 개인 사업자)</td>
              <th>대표자</th>
              <td>멍조이</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReturnExchangeInfo;