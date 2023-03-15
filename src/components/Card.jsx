import React from "react";
import PropTypes from "prop-types";

const Card = ({
  cardClass = "",
  cardBg = "bg-white",
  cardBorder = "border",
  cardBorderColor = "border-brightGray",
  cardRadius = "rounded-2.5xl",
  cardPadding = "pt-6 px-6 pb-12",
  children,
}) => {
  return (
    <div
      className={`${cardBg} ${cardBorder} ${cardBorderColor} ${cardRadius} ${cardPadding} ${cardClass} `}
    >
      {children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  cardBg: PropTypes.string,
  cardBorderColor: PropTypes.string,
  cardRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  Children: PropTypes.string,
};
