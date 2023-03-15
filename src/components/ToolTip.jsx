import React, { useState } from "react";
import PropTypes from "prop-types";
const Tooltip = (props, className) => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-fit"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <div className="content">{props.children}</div>
      
      {active && (
        <div className={`tooltip ${props.className} ${props.position}`}>{props.content}</div>
      )}
    </div>
  );
};

export default Tooltip;
Tooltip.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
};
