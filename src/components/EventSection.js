
import EventBanner from './EventBanner';

const EventSection = () => {
  return (
    <div className='event'>
        <div className="instareivew-msg">
        <h3>EVENT</h3>
        <p>Puppy Party의 소중한 고객님을 위해 준비했어요</p>
      </div>
    <div className="event-section" style={{ display: 'flex', gap: '2rem'}}>
      <EventBanner
        bgImage="/images/slide/slide-1.png"
        title="인스타그램 EVENT"
        description="태그하고 게시물을 업로드하면 추첨을 통해 선물을 드려요!"
        buttonText="Instagram 방문"
        link="https://instagram.com/puppyparty"
      />

      <EventBanner
        bgImage="/images/slide/slide-2.png"
        title="첫 구매 EVENT"
        description="신규 가입 첫 구매 시 특별 쿠폰을 드려요!"
        buttonText="  쿠폰 받으러 가기  "
        link="/coupon"
      />
    </div>
    </div>
  );
};

export default EventSection;
