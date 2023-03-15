import React from "react";
import PropTypes from "prop-types";

const ModalPopup = ({
  show,
  children,
  overLayBg = "bg-black ",
  overLayOpacity = "bg-opacity-50",
}) => {
  return (
    <div className={`fixed z-10 inset-0 ${!show && "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
        <div className={`fixed inset-0 ${overLayBg} ${overLayOpacity}`}></div>
        {children}
      </div>
    </div>
  );
};

export default ModalPopup;

ModalPopup.propTypes = {
  show: PropTypes.bool,
  overLayBg: PropTypes.string,
  overLayOpacity: PropTypes.string,
  children: PropTypes.node,
};
