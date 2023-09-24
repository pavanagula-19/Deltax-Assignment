import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const renderRatingStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "gold" }} />
      );
    } else {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "gray" }} />
      );
    }
  }
  return stars;
};

export default renderRatingStars;
