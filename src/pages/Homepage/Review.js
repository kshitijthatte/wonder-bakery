const Review = ({ review, author }) => {
  return (
    <div className="card">
      <div className="card-description">{review}</div>
      <strong className="card-subtitle">- by {author}</strong>
    </div>
  );
};

export default Review;
