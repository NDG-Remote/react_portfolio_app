import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-custom-gradient rounded-[10px] outline-none ${styles}`}>
    Explore More
  </button>
);

export default Button;