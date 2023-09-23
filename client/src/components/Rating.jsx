const Rating = () => {
    const emptyStars = 5;
    const starSize = "30px"; // Adjust the size as needed
  
    const emptyStarArray = Array.from({ length: emptyStars }, (_, index) => (
      <span
        key={index}
        className="empty-star"
        style={{ fontSize: starSize }}
      >
        ☆
      </span>
    ));
  
    return (
      <div className="rating">
        {emptyStarArray}
      </div>
    );
  };
  
  export default Rating;
  