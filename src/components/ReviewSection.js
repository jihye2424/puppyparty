import React, { useState } from 'react';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: '이** 님',
      date: '2025.07.01',
      rating: 5,
      content: '구매자의 100%가 이 상품에 만족했어요',
    },
    {
      id: 2,
      user: '김** 님',
      date: '2025.07.01',
      rating: 5,
      content: '구매자의 100%가 이 상품에 만족했어요',
    },
  ]);

  const [newReview, setNewReview] = useState({
    user: '',
    rating: 5,
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addReview = () => {
    if (!newReview.user || !newReview.content) {
      alert('이름과 리뷰 내용을 입력해주세요.');
      return;
    }
    const reviewToAdd = {
      id: reviews.length + 1,
      user: newReview.user,
      date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
      rating: Number(newReview.rating),
      content: newReview.content,
    };
    setReviews([reviewToAdd, ...reviews]);
    setNewReview({ user: '', rating: 5, content: '' });
  };

  return (
    <section className="review-section">
      <h2>리뷰 3</h2>
      <div className="summary">
        <div className="average-rating">
          <span className="star">★</span>
          <span className="score">5.0</span>
        </div>
        <div className="satisfaction">
          <span className="stars">★★★★★</span>
          <p>구매자의 100%가 이 상품에 만족했어요</p>
        </div>
      </div>
      <hr />

      <div className="review-list">
        {reviews.map(({ id, user, date, rating, content }) => (
          <div key={id} className="review-item">
            <div className="user-info">
              <div className="user-name">{user}</div>
              <div className="review-date">{date}</div>
            </div>
            <div className="review-content">
              <div className="stars">{'★'.repeat(rating)}</div>
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <div className="add-review">
        <h3>리뷰 추가하기</h3>
        <input
          type="text"
          name="user"
          placeholder="이름을 입력하세요"
          value={newReview.user}
          onChange={handleInputChange}
        />
        <select
          name="rating"
          value={newReview.rating}
          onChange={handleInputChange}
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {'★'.repeat(num)}
            </option>
          ))}
        </select>
        <textarea
          name="content"
          placeholder="리뷰 내용을 입력하세요"
          value={newReview.content}
          onChange={handleInputChange}
        />
        <button onClick={addReview}>리뷰 추가하기</button>
      </div>
    </section>
  );
};

export default ReviewSection;